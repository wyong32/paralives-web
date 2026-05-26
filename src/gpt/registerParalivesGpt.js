/**
 * GAM：全站仅用一次 googletag.enableServices；
 * defineSlot / 路径 / 尺寸与后台导出一致。
 */
/* global googletag */
import { GPT_UNIT_SPECS } from '@/config/gpt'
import { GPT_ALL_INPAGE_SLOTS } from '@/config/gptPageSlots'

export function registerParalivesGptSlots() {
  if (typeof window === 'undefined' || window.__gptParalivesRegistered) return
  window.__gptParalivesRegistered = true
  window.googletag = window.googletag || { cmd: [] }

  googletag.cmd.push(function () {
    const pubads = googletag.pubads()

    googletag
      .defineSlot(GPT_UNIT_SPECS.anchor.path, GPT_UNIT_SPECS.anchor.sizes, GPT_UNIT_SPECS.anchor.elementId)
      .addService(pubads)
    googletag
      .defineSlot(GPT_UNIT_SPECS.inter.path, GPT_UNIT_SPECS.inter.sizes, GPT_UNIT_SPECS.inter.elementId)
      .addService(pubads)

    for (let i = 0; i < GPT_ALL_INPAGE_SLOTS.length; i++) {
      const row = GPT_ALL_INPAGE_SLOTS[i]
      const spec = GPT_UNIT_SPECS[row.unitKey]
      if (!spec) continue
      googletag.defineSlot(spec.path, spec.sizes, row.elementId).addService(pubads)
    }

    pubads.enableSingleRequest()
    googletag.enableServices()
  })

  googletag.cmd.push(function () {
    googletag.display(GPT_UNIT_SPECS.anchor.elementId)
    googletag.display(GPT_UNIT_SPECS.inter.elementId)
  })
}
