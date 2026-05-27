/**
 * 页面内占位：全站唯一的 div id + 所用广告单元（仅 banner1 / banner2 / banner3 轮换）。
 */
import { GPT_UNIT_SPECS } from '@/config/gpt'

function pack(pageSlug, count) {
  const cycle = ['banner1', 'banner2', 'banner3']
  const out = []
  for (let i = 0; i < count; i++) {
    out.push({
      elementId: `div-gpt-ad-${pageSlug}-${i + 1}`,
      unitKey: cycle[i % cycle.length],
    })
  }
  return out
}

/** 仅首页：锚定 + 插屏（Teleport 到 body），与 GAM 后台 id 一致 */
export const GPT_SLOTS_HOME_GLOBAL = [
  { elementId: GPT_UNIT_SPECS.anchor.elementId, unitKey: 'anchor' },
  { elementId: GPT_UNIT_SPECS.inter.elementId, unitKey: 'inter' },
]

export const GPT_SLOTS_HOME = pack('home', 8)
export const GPT_SLOTS_START = pack('start', 11)
export const GPT_SLOTS_WIKI = pack('wiki', 3)
export const GPT_SLOTS_GUIDES = pack('guides', 3)
export const GPT_SLOTS_GUIDE_DETAIL = pack('guidedetail', 3)
export const GPT_SLOTS_MODS = pack('mods', 6)
export const GPT_SLOTS_UPDATES = pack('updates', 5)
export const GPT_SLOTS_MAP = pack('map', 7)
export const GPT_SLOTS_MOD_DETAIL = pack('moddetail', 3)
export const GPT_SLOTS_SIM_HUB = pack('simhub', 3)
export const GPT_SLOTS_SIM_TRAIT = pack('simtrait', 3)
export const GPT_SLOTS_SIM_SESSION = pack('simsession', 3)
export const GPT_SLOTS_SIM_FEATURE = pack('simfeature', 3)
export const GPT_SLOTS_SIM_COLOR = pack('simcolor', 3)

/** 页内横幅汇总（不含首页全局锚定/插屏；仅供核对） */
export const GPT_ALL_INPAGE_SLOTS = [
  ...GPT_SLOTS_HOME,
  ...GPT_SLOTS_START,
  ...GPT_SLOTS_WIKI,
  ...GPT_SLOTS_GUIDES,
  ...GPT_SLOTS_GUIDE_DETAIL,
  ...GPT_SLOTS_MODS,
  ...GPT_SLOTS_UPDATES,
  ...GPT_SLOTS_MAP,
  ...GPT_SLOTS_MOD_DETAIL,
  ...GPT_SLOTS_SIM_HUB,
  ...GPT_SLOTS_SIM_TRAIT,
  ...GPT_SLOTS_SIM_SESSION,
  ...GPT_SLOTS_SIM_FEATURE,
  ...GPT_SLOTS_SIM_COLOR,
]
