/**
 * 页内仅 googletag.display（define 已在 registerParalivesGpt 完成）。
 */
/* global googletag */
import { onMounted } from 'vue'

export function displayGptSlotsById(elementIds) {
  if (typeof window === 'undefined') return
  window.googletag = window.googletag || { cmd: [] }
  googletag.cmd.push(function () {
    for (let i = 0; i < elementIds.length; i++) {
      const id = elementIds[i]
      if (document.getElementById(id)) googletag.display(id)
    }
  })
}

/** entries: { elementId, unitKey }[] 或沿用旧式 [id, _]（忽略第二项） */
export function mountGptPageAds(entries) {
  const ids = entries.map((e) => (Array.isArray(e) ? e[0] : e.elementId))
  displayGptSlotsById(ids)
}

export function useGptAds(entries) {
  onMounted(() => mountGptPageAds(entries))
}
