/**
 * GAM：全站仅用一次 googletag.enableServices。
 * 仅注册锚点 + 插屏；页内横幅在各路由挂载时再 defineSlot（见 gptAds.js）。
 */
/* global googletag */
import { GPT_UNIT_SPECS } from '@/config/gpt'

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

    // 弃用 pubads.enableSingleRequest()；页内按需注册后首页约 10 槽以内，可自行改为 true。
    googletag.setConfig({ singleRequest: false })
    googletag.enableServices()
  })

  googletag.cmd.push(function () {
    googletag.display(GPT_UNIT_SPECS.anchor.elementId)
    googletag.display(GPT_UNIT_SPECS.inter.elementId)
  })
}
