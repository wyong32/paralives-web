/**
 * 页内 GPT：defineSlot + display；不调用 enableServices（由 index.html 负责）。
 */
/* global googletag */
import { onMounted, onUnmounted } from 'vue'
import { getBannerSpec, GPT_FIXED, GPT_GLOBAL } from '@/gpt/config'

const MOBILE_MAX_WIDTH = 768

function normalizeEntries(entries) {
  return entries.map((e) => {
    if (Array.isArray(e)) return { elementId: e[0], unit: e[1] }
    return { elementId: e.elementId, unit: e.unit ?? e.unitKey }
  })
}

function getRegistry() {
  if (!window.__gptInpageSlots) window.__gptInpageSlots = new Map()
  return window.__gptInpageSlots
}

function numericSizes(sizes) {
  if (!Array.isArray(sizes)) return []
  return sizes.filter((s) => Array.isArray(s) && s.length >= 2)
}

function buildSizeMapping(sizes) {
  const list = numericSizes(sizes)
  if (list.length <= 1) return null

  const tagged = list.map((size) => ({ w: size[0], size }))
  const mobile = tagged.filter((t) => t.w <= MOBILE_MAX_WIDTH).map((t) => t.size)
  const desktop = tagged.filter((t) => t.w > MOBILE_MAX_WIDTH).map((t) => t.size)

  const mobileSizes = mobile.length
    ? mobile
    : [tagged.reduce((a, b) => (a.w <= b.w ? a : b)).size]
  const desktopSizes = desktop.length ? desktop : list
  const mobileMax = Math.max(...mobileSizes.map((s) => s[0]))
  const breakpoint = Math.max(mobileMax + 1, MOBILE_MAX_WIDTH + 1)

  return googletag
    .sizeMapping()
    .addSize([breakpoint, 0], desktopSizes)
    .addSize([0, 0], mobileSizes)
    .build()
}

function defineInpageSlot(elementId, unit, pubads, reg) {
  if (unit === 'fixed' || unit === 'fixed1') {
    if (!GPT_FIXED?.path) return null
    const fixed = GPT_FIXED
    const slot = googletag.defineSlot(fixed.path, fixed.sizes, elementId).addService(pubads)
    reg.set(elementId, slot)
    return slot
  }

  const spec = getBannerSpec(unit)
  if (!spec?.path) return null

  let slot = reg.get(elementId)
  if (slot) return slot

  const mapping = buildSizeMapping(spec.sizes)
  const defined = googletag.defineSlot(spec.path, numericSizes(spec.sizes), elementId)
  if (!defined) return null
  slot = mapping ? defined.defineSizeMapping(mapping).addService(pubads) : defined.addService(pubads)
  reg.set(elementId, slot)
  return slot
}

export function initGptGlobalHooks() {
  if (typeof window === 'undefined' || window.__gptAnchorHooked) return
  window.__gptAnchorHooked = true
  window.googletag = window.googletag || { cmd: [] }
  googletag.cmd.push(function () {
    const anchorId = GPT_GLOBAL.anchor?.elementId
    if (!anchorId) return
    googletag.pubads().addEventListener('slotRenderEnded', function (event) {
      if (event.slot.getSlotElementId() !== anchorId) return
      const node = document.getElementById(anchorId)
      if (!node) return
      if (event.isEmpty) node.classList.remove('gpt-anchor-has-ad')
      else node.classList.add('gpt-anchor-has-ad')
    })
  })
}

export function mountGptPageAds(entries) {
  if (typeof window === 'undefined') return
  const rows = normalizeEntries(entries).filter((r) => document.getElementById(r.elementId))
  if (!rows.length) return

  window.googletag = window.googletag || { cmd: [] }
  googletag.cmd.push(function () {
    const pubads = googletag.pubads()
    const reg = getRegistry()
    for (let i = 0; i < rows.length; i++) {
      defineInpageSlot(rows[i].elementId, rows[i].unit, pubads, reg)
    }
    for (let i = 0; i < rows.length; i++) {
      googletag.display(rows[i].elementId)
    }
  })
}

export function destroyGptPageAds(entries) {
  if (typeof window === 'undefined') return
  const ids = normalizeEntries(entries).map((r) => r.elementId)
  window.googletag = window.googletag || { cmd: [] }
  googletag.cmd.push(function () {
    const reg = window.__gptInpageSlots
    if (!reg?.size) return
    const slots = []
    for (let i = 0; i < ids.length; i++) {
      const s = reg.get(ids[i])
      if (s) {
        slots.push(s)
        reg.delete(ids[i])
      }
    }
    if (slots.length && googletag.destroySlots) googletag.destroySlots(slots)
  })
}

export function useGptAds(entries) {
  onMounted(() => mountGptPageAds(entries))
  onUnmounted(() => destroyGptPageAds(entries))
}
