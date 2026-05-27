/**
 * GAM 配置 — 从本项目真实导出提取。换项目时整文件替换。
 * index.html 中 anchor/inter 的 path、elementId 须与此处一致。
 */
const BASE = '/23346398271/paralives.wiki_all_0525'
const SITE = 'paralives.wiki_0525'

/** 广告：anchor / inter（全站，index.html） */
export const GPT_GLOBAL = {
  /** 广告：anchor */
  anchor: {
    path: `${BASE}/${SITE}_anchor_1`,
    sizes: [320, 50],
    elementId: 'div-gpt-ad-1779702015214-0',
  },
  /** 广告：inter */
  inter: {
    path: `${BASE}/${SITE}_inter_1`,
    sizes: [[320, 480], 'fluid'],
    elementId: 'div-gpt-ad-1779702201476-0',
  },
}

/** 页内 banner：banner_1、banner_2、banner_3 */
export const GPT_BANNERS = [
  /** 广告：banner_1 */
  {
    key: 1,
    path: `${BASE}/${SITE}_banner_1`,
    sizes: [
      [300, 250],
      [970, 250],
    ],
  },
  /** 广告：banner_2 */
  {
    key: 2,
    path: `${BASE}/${SITE}_banner_2`,
    sizes: [
      [970, 250],
      [300, 250],
    ],
  },
  /** 广告：banner_3 */
  {
    key: 3,
    path: `${BASE}/${SITE}_banner_3`,
    sizes: [
      [300, 250],
      [970, 250],
    ],
  },
]

/** 可选 fixed_1；本项目无 fixed，接入时在真实代码存在且页面有 fixed 占位时填写 */
export const GPT_FIXED = null

const bannerByKey = new Map(GPT_BANNERS.map((b) => [b.key, b]))

export function getBannerSpec(unit) {
  const key = typeof unit === 'number' ? unit : Number(unit)
  return bannerByKey.get(key) ?? null
}

/** 生成页内 useGptAds 列表：第 n 个占位循环映射 banner_1…banner_N */
export function pageBannerEntries(pageSlug, slotCount) {
  const n = GPT_BANNERS.length
  return Array.from({ length: slotCount }, (_, i) => [
    `div-gpt-ad-${pageSlug}-${i + 1}`,
    GPT_BANNERS[i % n].key,
  ])
}
