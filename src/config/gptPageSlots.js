/**
 * 页面内占位：全站唯一的 div id + 所用广告单元（与 gpt.js 中 GPT_UNIT_SPECS 键一致）。
 * 从上到下循环 banner1 → banner2 → banner3 → fixed。
 */

function pack(pageSlug, count) {
  const cycle = ['banner1', 'banner2', 'banner3', 'fixed']
  const out = []
  for (let i = 0; i < count; i++) {
    out.push({
      elementId: `div-gpt-ad-${pageSlug}-${i + 1}`,
      unitKey: cycle[i % cycle.length],
    })
  }
  return out
}

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

/** 全站页内点位汇总（不参与启动 define；仅供核对数量或脚本使用） */
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
