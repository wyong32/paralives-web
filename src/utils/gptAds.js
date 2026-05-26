/**
 * SPA：仅对「当前页面已有 DOM」的 div 执行 defineSlot + display；
 * 离开时 destroySlots，避免 Publisher Console「全站 66 槽位但只有几个 div」的问题。
 */
/* global googletag */
import { onMounted, onUnmounted } from 'vue'
import { GPT_UNIT_SPECS } from '@/config/gpt'

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

/** entries: { elementId, unitKey }[] */
export function mountGptPageAds(entries) {
  if (typeof window === 'undefined') return
  const rows = normalizeEntries(entries)
  window.googletag = window.googletag || { cmd: [] }

  googletag.cmd.push(function () {
    const pubads = googletag.pubads()
    const reg = getInpageSlotRegistry()

    for (let i = 0; i < rows.length; i++) {
      const { elementId, unitKey } = rows[i]
      if (!document.getElementById(elementId)) continue
      const spec = GPT_UNIT_SPECS[unitKey]
      if (!spec?.path) continue

      let slot = reg.get(elementId)
      if (!slot) {
        slot = googletag.defineSlot(spec.path, spec.sizes, elementId).addService(pubads)
        reg.set(elementId, slot)
      }
      googletag.display(elementId)
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
  })
}

/** entries: { elementId, unitKey }[] */
export function useGptAds(entries) {
  onMounted(() => mountGptPageAds(entries))
  onUnmounted(() => destroyGptPageAds(entries))
}
