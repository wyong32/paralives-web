# GPT 广告接入说明（Vue 3 模板 · AI 执行文档）

本文档供 **AI 接入 Google GPT 广告**时使用。设计原则：**简单、可复用、允许代码重复、但必须正确**。

流程固定：

1. 开发者在页面里用**统一占位符**标出广告位置  
2. 将本文档 + 模板文件（`gpt.js`、`gptAds.js`）放入 Vue 项目  
3. 用户提供后台**真实广告代码** + 占位与 unit 对应关系  
4. AI 严格按本文档完成接入（无需参考其它站点）

---

## 一、项目文件结构（复制进仓库一次）

```
vue-project/
├── GPT-ADS.md                 ← 本文档（可放仓库根或 template-web/）
├── index.html                 ← 全局 anchor + inter（路径与 gpt.js 同步，允许重复）
├── src/
│   ├── config/gpt.js          ← ★ AI 根据真实代码填写（路径 + 尺寸）
│   └── utils/gptAds.js        ← 工具函数（附录 A，一般不改）
```

**新项目只需改两处：**

- `src/config/gpt.js`（路径 + `GPT_BANNER_SIZES`）
- `index.html` 里 anchor / inter 的两条路径（从 `GPT_UNITS` 复制粘贴，故意与 gpt.js 重复以保持简单）

`gptAds.js` 跨项目复用，通常不修改。

---

## 二、页面广告占位符（开发者手写）

在需要展示广告的位置，**原样**使用下面结构（不要改 class / style）：

```html
<!-- 广告占位 -->
<aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
  advertise
</aside>
```

说明：

- 一个占位 = 一个广告位  
- 占位符从上到下、按页面顺序，依次对应 `banner_1`、`banner_2`、`banner_3`（或 `fixed_1`）  
- **不要**在占位阶段写 GPT 脚本或 div id  
- 同一页面多个占位时，用户会在提示词里写清顺序，例如：「HomeView 第 1 个占位 → banner_1，第 2 个 → banner_2」

---

## 三、后台广告代码类型（AI 如何识别）

| 文件名含 | 类型 | 接入方式 |
|----------|------|----------|
| `anchor_1` | 底部锚定 | 只写在 `index.html`，`defineOutOfPageSlot` + `BOTTOM_ANCHOR` |
| `inter_1` | 全屏插屏 | 只写在 `index.html`，`defineOutOfPageSlot` + `INTERSTITIAL` |
| `banner_1` | 横幅 1 | 替换页面占位，unit 用 `1` |
| `banner_2` | 横幅 2 | 替换页面占位，unit 用 `2` |
| `banner_3` | 横幅 3 | 替换页面占位，unit 用 `3` |
| `fixed_1` | 固定条 300×50 | 替换页面占位，unit 用 `'fixed'` |

从后台代码中提取：

- **路径**：`defineSlot` / `defineOutOfPageSlot` 的第一个字符串  
  例：`/23353514653/xxx_all_0523/xxx_0523_banner_1`
- **尺寸**：写入 `gpt.js` 的 `GPT_BANNER_SIZES`（各 banner 可能不同，**不要**全部写成 970×250）

| unit | 常见尺寸 | div `min-height` 参考 |
|------|----------|----------------------|
| banner_1 | `[[970, 90], [300, 250]]` | 90px |
| banner_2 | `[[970, 250], [300, 250]]` | 250px |
| banner_3 | `[[300, 250], [970, 250]]` | 250px |
| fixed_1 | `[300, 50]` | 50px |

**禁止：** 把 anchor / inter 按普通 `defineSlot` 塞进页面占位，必须走 `index.html`（第四节）。

**禁止：** 把后台代码里的 `enableSingleRequest()`、`disableInitialLoad()`、`setCentering()` 原样粘贴进 `index.html`，须改用 `googletag.setConfig()`（第四节）。

---

## 四、index.html（全局广告，只配置一次）

### 4.1 加载 GPT

```html
<!-- GPT 全局广告：anchor/inter 路径与 src/config/gpt.js 的 GPT_UNITS 保持一致 -->
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" crossorigin="anonymous"></script>
```

### 4.2 底部锚定（anchor_1）

```html
<script>
  window.googletag = window.googletag || { cmd: [] };
  googletag.cmd.push(function () {
    var anchorSlot = googletag.defineOutOfPageSlot(
      '此处填 GPT_UNITS.anchor 完整路径',
      googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR
    );
    if (anchorSlot) anchorSlot.addService(googletag.pubads());
    window.__gptAnchorSlot = anchorSlot;
  });
</script>
```

### 4.3 全屏插屏（inter_1）+ 全站只调用一次 enableServices

```html
<script>
  googletag.cmd.push(function () {
    var interstitialSlot = googletag.defineOutOfPageSlot(
      '此处填 GPT_UNITS.interstitial 完整路径',
      googletag.enums.OutOfPageFormat.INTERSTITIAL
    );
    if (interstitialSlot) {
      interstitialSlot.addService(googletag.pubads());
    }
    window.__gptInterstitialSlot = interstitialSlot;
    googletag.setConfig({
      centering: true,
      disableInitialLoad: true,
      singleRequest: true,
    });
    googletag.enableServices();
  });
</script>
```

| 配置项 | 正确写法 | 已弃用（GPT #170） |
|--------|----------|-------------------|
| 插屏居中 | `setConfig({ centering: true })` | `pubads().setCentering()` |
| 禁用首屏自动请求 | `setConfig({ disableInitialLoad: true })` | `pubads().disableInitialLoad()` |
| 单次请求 SRA | `setConfig({ singleRequest: true })` | `pubads().enableSingleRequest()` |

`disableInitialLoad: true` 表示 `display()` 只注册 slot；须配合 `refresh()`（body 末尾 OOP 位 + 页面内 `Gt()` 横幅位）。

### 4.4 body 末尾（在 `#app` 与 `main.js` 之后）

```html
<script>
  googletag.cmd.push(function () {
    var oopSlots = [];
    if (window.__gptAnchorSlot) {
      googletag.display(window.__gptAnchorSlot);
      oopSlots.push(window.__gptAnchorSlot);
    }
    if (window.__gptInterstitialSlot) {
      googletag.display(window.__gptInterstitialSlot);
      oopSlots.push(window.__gptInterstitialSlot);
    }
    if (oopSlots.length) googletag.pubads().refresh(oopSlots);
  });
</script>
```

**禁止** 在 `gptAds.js` 或页面里再次调用 `enableServices()`。

---

## 五、替换页面占位符（AI 执行规则）

把每一个：

```html
<!-- 广告占位 -->
<aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
  advertise
</aside>
```

替换为（**保留 aside 与 style，只把 `advertise` 换成带 id 的空 div**）：

**banner_1（注意 min-height: 90px）：**

```html
<!-- 广告：banner_1 -->
<aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
  <div id="div-gpt-ad-home-1" style="min-width: 300px; min-height: 90px;"></div>
</aside>
```

**banner_2 / banner_3：**

```html
<!-- 广告：banner_2 -->
<aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
  <div id="div-gpt-ad-home-2" style="min-width: 300px; min-height: 250px;"></div>
</aside>
```

**fixed_1：**

```html
<!-- 广告：fixed_1 -->
<aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
  <div id="div-gpt-ad-home-4" style="min-width: 300px; min-height: 50px;"></div>
</aside>
```

### div id 命名

- 格式：`div-gpt-ad-{页面简称}-{序号}`  
- 全站唯一，例如：`div-gpt-ad-home-1`、`div-gpt-ad-list-2`、`div-gpt-ad-detail-3`  
- `v-for` 循环内可用：`div-gpt-ad-home-${block.slug}`，须在 `useGptAds` 中列出对应 id  
- **不要**使用后台示例 id（如 `div-gpt-ad-1779503529329-0`）

### div 内不写 script

正常。由 `gptAds.js` 的 `Gt()` 执行 `defineSlot` → `display` → `refresh`，等价于后台 div 内嵌的 `googletag.display` 脚本。

---

## 六、页面 JS 注册（AI 执行规则）

### 6.1 普通页面 — 用 `useGptAds`（推荐，一行接入）

在 `<script setup>` 顶层调用（**不要**包在 `onMounted` 里，`useGptAds` 内部已处理）：

```javascript
import { useGptAds } from '@/utils/gptAds'

useGptAds([
  ['div-gpt-ad-home-1', 1],
  ['div-gpt-ad-home-2', 2],
  ['div-gpt-ad-home-3', 3],
  ['div-gpt-ad-home-4', 'fixed'],
])
```

| 第二参数 | 含义 |
|----------|------|
| `1` | banner_1 |
| `2` | banner_2 |
| `3` | banner_3 |
| `'fixed'` | fixed_1 |

`useGptAds` 会在 `onMounted` 挂载、`onUnmounted` 调用 `destroyGptPageAds` 销毁 slot，避免 Vue SPA 切页后横幅空白。

### 6.2 延迟渲染页面 — 用手动 `mountGptPageAds` + `destroyGptPageAds`

当广告 div 在 `v-if` 内、**数据加载后才出现在 DOM** 时，**不能**在页面初始化时用 `useGptAds` 注册这些 id。

典型场景：详情页正文下方的广告。

```javascript
import { computed, nextTick, onMounted, onUnmounted, reactive, watch } from 'vue'
import { destroyGptPageAds, mountGptPageAds } from '@/utils/gptAds'

const DETAIL_AD_IDS = [
  'div-gpt-ad-detail-1',
  'div-gpt-ad-detail-2',
  'div-gpt-ad-detail-3',
  'div-gpt-ad-detail-4',
]

// 首屏即存在的广告
onMounted(() => {
  mountGptPageAds([['div-gpt-ad-detail-1', 1]])
  load()
})

// 离开页面时销毁全部 slot
onUnmounted(() => destroyGptPageAds(DETAIL_AD_IDS))

async function load() {
  // ... 请求详情 ...
  state.article = data
  await nextTick()
  // v-if 渲染后再挂载
  mountGptPageAds([
    ['div-gpt-ad-detail-2', 2],
    ['div-gpt-ad-detail-3', 3],
    ['div-gpt-ad-detail-4', 'fixed'],
  ])
}
```

---

## 七、config/gpt.js（AI 根据真实代码填写）

```javascript
/**
 * GPT 广告配置 —— 新项目只需改此文件
 * index.html 里的 anchor / inter 路径请与 GPT_UNITS 保持一致（允许重复粘贴）
 */
const BASE = '/23353514653/域名_all_日期'
const SITE = '域名_日期'

export const GPT_UNITS = {
  anchor: `${BASE}/${SITE}_anchor_1`,
  interstitial: `${BASE}/${SITE}_inter_1`,
  banner1: `${BASE}/${SITE}_banner_1`,
  banner2: `${BASE}/${SITE}_banner_2`,
  banner3: `${BASE}/${SITE}_banner_3`,
  fixed1: `${BASE}/${SITE}_fixed_1`,
}

/** 各 banner 尺寸（从后台 defineSlot 第二参数提取，各 unit 可能不同） */
export const GPT_BANNER_SIZES = {
  1: {
    slotSizes: [[970, 90], [300, 250]],
    desktop: [[970, 90], [300, 250]],
    mobile: [300, 250],
  },
  2: {
    slotSizes: [[970, 250], [300, 250]],
    desktop: [[970, 250], [300, 250]],
    mobile: [300, 250],
  },
  3: {
    slotSizes: [[300, 250], [970, 250]],
    desktop: [[970, 250], [300, 250]],
    mobile: [300, 250],
  },
}
```

`index.html` 里 anchor / inter 的路径必须与 `GPT_UNITS.anchor` / `GPT_UNITS.interstitial` 一致（复制粘贴即可，无需构建注入）。

---

## 八、发给 AI 的提示词（复制即用）

```
请按项目 GPT-ADS.md 接入 GPT 广告。

【真实广告代码】
（粘贴 anchor / inter / banner_1~3 / fixed_1 的完整代码）

【占位与 unit 对应】
（列出每个文件里占位符顺序，例如：）
- HomeView.vue：第1个 → banner_1，第2个 → banner_2，第3个 → banner_3
- ArticlesView.vue：第1个 → banner_1，第2个 → banner_2，第3个 → banner_3
- DetailView.vue：第1个 → banner_1；正文上 banner_2；正文下 banner_3；推荐下 fixed_1

【要求】
1. 从代码提取路径与尺寸，写入 src/config/gpt.js（含 GPT_BANNER_SIZES）
2. index.html 配置 anchor、inter（路径与 gpt.js 一致，允许重复）
3. 将所有「广告占位 + advertise」替换为 aside 内空 div（保留 aside style）
4. div id 使用 div-gpt-ad-{页面}-{序号}，全站唯一
5. 普通页面：<script setup> 顶层调用 useGptAds([['div-id', unit], ...])
6. v-if 延迟渲染页：mountGptPageAds + nextTick + onUnmounted destroyGptPageAds
7. unit：banner_1/2/3 → 1/2/3，fixed_1 → 'fixed'
8. 不要新建 Vue 广告组件；不要重复 enableServices；不要给广告单独加 CSS
9. index.html 必须用 googletag.setConfig()，禁止 pubads().enableSingleRequest() 等旧 API
10. 使用已有 src/utils/gptAds.js，保留 refresh / destroy 逻辑
11. 完成后 npm run build 必须通过
```

---

## 九、自检清单

- [ ] `index.html` 已加载 `gpt.js`，且**仅一处** `enableServices()`
- [ ] `setConfig({ centering, disableInitialLoad, singleRequest })` 无旧 API
- [ ] anchor、inter 使用 `defineOutOfPageSlot`，不在页面占位里
- [ ] 所有「广告占位」已替换，无残留 `advertise` 文案
- [ ] 每个 div id 全站唯一
- [ ] 普通页面使用 `useGptAds`；延迟渲染页使用 `mountGptPageAds` + `destroyGptPageAds`
- [ ] `GPT_BANNER_SIZES` 与后台各 banner 尺寸一致（banner_1 常为 970×90）
- [ ] `gpt.js` 与 `index.html` 中 anchor/inter 路径一致
- [ ] `npm run build` 通过

---

## 十、常见问题

| 现象 | 原因 / 处理 |
|------|-------------|
| 本地看不到广告 | 需部署正式域名；关闭广告拦截 |
| 锚定/插屏有、横幅无 | 检查是否调用 `useGptAds` 或 `mountGptPageAds` |
| SPA 切页后横幅空白 | 确认普通页用了 `useGptAds`（含 destroy）；延迟页在 `onUnmounted` 调 `destroyGptPageAds` |
| 详情页部分广告不显示 | div 在 `v-if` 内，须在数据加载 + `nextTick` 后再 `mountGptPageAds` |
| banner_1 高度不对 | 更新 `GPT_BANNER_SIZES[1]` 与 div `min-height: 90px` |
| 后台 anchor 代码是 defineSlot | 仍用 `defineOutOfPageSlot` + `BOTTOM_ANCHOR` |
| GPT #170 deprecated 警告 | 改用 `googletag.setConfig()`，勿粘贴后台旧 API |
| 同页多次使用同一 unit | 允许（不同 div id）；注意 Ad Manager 侧每页限制 |

---

## 附录 A：`src/utils/gptAds.js`（模板，跨项目复用，通常不改）

```javascript
import { onMounted, onUnmounted } from 'vue'
import { GPT_BANNER_SIZES, GPT_UNITS } from '@/config/gpt'

const UNIT_PATH = {
  1: GPT_UNITS.banner1,
  2: GPT_UNITS.banner2,
  3: GPT_UNITS.banner3,
  fixed: GPT_UNITS.fixed1,
  fixed1: GPT_UNITS.fixed1,
}

function getSlotMap() {
  if (!window.__gptSlotMap) window.__gptSlotMap = {}
  return window.__gptSlotMap
}

function buildBannerSlot(path, unit, elementId) {
  const sizes = GPT_BANNER_SIZES[unit] ?? GPT_BANNER_SIZES[2]
  const mapping = googletag
    .sizeMapping()
    .addSize([1024, 768], sizes.desktop)
    .addSize([0, 0], sizes.mobile)
    .build()
  return googletag
    .defineSlot(path, sizes.slotSizes, elementId)
    ?.defineSizeMapping(mapping)
    ?.addService(googletag.pubads())
}

export function Gt(elementId, unit) {
  const path = UNIT_PATH[unit] ?? UNIT_PATH[Number(unit)]
  if (!path || !elementId) return
  if (!document.getElementById(elementId)) return

  window.googletag = window.googletag || { cmd: [] }
  googletag.cmd.push(() => {
    const slotMap = getSlotMap()
    let slot = slotMap[elementId]

    if (!slot) {
      if (unit === 'fixed' || unit === 'fixed1') {
        slot = googletag.defineSlot(path, [300, 50], elementId)?.addService(googletag.pubads())
      } else {
        slot = buildBannerSlot(path, Number(unit), elementId)
      }
      if (!slot) return
      slotMap[elementId] = slot
    }

    googletag.display(elementId)
    googletag.pubads().refresh([slot])
  })
}

export function mountGptPageAds(entries) {
  for (const [elementId, unit] of entries) Gt(elementId, unit)
}

export function destroyGptPageAds(elementIds) {
  if (!elementIds?.length) return
  window.googletag = window.googletag || { cmd: [] }
  googletag.cmd.push(() => {
    const slotMap = getSlotMap()
    const slots = elementIds.map((id) => slotMap[id]).filter(Boolean)
    if (slots.length && googletag.destroySlots) googletag.destroySlots(slots)
    elementIds.forEach((id) => {
      delete slotMap[id]
    })
  })
}

/** 普通页面一行接入：onMounted 挂载，onUnmounted 销毁 */
export function useGptAds(entries) {
  const ids = entries.map(([id]) => id)
  onMounted(() => mountGptPageAds(entries))
  onUnmounted(() => destroyGptPageAds(ids))
}
```

---

## 附录 B：`src/config/gpt.js` 填写示例

```javascript
const BASE = '/23353514653/finance.sbgtpz.com_all_0523'
const SITE = 'finance.sbgtpz.com_0523'

export const GPT_UNITS = {
  anchor: `${BASE}/${SITE}_anchor_1`,
  interstitial: `${BASE}/${SITE}_inter_1`,
  banner1: `${BASE}/${SITE}_banner_1`,
  banner2: `${BASE}/${SITE}_banner_2`,
  banner3: `${BASE}/${SITE}_banner_3`,
  fixed1: `${BASE}/${SITE}_fixed_1`,
}

export const GPT_BANNER_SIZES = {
  1: { slotSizes: [[970, 90], [300, 250]], desktop: [[970, 90], [300, 250]], mobile: [300, 250] },
  2: { slotSizes: [[970, 250], [300, 250]], desktop: [[970, 250], [300, 250]], mobile: [300, 250] },
  3: { slotSizes: [[300, 250], [970, 250]], desktop: [[970, 250], [300, 250]], mobile: [300, 250] },
}
```

---

## 附录 C：后台代码解析速查

| 后台文件名 | 放哪里 | 页面 JS |
|-----------|--------|---------|
| `*_anchor_1` | index.html OOP | 无 |
| `*_inter_1` | index.html OOP | 无 |
| `*_banner_1` | 页面 div | `useGptAds` 第二参数 `1` |
| `*_banner_2` | 页面 div | `2` |
| `*_banner_3` | 页面 div | `3` |
| `*_fixed_1` | 页面 div | `'fixed'` |

后台每个代码块里的 `div id='div-gpt-ad-xxxxx'` **仅作参考**；项目内必须使用自命名 id，并在 `useGptAds` / `mountGptPageAds` 中注册。
