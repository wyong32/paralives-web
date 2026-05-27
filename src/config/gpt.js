/**
 * Paralives GAM export（2025）：路径与尺寸与后台代码块一致。
 * 锚定 / 插屏 div id 为后台分配的固定 id，仅在首页挂载（HomeView）。
 * 页内仅用 banner_1～3 轮换（无 fixed）。改 unit 时请同步 index 注释与各处引用。
 */
const BASE = '/23346398271/paralives.wiki_all_0525'
const SITE = 'paralives.wiki_0525'

export const GPT_UNITS = {
  anchor: `${BASE}/${SITE}_anchor_1`,
  interstitial: `${BASE}/${SITE}_inter_1`,
  banner1: `${BASE}/${SITE}_banner_1`,
  banner2: `${BASE}/${SITE}_banner_2`,
  banner3: `${BASE}/${SITE}_banner_3`,
}

export const GPT_UNIT_SPECS = {
  anchor: {
    path: GPT_UNITS.anchor,
    sizes: [320, 50],
    elementId: 'div-gpt-ad-1779702015214-0',
  },
  inter: {
    path: GPT_UNITS.interstitial,
    sizes: [[320, 480], 'fluid'],
    elementId: 'div-gpt-ad-1779702201476-0',
  },
  banner1: {
    path: GPT_UNITS.banner1,
    sizes: [
      [300, 250],
      [970, 250],
    ],
  },
  banner2: {
    path: GPT_UNITS.banner2,
    sizes: [
      [970, 250],
      [300, 250],
    ],
  },
  banner3: {
    path: GPT_UNITS.banner3,
    sizes: [
      [300, 250],
      [970, 250],
    ],
  },
}
