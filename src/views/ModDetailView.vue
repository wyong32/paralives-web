<template>
  <article v-if="mod" class="mod-detail-page">
    <section class="mod-detail-hero" aria-labelledby="mod-title">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container mod-detail-hero-inner">
        <div class="mod-detail-hero-grid">
          <div class="mod-detail-hero-text">
            <nav class="mod-breadcrumb" aria-label="Breadcrumb">
              <a href="/mods">Mods</a>
              <span aria-hidden="true">/</span>
              <a v-if="categoryHref && classifyLabel" :href="categoryHref">{{ classifyLabel }}</a>
              <template v-if="categoryHref && classifyLabel">
                <span aria-hidden="true">/</span>
              </template>
              <span class="mod-breadcrumb-current">{{ mod.title }}</span>
            </nav>
            <span class="mod-detail-eyebrow">Workshop listing</span>
            <h1 id="mod-title" class="mod-detail-title">{{ mod.title }}</h1>
            <p class="mod-detail-lede">{{ mod.description }}</p>
            <div
              v-if="starRating !== null"
              class="mod-detail-meta-row mod-detail-meta-row--primary"
            >
              <span class="mod-meta-label">Recommendation</span>
              <div
                class="mod-detail-stars"
                role="img"
                :aria-label="`Recommendation ${starRating} out of 5 stars`"
              >
                <span
                  v-for="slot in STAR_SLOTS"
                  :key="slot"
                  class="mod-star"
                  :class="{ 'mod-star--on': slot <= starRating }"
                  aria-hidden="true"
                  >★</span
                >
              </div>
            </div>
            <div class="mod-detail-meta-row mod-detail-meta-row--secondary">
              <time v-if="formattedDate" :datetime="mod.publishDate">{{ formattedDate }}</time>
              <template v-if="mod.tags?.length">
                <span class="mod-detail-meta-sep" aria-hidden="true">·</span>
                <span class="mod-meta-label">Tags</span>
                <ul class="mod-detail-meta-tags">
                  <li v-for="tag in mod.tags.slice(0, 5)" :key="tag">{{ tag }}</li>
                </ul>
              </template>
            </div>
          </div>
          <figure class="mod-detail-cover mod-detail-cover--hero">
            <img
              :src="mod.imageUrl"
              :alt="mod.imageAlt"
              width="480"
              height="480"
              loading="eager"
              decoding="async"
            />
          </figure>
        </div>
      </div>

      <!-- 广告：banner_1 -->
      <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
        <div id="div-gpt-ad-moddetail-1" class="gpt-banner-ad"></div>
      </aside>
    </section>

    <section class="mod-detail-body-section" aria-label="Mod details">
      <div class="container">
        <div class="mod-detail-layout">
          <aside class="mod-detail-aside" aria-label="Workshop actions and related mods">
            <div class="mod-detail-aside-panel">
              <template v-if="mod.downloadUrl">
                <a
                  :href="mod.downloadUrl"
                  class="btn btn-primary mod-detail-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open on Workshop
                  <span aria-hidden="true">↗</span>
                </a>
                <p class="mod-detail-disclaimer">
                  This listing points to Steam Workshop for Paralives. Workshop browsing and
                  subscribing usually require owning the game on Steam — if you have not purchased
                  it yet, you may not be able to open or explore the Workshop normally. Subscribe or
                  download via Steam (or from the in-game mod browser once you own the game).
                  External site; Paralives Wiki does not host mod files.
                </p>
              </template>
              <template v-else>
                <p class="mod-detail-placeholder">
                  No direct Workshop link on this listing yet — search by title in Steam or the
                  in-game mod browser.
                </p>
                <p class="mod-detail-disclaimer">
                  Workshop content is tied to owning Paralives on Steam — without a licence, Steam
                  may block or limit Workshop access. After purchase, subscribe from Steam or inside
                  the game. When we have a stable item URL, it will appear here as a button.
                </p>
              </template>
            </div>

            <nav
              v-if="otherMods.length"
              class="mod-detail-related"
              aria-labelledby="mod-related-heading"
            >
              <h2 id="mod-related-heading" class="mod-related-title">More mods</h2>
              <ul class="mod-related-list">
                <li v-for="item in otherMods" :key="item.id">
                  <a :href="`/mods/${item.addressBar}`" class="mod-related-link">
                    <img
                      :src="item.imageUrl"
                      :alt="item.imageAlt"
                      width="64"
                      height="64"
                      loading="lazy"
                      class="mod-related-thumb"
                    />
                    <span class="mod-related-text">
                      <span class="mod-related-name">{{ item.title }}</span>
                      <span v-if="item.tags?.[0]" class="mod-related-tag">{{ item.tags[0] }}</span>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <div class="mod-detail-article-col">
            <div class="mod-article-panel">
              <!-- 广告：GPT slot 2 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-moddetail-2" class="gpt-banner-ad"></div>
    </aside>

              <div class="mod-article-prose" v-html="mod.detailsHtml"></div>

              <!-- 广告：GPT slot 3 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-moddetail-3" class="gpt-banner-ad"></div>
    </aside>
            </div>
            <footer class="mod-detail-end">
              <a href="/mods" class="mod-detail-back-link">← Back to all mods</a>
            </footer>
          </div>
        </div>
      </div>
    </section>
  </article>

  <article v-else class="mod-detail-page mod-detail-page--missing">
    <div class="container">
      <div class="mod-not-found">
        <img src="/images/ico.webp" alt="" width="72" height="72" aria-hidden="true" />
        <h1>Mod not found</h1>
        <p>This listing does not exist or was removed.</p>
        <a href="/mods" class="btn btn-primary">Back to mods</a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, watch, nextTick, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import mods from '@/data/mods.js'
import { GPT_SLOTS_MOD_DETAIL } from '@/config/gptPageSlots'
import { mountGptPageAds, destroyGptPageAds } from '@/utils/gptAds'

/** 与 ModsView.vue MOD_CATEGORIES 展示名对齐 */
const CATEGORY_LABELS = Object.freeze({
  modpacks: 'Mod packs',
  the_goth_household: 'The Goth Household',
  split_level_house: 'Split Level House',
})

const STAR_SLOTS = [1, 2, 3, 4, 5]
const STAR_MAX = 5

const route = useRoute()

const mod = computed(() => mods.find((m) => m.addressBar === route.params.slug))

watch(
  mod,
  async (m) => {
    destroyGptPageAds(GPT_SLOTS_MOD_DETAIL)
    if (!m) return
    await nextTick()
    mountGptPageAds(GPT_SLOTS_MOD_DETAIL)
  },
  { immediate: true },
)

onUnmounted(() => destroyGptPageAds(GPT_SLOTS_MOD_DETAIL))

const otherMods = computed(() => mods.filter((m) => m.addressBar !== route.params.slug).slice(0, 4))

const classifyLabel = computed(() => crumbClassify(mod.value?.classify))

const categoryHref = computed(() => {
  const k = normClassify(mod.value?.classify)
  if (!k) return ''
  const qs = Object.prototype.hasOwnProperty.call(CATEGORY_LABELS, k)
    ? `?cat=${encodeURIComponent(k)}`
    : '?cat=other'
  return `/mods${qs}`
})

const formattedDate = computed(() => formatModDate(mod.value?.publishDate))

const starRating = computed(() => clampStarScore(mod.value?.score))

function normClassify(c) {
  if (c == null || String(c).trim() === '') return ''
  return String(c).trim().toLowerCase()
}

function crumbClassify(raw) {
  const k = normClassify(raw)
  if (!k) return ''
  return CATEGORY_LABELS[k] || String(raw).trim()
}

function clampStarScore(score) {
  const n = Number(score)
  if (!Number.isFinite(n)) return null
  let rounded = Math.round(n)
  if (rounded < 1) return null
  if (rounded > STAR_MAX) rounded = STAR_MAX
  return rounded
}

function formatModDate(val) {
  if (!val) return ''
  if (/^\d{4}-\d{2}-\d{2}/.test(String(val).trim())) {
    return new Date(String(val).trim() + 'T12:00:00').toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }
  return `Updated ${val}`
}
</script>

<style scoped>
.mod-detail-page {
  background: var(--color-cream);
}

/* —— Hero（与 Mods 列表页同系渐变）—— */
.mod-detail-hero {
  position: relative;
  padding: clamp(2rem, 4.5vw, 3.25rem) 0 clamp(2.25rem, 5vw, 3.5rem);
  overflow: hidden;
  background: linear-gradient(
    135deg,
    var(--color-lavender) 0%,
    var(--color-lavender-deep) 42%,
    var(--color-peach) 100%
  );
}

.mod-detail-hero-inner {
  position: relative;
  z-index: 2;
}

.mod-detail-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(200px, 340px);
  gap: clamp(1.35rem, 3.5vw, 2.75rem);
  align-items: start;
}

.mod-detail-hero-text {
  min-width: 0;
}

.mod-detail-cover--hero {
  margin: 0;
  align-self: start;
}

.mod-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.88rem;
  color: color-mix(in srgb, var(--color-ink) 72%, transparent);
  margin-bottom: 1rem;
}

.mod-breadcrumb a {
  font-weight: 600;
  color: var(--color-ink);
  text-decoration: none;
  border-bottom: 1px solid color-mix(in srgb, var(--color-ink) 35%, transparent);
}

.mod-breadcrumb a:hover {
  color: var(--color-coral-deep);
  border-bottom-color: var(--color-coral-deep);
}

.mod-breadcrumb-current {
  font-weight: 600;
  color: var(--color-ink);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mod-detail-eyebrow {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-ink) 62%, transparent);
  margin-bottom: 0.5rem;
}

.mod-detail-title {
  font-family: var(--font-display);
  font-size: clamp(1.65rem, 4vw, 2.35rem);
  line-height: 1.18;
  color: var(--color-ink);
  margin-bottom: 0.85rem;
  text-wrap: balance;
}

.mod-detail-lede {
  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.62;
  color: color-mix(in srgb, var(--color-ink) 78%, transparent);
  max-width: 52ch;
  margin-bottom: 1.25rem;
}

.mod-detail-meta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.65rem;
  font-size: 0.9rem;
  color: var(--color-ink);
}

.mod-detail-meta-row--secondary {
  margin-top: 0.85rem;
  padding-top: 0.85rem;
  border-top: 1px solid color-mix(in srgb, var(--color-ink) 12%, transparent);
}

.mod-detail-stars {
  display: inline-flex;
  gap: 0.12rem;
  align-items: center;
}

.mod-star {
  font-size: 1.05rem;
  line-height: 1;
  color: color-mix(in srgb, var(--color-ink) 22%, transparent);
}

.mod-star--on {
  color: color-mix(in srgb, var(--color-lemon) 28%, var(--color-coral));
}

.mod-detail-meta-row time {
  font-weight: 600;
}

.mod-detail-meta-sep {
  color: color-mix(in srgb, var(--color-ink) 42%, transparent);
  user-select: none;
}

.mod-meta-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: color-mix(in srgb, var(--color-ink) 55%, transparent);
}

.mod-detail-meta-tags {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.mod-detail-meta-tags li {
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-white) 55%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-white) 20%, transparent);
  color: var(--color-ink);
}

/* —— Body：双栏 —— */
.mod-detail-body-section {
  padding: clamp(2rem, 4vw, 3rem) 0 clamp(2.75rem, 5vw, 4rem);
}

.mod-detail-layout {
  display: grid;
  grid-template-columns: minmax(260px, 340px) minmax(0, 1fr);
  gap: clamp(1.75rem, 3.5vw, 3rem);
  align-items: start;
}

.mod-detail-aside {
  position: sticky;
  top: 5.5rem;
}

.mod-detail-cover {
  margin: 0 0 1.25rem;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 3px solid var(--color-white);
  box-shadow: var(--shadow-card);
  background: var(--color-white);
}

.mod-detail-cover img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

.mod-detail-aside-panel {
  padding: 1.25rem 1.35rem;
  background: var(--color-white);
  border-radius: var(--radius-md);
  border: 2px solid color-mix(in srgb, var(--color-lavender-deep) 22%, transparent);
  box-shadow: 0 2px 0 color-mix(in srgb, var(--color-lavender) 45%, transparent);
}

.mod-detail-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  font-weight: 700;
}

.mod-detail-disclaimer {
  margin-top: 0.85rem;
  margin-bottom: 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--color-ink-muted);
}

.mod-detail-placeholder {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-ink-muted);
}

.mod-detail-related {
  margin-top: 1.75rem;
  padding-top: 1.5rem;
  border-top: 2px dashed color-mix(in srgb, var(--color-lavender-deep) 28%, transparent);
}

.mod-related-title {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-ink-muted);
  margin-bottom: 0.85rem;
}

.mod-related-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mod-related-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.45rem 0.5rem 0.45rem 0.45rem;
  border-radius: var(--radius-sm);
  text-decoration: none;
  color: var(--color-ink);
  transition: background 0.18s ease, transform 0.18s ease;
}

.mod-related-link:hover {
  background: color-mix(in srgb, var(--color-lavender) 22%, var(--color-white));
  color: var(--color-coral-deep);
}

.mod-related-thumb {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid var(--color-white);
  box-shadow: 0 2px 8px rgba(45, 58, 53, 0.12);
}

.mod-related-text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
}

.mod-related-name {
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mod-related-tag {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--color-sage-dark);
}

/* 正文列 */
.mod-detail-article-col {
  min-width: 0;
}

.mod-article-panel {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: clamp(1.35rem, 2.5vw, 2rem) clamp(1.25rem, 2.5vw, 2.25rem);
  border: 2px solid color-mix(in srgb, var(--color-mint) 35%, transparent);
  box-shadow: var(--shadow-soft);
}

.mod-detail-end {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
  margin-top: 1.75rem;
  padding-top: 1.25rem;
  border-top: 2px dashed color-mix(in srgb, var(--color-lavender) 45%, transparent);
}

.mod-detail-back-link {
  font-weight: 700;
  color: var(--color-sage-dark);
  text-decoration: none;
  border-bottom: 2px solid color-mix(in srgb, var(--color-sage-dark) 35%, transparent);
}

.mod-detail-back-link:hover {
  color: var(--color-coral-deep);
  border-bottom-color: var(--color-coral-deep);
}

.mod-not-found {
  text-align: center;
  padding: clamp(3.5rem, 8vw, 5.5rem) 1rem;
}

.mod-not-found img {
  margin: 0 auto 1rem;
  opacity: 0.9;
}

.mod-not-found h1 {
  font-family: var(--font-cartoon);
  margin-bottom: 0.5rem;
}

.mod-not-found p {
  color: var(--color-ink-muted);
  margin-bottom: 1.5rem;
  max-width: 28rem;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 900px) {
  .mod-detail-hero-grid {
    grid-template-columns: 1fr;
    gap: 1.35rem;
  }

  .mod-detail-cover--hero {
    max-width: min(340px, 100%);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
}

@media (max-width: 960px) {
  .mod-detail-layout {
    grid-template-columns: 1fr;
  }

  .mod-detail-aside {
    position: static;
    display: block;
  }

  .mod-detail-related {
    margin-top: 1rem;
    padding-top: 1.25rem;
  }
}

@media (max-width: 600px) {
  .mod-breadcrumb-current {
    white-space: normal;
    line-height: 1.35;
  }

  .mod-related-list {
    gap: 0.35rem;
  }
}
</style>

<style>
/* Mod 正文（v-html） */
.mod-article-prose {
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--color-ink-muted);
}

.mod-article-prose .mod-lead {
  font-size: 1.08rem;
  color: var(--color-ink);
  margin-bottom: 1.5rem;
  padding: 1rem 1.15rem;
  background: color-mix(in srgb, var(--color-lavender) 18%, var(--color-white));
  border-radius: var(--radius-sm);
  border-left: 4px solid var(--color-lavender-deep);
}

.mod-article-prose h2 {
  font-family: var(--font-cartoon);
  font-size: 1.15rem;
  color: var(--color-lavender-deep);
  margin: 1.85rem 0 0.65rem;
  padding-bottom: 0.35rem;
  border-bottom: 2px solid color-mix(in srgb, var(--color-mint) 55%, transparent);
}

.mod-article-prose h2:first-child {
  margin-top: 0;
}

.mod-article-prose ul {
  margin: 0 0 1.25rem 1.25rem;
  list-style: disc;
}

.mod-article-prose ol {
  margin: 0 0 1.25rem 1.25rem;
  list-style: decimal;
}

.mod-article-prose li {
  margin-bottom: 0.4rem;
}

.mod-article-prose p {
  margin-bottom: 1rem;
}

.mod-article-prose strong {
  color: var(--color-ink);
}

/* 正文表格（v-html）；极宽时用 <div class="mod-table-scroll"> 包裹 */
.mod-article-prose table {
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  margin: 1.35rem 0;
  border: 3px solid color-mix(in srgb, var(--color-lavender-deep) 28%, transparent);
  border-radius: var(--radius-sm);
  box-shadow: 0 4px 0 color-mix(in srgb, var(--color-lavender) 55%, transparent);
  table-layout: auto;
}

.mod-article-prose caption {
  caption-side: bottom;
  text-align: left;
  padding: 0.55rem 0.25rem 0;
  margin-top: 0.15rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-ink-muted);
}

.mod-article-prose thead,
.mod-article-prose tfoot {
  background: transparent;
}

.mod-article-prose thead th {
  white-space: nowrap;
  background: color-mix(in srgb, var(--color-lavender-deep) 32%, var(--color-lavender));
  color: var(--color-ink);
  border-color: color-mix(in srgb, var(--color-lavender-deep) 42%, var(--color-white));
}

.mod-article-prose tfoot th,
.mod-article-prose tfoot td {
  background: color-mix(in srgb, var(--color-lavender) 48%, var(--color-white));
  color: var(--color-ink);
  font-family: var(--font-body);
  font-weight: 600;
}

@media (max-width: 560px) {
  .mod-article-prose thead th {
    white-space: normal;
  }
}

.mod-article-prose th,
.mod-article-prose td {
  padding: 0.65rem 0.85rem;
  text-align: left;
  vertical-align: top;
  border: 2px solid color-mix(in srgb, var(--color-lavender-deep) 22%, transparent);
  overflow-wrap: break-word;
  hyphens: auto;
}

.mod-article-prose th {
  font-family: var(--font-cartoon);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-lavender-deep);
}

.mod-article-prose td {
  font-size: 0.93rem;
  color: var(--color-ink-muted);
}

.mod-article-prose tbody tr:nth-child(even) td {
  background: color-mix(in srgb, var(--color-lavender) 14%, var(--color-white));
}

@media (hover: hover) and (pointer: fine) {
  .mod-article-prose tbody tr:hover td {
    background: color-mix(in srgb, var(--color-lavender) 28%, var(--color-white));
  }
}

.mod-article-prose .mod-table-scroll {
  max-width: 100%;
  margin: 1.35rem 0;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  border-radius: var(--radius-sm);
  border: 3px solid color-mix(in srgb, var(--color-lavender-deep) 28%, transparent);
  box-shadow: 0 4px 0 color-mix(in srgb, var(--color-lavender) 55%, transparent);
  background: var(--color-white);
}

.mod-article-prose .mod-table-scroll table {
  margin: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
  min-width: 100%;
  width: max(100%, 28rem);
}

.mod-callout {
  padding: 1rem 1.15rem;
  border-radius: var(--radius-sm);
  margin: 1.25rem 0;
  font-size: 0.95rem;
  line-height: 1.55;
}

.mod-callout--warn {
  background: color-mix(in srgb, var(--color-lemon) 45%, var(--color-white));
  border: 2px solid var(--color-coral);
  color: var(--color-ink);
}
</style>
