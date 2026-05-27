/**
 * SPA：仅在当前路由挂载的 DOM 上 defineSlot + display；
 * 首次批次内单次 enableServices。横幅用 sizeMapping 按视宽约 970×250 / 窄 300×250。
 */
/* global googletag */
import { onMounted, onUnmounted } from 'vue'
import { GPT_UNIT_SPECS } from '@/config/gpt'

const BANNER_KEYS = /** @type {const} */ (['banner1', 'banner2', 'banner3'])

function normalizeEntries(entries) {
  return entries.map((e) => {
    if (Array.isArray(e)) return { elementId: e[0], unitKey: e[1] }
    return { elementId: e.elementId, unitKey: e.unitKey }
  })
}

function getInpageSlotRegistry() {
  if (!window.__gptParalivesInpageSlots) window.__gptParalivesInpageSlots = new Map()
  return window.__gptParalivesInpageSlots
}

function getResponsiveBannerMapping() {
  if (window.__gptParalivesBannerSzMap) return window.__gptParalivesBannerSzMap
  window.__gptParalivesBannerSzMap = googletag
    .sizeMapping()
    .addSize([992, 0], [[970, 250]])
    .addSize([0, 0], [[300, 250]])
    .build()
  return window.__gptParalivesBannerSzMap
}

function hookAnchorVacancyOnce(pubads) {
  const anchorId = GPT_UNIT_SPECS.anchor.elementId
  if (!anchorId || window.__gptParalivesAnchorVacancyHooked) return
  window.__gptParalivesAnchorVacancyHooked = true
  pubads.addEventListener('slotRenderEnded', function (event) {
    if (event.slot.getSlotElementId() !== anchorId) return
    var node = document.getElementById(anchorId)
    if (!node) return
    if (event.isEmpty) node.classList.remove('gpt-anchor-has-ad')
    else node.classList.add('gpt-anchor-has-ad')
  })
}

function defineSlotRow(elementId, unitKey, pubads, reg) {
  const spec = GPT_UNIT_SPECS[unitKey]
  if (!spec?.path) return null

  if (unitKey === 'anchor' && typeof document !== 'undefined') {
    hookAnchorVacancyOnce(pubads)
  }

  let slot = reg.get(elementId)

  if (slot) return slot

  if (BANNER_KEYS.includes(/** @type {string} */ (unitKey))) {
    slot = googletag
      .defineSlot(spec.path, spec.sizes, elementId)
      .defineSizeMapping(getResponsiveBannerMapping())
      .addService(pubads)
  } else {
    slot = googletag.defineSlot(spec.path, spec.sizes, elementId).addService(pubads)
  }
  reg.set(elementId, slot)
  return slot
}

/** entries: { elementId, unitKey }[] */
export function mountGptPageAds(entries) {
  if (typeof window === 'undefined') return
  const rows = normalizeEntries(entries).filter((r) => document.getElementById(r.elementId))
  if (!rows.length) return

  window.googletag = window.googletag || { cmd: [] }

  googletag.cmd.push(function () {
    const pubads = googletag.pubads()
    const reg = getInpageSlotRegistry()

    for (let i = 0; i < rows.length; i++) {
      const { elementId, unitKey } = rows[i]
      defineSlotRow(elementId, unitKey, pubads, reg)
    }

    if (!window.__gptParalivesServicesEnabled) {
      googletag.setConfig({ singleRequest: true })
      googletag.enableServices()
      window.__gptParalivesServicesEnabled = true
    }

    for (let i = 0; i < rows.length; i++) {
      googletag.display(rows[i].elementId)
    }
  })
}

/** entries: 与 mount 同源，用于 SPA 离开时释放 slot */
export function destroyGptPageAds(entries) {
  if (typeof window === 'undefined') return
  const rows = normalizeEntries(entries)
  const ids = rows.map((r) => r.elementId)
  window.googletag = window.googletag || { cmd: [] }

  googletag.cmd.push(function () {
    const reg = window.__gptParalivesInpageSlots
    if (!reg?.size) return
    const slots = []
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i]
      const s = reg.get(id)
      if (s) {
        slots.push(s)
        reg.delete(id)
      }
    }
    if (slots.length) googletag.destroySlots(slots)
    for (let i = 0; i < ids.length; i++) {
      const el = document.getElementById(ids[i])
      if (el?.id === GPT_UNIT_SPECS.anchor.elementId) {
        el.classList.remove('gpt-anchor-has-ad')
      }
    }
  })
}

/** entries: { elementId, unitKey }[] */
export function useGptAds(entries) {
  onMounted(() => mountGptPageAds(entries))
  onUnmounted(() => destroyGptPageAds(entries))
}
