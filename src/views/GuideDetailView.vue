<template>
  <article v-if="guide" class="guide-detail-page">
    <section class="guide-detail-hero" aria-labelledby="guide-title">
      <div class="guide-detail-hero-media" aria-hidden="true">
        <img :src="guide.imageUrl" :alt="guide.imageAlt" width="1200" height="500" />
        <div class="guide-detail-hero-overlay"></div>
      </div>
      <div class="container guide-detail-hero-inner">
        <nav class="guide-breadcrumb" aria-label="Breadcrumb">
          <a href="/guides">Guides</a>
          <span aria-hidden="true">/</span>
          <span>{{ guide.tags?.[0] || 'Article' }}</span>
        </nav>
        <header class="guide-detail-header">
          <ul v-if="guide.tags?.length" class="guide-detail-tags" aria-label="Topics">
            <li v-for="tag in guide.tags" :key="tag">{{ tag }}</li>
          </ul>
          <h1 id="guide-title">{{ guide.title }}</h1>
          <p class="guide-detail-desc">{{ guide.description }}</p>
          <p class="guide-detail-meta">
            <time :datetime="guide.publishDate">{{ formatDate(guide.publishDate) }}</time>
          </p>
          <p class="guide-detail-disclaimer">
            Fan-written for Early Access players. Facts may change with patches — check
            <a href="/updates">Updates</a> after major releases.
          </p>
        </header>
      </div>
    </section>

    <!-- 广告：GPT slot 1 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-guidedetail-1" class="gpt-banner-ad"></div>
    </aside>

    <section class="guide-detail-body-section">
      <div class="container">
        <nav
          v-if="guideToc.length"
          class="guide-toc-mobile"
          aria-label="Sections on this guide"
        >
          <a
            v-for="(item, i) in guideToc"
            :key="item.id"
            :href="`#${item.id}`"
            class="guide-toc-mobile-link"
            :class="{ 'is-active': activeTocId === item.id }"
          >
            {{ i + 1 }}
          </a>
        </nav>

        <div class="guide-detail-layout">
          <div class="guide-article-col">
            <!-- 广告：GPT slot 2 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-guidedetail-2" class="gpt-banner-ad"></div>
    </aside>
            <div
              ref="guideProseRef"
              class="guide-article-prose"
              v-html="guide.detailsHtml"
            ></div>
            <!-- 广告：GPT slot 3 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-guidedetail-3" class="gpt-banner-ad"></div>
    </aside>
          </div>
          <aside class="guide-aside" aria-label="Guide info">
            <div v-if="guideToc.length" class="guide-aside-card guide-aside-card--toc">
              <h2>Sections</h2>
              <nav class="guide-toc-nav" aria-label="Guide section links">
                <a
                  v-for="item in guideToc"
                  :key="item.id"
                  :href="`#${item.id}`"
                  class="guide-toc-nav-link"
                  :class="{ 'is-active': activeTocId === item.id }"
                >
                  {{ item.label }}
                </a>
              </nav>
            </div>

            <div class="guide-aside-card guide-aside-card--links">
              <h2>Explore more</h2>
              <ul class="guide-aside-links">
                <li><a href="/guides">All guides</a></li>
                <li><a href="/wiki">Wiki</a></li>
                <li><a href="/mods">Mods</a></li>
                <li><a href="/updates">Updates</a></li>
                <li><a href="/map">Town map</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </article>

  <article v-else class="guide-detail-page guide-detail-page--missing">
    <div class="container">
      <div class="guide-not-found">
        <img src="/images/ico.webp" alt="" aria-hidden="true" />
        <h1>Guide not found</h1>
        <p>This walkthrough does not exist or was moved.</p>
        <a href="/guides" class="btn btn-primary">Back to guides</a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, ref, watch, nextTick, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import guides from '@/data/guides.js'
import { GPT_SLOTS_GUIDE_DETAIL } from '@/config/gptPageSlots'
import { mountGptPageAds, destroyGptPageAds } from '@/utils/gptAds'

const route = useRoute()
const guideProseRef = ref(null)
const guideToc = ref([])
const activeTocId = ref('')

let tocObserver = null

const guide = computed(() => guides.find((g) => g.addressBar === route.params.slug))

function disconnectTocObserver() {
  tocObserver?.disconnect()
  tocObserver = null
}

/** URL-safe slug from heading text; used when injected HTML has no id on h2 */
function slugifyHeading(text) {
  const raw = String(text || '')
    .trim()
    .toLowerCase()
    .replace(/[''`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return raw.slice(0, 72) || 'section'
}

/**
 * Assign stable ids to h2 in injected prose and return toc entries.
 * Preserves existing id attributes when present.
 */
function applyGuideToc(proseEl) {
  if (!proseEl) return []
  const headings = proseEl.querySelectorAll('h2')
  const used = new Set()
  const items = []
  headings.forEach((h) => {
    let id = h.getAttribute('id')?.trim()
    if (!id) {
      const base = slugifyHeading(h.textContent)
      id = base
      let n = 2
      while (used.has(id)) {
        id = `${base}-${n}`
        n += 1
      }
      h.id = id
    }
    used.add(id)
    const label = (h.textContent || '').trim()
    if (!label) return
    items.push({ id, label })
  })
  return items
}

function setupTocObserver(ids) {
  disconnectTocObserver()
  if (!ids.length) return
  tocObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      const id = visible[0]?.target?.id
      if (id) activeTocId.value = id
    },
    { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
  )
  ids.forEach((id) => {
    const el = document.getElementById(id)
    if (el) tocObserver.observe(el)
  })
}

function scrollToHashIfPresent() {
  const raw = route.hash?.replace(/^#/, '')
  if (!raw) return
  const el = document.getElementById(raw)
  if (!el) return
  requestAnimationFrame(() => {
    el.scrollIntoView({ behavior: 'auto', block: 'start' })
  })
}

watch(
  guide,
  async (g) => {
    disconnectTocObserver()
    guideToc.value = []
    activeTocId.value = ''
    destroyGptPageAds(GPT_SLOTS_GUIDE_DETAIL)
    if (!g) return
    await nextTick()
    mountGptPageAds(GPT_SLOTS_GUIDE_DETAIL)
    await nextTick()
    guideToc.value = applyGuideToc(guideProseRef.value)
    if (guideToc.value.length) {
      activeTocId.value = guideToc.value[0].id
      await nextTick()
      setupTocObserver(guideToc.value.map((t) => t.id))
      scrollToHashIfPresent()
    }
  },
  { immediate: true },
)

watch(
  () => route.hash,
  async () => {
    if (!guide.value || !guideToc.value.length) return
    await nextTick()
    scrollToHashIfPresent()
  },
)

onUnmounted(() => {
  disconnectTocObserver()
  destroyGptPageAds(GPT_SLOTS_GUIDE_DETAIL)
})

function formatDate(iso) {
  if (!iso) return ''
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
</script>

<style scoped>
.guide-detail-hero {
  position: relative;
  min-height: 320px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: var(--color-sage-dark);
}

.guide-detail-hero-media {
  position: absolute;
  inset: 0;
}

.guide-detail-hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.guide-detail-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-sage-dark) 20%, transparent) 0%,
    color-mix(in srgb, var(--color-ink) 88%, transparent) 100%
  );
}

.guide-detail-hero-inner {
  position: relative;
  z-index: 2;
  padding: 2.5rem 0 2.75rem;
  color: var(--color-white);
}

.guide-breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  margin-bottom: 1.25rem;
  opacity: 0.9;
}

.guide-breadcrumb a {
  color: var(--color-lemon);
  font-weight: 600;
  text-decoration: none;
}

.guide-breadcrumb a:hover {
  text-decoration: underline;
}

.guide-detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  list-style: none;
  margin-bottom: 0.85rem;
}

.guide-detail-tags li {
  font-family: var(--font-cartoon);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: var(--color-coral);
  border: 2px solid color-mix(in srgb, var(--color-white) 60%, transparent);
}

.guide-detail-header h1 {
  font-family: var(--font-display);
  font-size: clamp(1.65rem, 4vw, 2.35rem);
  line-height: 1.2;
  max-width: 20ch;
  margin-bottom: 0.75rem;
  /* 亮色背景照片上保持可读：白字 + 深色描边 */
  color: #fff;
  -webkit-text-stroke: 0.04em rgba(0, 0, 0, 0.55);
  paint-order: stroke fill;
  text-shadow:
    -1px -1px 0 rgba(0, 0, 0, 0.9),
    1px -1px 0 rgba(0, 0, 0, 0.9),
    -1px 1px 0 rgba(0, 0, 0, 0.9),
    1px 1px 0 rgba(0, 0, 0, 0.9),
    0 -1px 0 rgba(0, 0, 0, 0.85),
    0 1px 0 rgba(0, 0, 0, 0.85),
    -1px 0 0 rgba(0, 0, 0, 0.85),
    1px 0 0 rgba(0, 0, 0, 0.85),
    0 3px 18px rgba(0, 0, 0, 0.5);
}

@supports not (paint-order: stroke fill) {
  .guide-detail-header h1 {
    -webkit-text-stroke: unset;
    text-shadow:
      -2px -2px 0 rgba(0, 0, 0, 0.92),
      2px -2px 0 rgba(0, 0, 0, 0.92),
      -2px 2px 0 rgba(0, 0, 0, 0.92),
      2px 2px 0 rgba(0, 0, 0, 0.92),
      0 -2px 0 rgba(0, 0, 0, 0.85),
      0 2px 0 rgba(0, 0, 0, 0.85),
      -2px 0 0 rgba(0, 0, 0, 0.85),
      2px 0 0 rgba(0, 0, 0, 0.85),
      0 4px 20px rgba(0, 0, 0, 0.45);
  }
}

.guide-detail-desc {
  font-size: 1.05rem;
  max-width: 52ch;
  line-height: 1.55;
  color: color-mix(in srgb, var(--color-white) 92%, transparent);
  margin-bottom: 0.65rem;
}

.guide-detail-meta {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-lemon);
}

.guide-detail-disclaimer {
  margin-top: 1rem;
  max-width: 52ch;
  font-size: 0.82rem;
  line-height: 1.55;
  color: color-mix(in srgb, var(--color-white) 76%, transparent);
}

.guide-detail-disclaimer a {
  color: var(--color-lemon);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 0.15em;
}

.guide-detail-disclaimer a:hover {
  color: var(--color-white);
}

.guide-detail-body-section {
  padding: 2.5rem 0 4.5rem;
  background: var(--color-white);
}

/* 移动端：正文前章节快跳（桌面端用侧栏 Sections） */
.guide-toc-mobile {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0.75rem;
  margin-bottom: 1.25rem;
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-cream) 60%, var(--color-white));
  border: 2px solid color-mix(in srgb, var(--color-mint) 45%, transparent);
}

@media (min-width: 1025px) {
  .guide-toc-mobile {
    display: none;
  }
}

.guide-toc-mobile-link {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  padding: 0 0.5rem;
  font-family: var(--font-cartoon);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--color-ink-muted);
  text-decoration: none;
  border-radius: var(--radius-sm);
  background: var(--color-white);
  border: 2px solid color-mix(in srgb, var(--color-sage) 28%, transparent);
}

.guide-toc-mobile-link.is-active {
  background: var(--color-sage);
  color: var(--color-white);
  border-color: var(--color-sage);
}

.guide-aside-card--toc .guide-toc-nav {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  max-height: min(60vh, 22rem);
  overflow-y: auto;
  overscroll-behavior: contain;
  padding-right: 0.25rem;
  margin-right: -0.25rem;
}

.guide-toc-nav-link {
  display: block;
  padding: 0.38rem 0;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--color-ink-muted);
  text-decoration: none;
  border-bottom: 1px solid color-mix(in srgb, var(--color-mint) 55%, transparent);
  line-height: 1.35;
  transition: color 0.15s ease;
}

.guide-toc-nav-link:last-child {
  border-bottom: none;
}

.guide-toc-nav-link:hover {
  color: var(--color-sage-dark);
}

.guide-toc-nav-link.is-active {
  color: var(--color-ink);
}

.guide-detail-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 2.5rem;
  align-items: start;
}

.guide-article-col {
  min-width: 0;
}

.guide-aside {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: sticky;
  top: 5.5rem;
}

.guide-aside-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  border: 3px solid color-mix(in srgb, var(--color-mint) 60%, transparent);
  box-shadow: var(--shadow-card);
}

.guide-aside-card h2 {
  font-family: var(--font-cartoon);
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: var(--color-ink);
}

.guide-aside-links {
  list-style: none;
}

.guide-aside-links a {
  display: block;
  padding: 0.4rem 0;
  font-weight: 600;
  color: var(--color-sage-dark);
  text-decoration: none;
}

.guide-aside-links a:hover {
  color: var(--color-coral-deep);
  text-decoration: underline;
}

.guide-not-found {
  text-align: center;
  padding: 5rem 1rem;
}

.guide-not-found h1 {
  font-family: var(--font-cartoon);
  margin: 1rem 0 0.5rem;
}

.guide-not-found p {
  color: var(--color-ink-muted);
  margin-bottom: 1.5rem;
}

@media (max-width: 1024px) {
  .guide-aside-card--toc {
    display: none;
  }

  .guide-detail-layout {
    grid-template-columns: 1fr;
  }

  .guide-aside {
    position: static;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}
</style>

<style>
/* 详情正文（v-html）— 非 scoped 以便作用于注入 HTML */
.guide-article-prose {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: 2rem 2.25rem;
  border: 3px solid color-mix(in srgb, var(--color-peach) 50%, transparent);
  box-shadow: var(--shadow-card);
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--color-ink);
}

.guide-article-prose .guide-lead {
  font-size: 1.12rem;
  color: var(--color-ink);
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 2px dashed color-mix(in srgb, var(--color-mint) 70%, transparent);
}

.guide-article-prose h2 {
  font-family: var(--font-cartoon);
  font-size: 1.35rem;
  color: var(--color-sage-dark);
  margin: 2rem 0 0.85rem;
  scroll-margin-top: var(--site-anchor-offset, 6.35rem);
}

.guide-article-prose h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  margin: 1.5rem 0 0.6rem;
  color: var(--color-ink);
}

.guide-article-prose p {
  margin-bottom: 1rem;
  color: var(--color-ink-muted);
}

.guide-article-prose ul,
.guide-article-prose ol {
  margin: 0 0 1.25rem 1.25rem;
  color: var(--color-ink-muted);
}

.guide-article-prose li {
  margin-bottom: 0.45rem;
}

.guide-article-prose strong {
  color: var(--color-ink);
  font-weight: 700;
}

.guide-article-prose em {
  font-style: italic;
  color: var(--color-sage-dark);
}

/* 正文表格（v-html）：薄荷表头 / 蜜桃网格 / 斑马行；极宽表可加 <div class="guide-table-scroll"> 包裹 */
.guide-article-prose table {
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  margin: 1.35rem 0;
  border: 3px solid color-mix(in srgb, var(--color-sage) 35%, transparent);
  border-radius: var(--radius-sm);
  box-shadow: 0 4px 0 color-mix(in srgb, var(--color-mint-deep) 14%, transparent);
  table-layout: auto;
}

.guide-article-prose caption {
  caption-side: bottom;
  text-align: left;
  padding: 0.55rem 0.25rem 0;
  margin-top: 0.15rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-ink-muted);
}

.guide-article-prose thead,
.guide-article-prose tfoot {
  background: transparent;
}

.guide-article-prose thead th {
  white-space: nowrap;
  background: color-mix(in srgb, var(--color-sage) 40%, var(--color-mint));
  color: var(--color-ink);
  border-color: color-mix(in srgb, var(--color-sage-dark) 28%, var(--color-peach));
}

.guide-article-prose tfoot th,
.guide-article-prose tfoot td {
  background: color-mix(in srgb, var(--color-mint) 52%, var(--color-white));
  color: var(--color-ink);
  font-family: var(--font-body);
  font-weight: 600;
}

@media (max-width: 560px) {
  .guide-article-prose thead th {
    white-space: normal;
  }
}

.guide-article-prose th,
.guide-article-prose td {
  padding: 0.65rem 0.85rem;
  text-align: left;
  vertical-align: top;
  border: 2px solid color-mix(in srgb, var(--color-peach) 55%, transparent);
  overflow-wrap: break-word;
  hyphens: auto;
}

.guide-article-prose th {
  font-family: var(--font-cartoon);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-sage-dark);
}

.guide-article-prose td {
  font-size: 0.93rem;
  color: var(--color-ink-muted);
}

.guide-article-prose tbody tr:nth-child(even) td {
  background: color-mix(in srgb, var(--color-cream) 70%, var(--color-white));
}

@media (hover: hover) and (pointer: fine) {
  .guide-article-prose tbody tr:hover td {
    background: color-mix(in srgb, var(--color-mint) 26%, var(--color-white));
  }
}

.guide-article-prose .guide-table-scroll {
  max-width: 100%;
  margin: 1.35rem 0;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  border-radius: var(--radius-sm);
  border: 3px solid color-mix(in srgb, var(--color-sage) 35%, transparent);
  box-shadow: 0 4px 0 color-mix(in srgb, var(--color-mint-deep) 14%, transparent);
  background: var(--color-white);
}

.guide-article-prose .guide-table-scroll table {
  margin: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
  min-width: 100%;
  width: max(100%, 28rem);
}

.guide-callout {
  padding: 1rem 1.2rem;
  border-radius: var(--radius-sm);
  margin: 1.5rem 0;
  font-size: 0.95rem;
  line-height: 1.6;
  border-left: 5px solid;
}

.guide-callout--tip {
  background: color-mix(in srgb, var(--color-mint) 35%, var(--color-white));
  border-color: var(--color-sage);
  color: var(--color-ink);
}

.guide-callout--note {
  background: color-mix(in srgb, var(--color-lemon) 50%, var(--color-white));
  border-color: var(--color-coral);
  color: var(--color-ink);
}

.guide-steps {
  counter-reset: step;
  list-style: none;
  margin-left: 0 !important;
  padding: 0;
}

.guide-steps li {
  position: relative;
  padding: 0.85rem 1rem 0.85rem 3rem;
  margin-bottom: 0.65rem;
  background: color-mix(in srgb, var(--color-cream) 80%, var(--color-white));
  border-radius: var(--radius-sm);
  border: 2px solid color-mix(in srgb, var(--color-peach) 60%, transparent);
}

.guide-steps li::before {
  counter-increment: step;
  content: counter(step);
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-cartoon);
  font-weight: 800;
  font-size: 0.85rem;
  background: var(--color-coral);
  color: var(--color-white);
  border-radius: 50%;
}

.guide-outro {
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 2px dashed var(--color-mint);
  font-style: italic;
  color: var(--color-ink) !important;
}

</style>
