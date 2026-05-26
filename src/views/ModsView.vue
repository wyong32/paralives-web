<template>
  <article class="mods-page">
    <section class="page-hero-section page-hero-section--mods" aria-labelledby="mods-title">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="page-hero-content">
          <span class="section-label">Workshop</span>
          <h1 id="mods-title" class="title-gradient">Paralives Mods</h1>
          <p>
            Paralives mods and Steam Workshop-style community packs for Build Mode, Paramaker, and
            gameplay — curated notes and download links when creators publish them.
          </p>
        </div>
      </div>
    </section>

    <section class="mods-list-section">
      <div class="container">
        <div class="mods-list-content" :class="{ 'mods-list-content--empty': !mods.length }">
          <template v-if="mods.length">
            <div class="mods-catalog">
              <nav class="mods-cat-nav" aria-label="Filter by category">
                <button
                  v-for="tab in categoryTabs"
                  :key="tab.key"
                  type="button"
                  class="mods-cat-tab"
                  :class="{ 'mods-cat-tab--active': selectedCat === tab.key }"
                  :aria-pressed="selectedCat === tab.key"
                  @click="selectCategory(tab.key)"
                >
                  {{ tab.label }}
                  <span class="mods-cat-count">{{ tab.count }}</span>
                </button>
              </nav>

              <div class="mods-list-block">
                <header class="mods-list-head">
                  <h2 class="mods-list-title">{{ listHeading }}</h2>
                  <p class="mods-list-sub">{{ filteredMods.length }} listing(s)</p>
                </header>

                <ul v-if="filteredMods.length" class="mods-page-list">
                  <li v-for="mod in filteredMods" :key="mod.id">
                    <a :href="`/mods/${mod.addressBar}`" class="mod-card-link">
                      <article class="mod-card-row mod-card-row--list">
                        <div class="mod-card-media">
                          <img
                            :src="mod.imageUrl"
                            :alt="mod.imageAlt"
                            width="480"
                            height="260"
                            loading="lazy"
                          />
                        </div>
                        <div class="mod-card-body">
                          <span v-if="mod.tags?.[0]" class="mod-pill">{{ mod.tags[0] }}</span>
                          <h2>{{ mod.title }}</h2>
                          <p>{{ mod.description }}</p>
                          <p class="mod-card-meta">
                            <time v-if="mod.publishDate" :datetime="mod.publishDate">
                              {{ formatDate(mod.publishDate) }}
                            </time>
                            <span class="mod-card-dl">View mod →</span>
                          </p>
                        </div>
                      </article>
                    </a>
                  </li>
                </ul>

                <p v-else class="mods-list-empty" role="status">No mods in this category.</p>
              </div>
            </div>
          </template>

          <div v-else class="list-empty list-empty--mods" role="status">
            <p class="list-empty-label">Mods</p>
            <h2 class="list-empty-title">No mods listed yet</h2>
            <p>
              Paralives ships in-game modding tools and Steam Workshop support as part of Early
              Access. When community creators publish packs, we will list them here with
              descriptions, install notes, and version notes.
            </p>
            <p>
              Browse our modding overview and use the in-game mod menu to subscribe from the Steam
              Workshop when packs go live for your game version.
            </p>
            <p class="list-empty-hint">On this wiki:</p>
            <ul class="list-empty-links">
              <li><a href="/wiki/modding">Paralives Modding Wiki</a></li>
              <li><a href="/updates">Roadmap &amp; Updates</a></li>
              <li><a href="/wiki/build-tools">Build Mode Tools</a></li>
            </ul>
          </div>

          <aside class="mods-sidebar" aria-label="Modding tips">
            <div class="mods-sidebar-card">
              <h2>Before you download</h2>
              <ul>
                <li>Check game version matches the mod page.</li>
                <li>Enable only what you need — fewer conflicts.</li>
                <li>Back up saves before big CC drops.</li>
                <li>Report broken meshes after patches.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import mods from '@/data/mods.js'

/**
 * 固定分类：`mods.js` 里 `classify` 与第一项 key 一致。
 * 筛选通过地址栏 `?cat=key`；全部列表为 `All`（无 query）。
 */
const MOD_CATEGORIES = [
  ['modpacks', 'Mod packs'],
  ['the_goth_household', 'The Goth Household'],
  ['split_level_house', 'Split Level House'],
]

const route = useRoute()
const router = useRouter()

function normClassify(c) {
  if (c == null || String(c).trim() === '') return ''
  return String(c).trim().toLowerCase()
}

function isKnownClassify(n) {
  return MOD_CATEGORIES.some(([k]) => k === n)
}

function parseCatParam(q) {
  const raw = typeof q === 'string' ? q.trim().toLowerCase() : ''
  if (!raw || raw === 'all') return 'all'
  if (raw === 'other') return 'other'
  if (MOD_CATEGORIES.some(([k]) => k === raw)) return raw
  return 'all'
}

const selectedCat = computed(() => parseCatParam(route.query.cat))

function selectCategory(key) {
  const next = { ...route.query }
  if (key === 'all') {
    delete next.cat
  } else {
    next.cat = key
  }
  router.replace({ query: next })
}

const categoryTabs = computed(() => {
  const tabs = [{ key: 'all', label: 'All', count: mods.length }]
  for (const [key, label] of MOD_CATEGORIES) {
    tabs.push({
      key,
      label,
      count: mods.filter((m) => normClassify(m.classify) === key).length,
    })
  }
  const otherCount = mods.filter((m) => {
    const n = normClassify(m.classify)
    return !n || !isKnownClassify(n)
  }).length
  if (otherCount > 0) {
    tabs.push({ key: 'other', label: 'Other', count: otherCount })
  }
  return tabs
})

function modInCategory(mod, catKey) {
  const n = normClassify(mod.classify)
  if (catKey === 'all') return true
  if (catKey === 'other') return !n || !isKnownClassify(n)
  return n === catKey
}

const filteredMods = computed(() => mods.filter((m) => modInCategory(m, selectedCat.value)))

const listHeading = computed(() => {
  if (selectedCat.value === 'all') return 'All mods'
  if (selectedCat.value === 'other') return 'Other'
  const hit = MOD_CATEGORIES.find(([k]) => k === selectedCat.value)
  return hit ? hit[1] : 'Mods'
})

function formatDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
</script>

<style scoped>
.mods-list-section {
  padding: 3rem 0 4rem;
  background: var(--color-white);
}

.mods-list-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 2rem;
  align-items: start;
}

.mods-list-content--empty {
  grid-template-columns: 1fr;
}

.mods-list-content--empty .mods-sidebar {
  max-width: 22rem;
  margin: 0 auto;
}

.mods-catalog {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mods-cat-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-lavender) 14%, var(--color-white));
  border: 2px solid color-mix(in srgb, var(--color-lavender-deep) 22%, transparent);
}

.mods-cat-tab {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--color-ink);
  cursor: pointer;
  background: var(--color-white);
  border: 2px solid color-mix(in srgb, var(--color-lavender) 55%, transparent);
  transition:
    border-color 0.18s ease,
    color 0.18s ease,
    box-shadow 0.18s ease;
}

.mods-cat-tab:hover {
  border-color: var(--color-lavender-deep);
  color: var(--color-lavender-deep);
}

.mods-cat-tab--active {
  border-color: var(--color-lavender-deep);
  color: var(--color-ink);
  box-shadow: 0 3px 0 color-mix(in srgb, var(--color-lavender-deep) 45%, transparent);
}

.mods-list-block {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.mods-list-head {
  padding-bottom: 0.85rem;
  border-bottom: 3px solid color-mix(in srgb, var(--color-lavender-deep) 25%, transparent);
}

.mods-list-title {
  font-family: var(--font-cartoon);
  font-size: clamp(1.15rem, 2vw, 1.35rem);
  margin: 0 0 0.25rem;
  color: var(--color-ink);
}

.mods-list-sub {
  margin: 0;
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--color-ink-muted);
}

.mods-list-empty {
  margin: 0;
  padding: 2rem 1rem;
  text-align: center;
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-lavender) 12%, var(--color-cream));
  color: var(--color-ink-muted);
  font-size: 0.95rem;
}

.mods-cat-count {
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.1rem 0.38rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-lavender) 35%, var(--color-white));
  color: var(--color-ink);
}

.mods-page-list {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  list-style: none;
}

.mod-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.mod-card-row--list {
  grid-template-columns: 200px 1fr;
  border-color: color-mix(in srgb, var(--color-lavender) 40%, var(--color-white));
}

.mod-card-row--list .mod-card-media {
  min-height: 140px;
  padding: 0;
}

.mod-card-row--list .mod-card-media img {
  width: 100%;
  height: 100%;
  max-width: none;
  min-height: 140px;
  object-fit: cover;
  border: none;
  border-radius: 0;
}

.mod-card-body h2 {
  font-family: var(--font-cartoon);
  font-size: 1.15rem;
  margin: 0.35rem 0 0.4rem;
}

.mod-card-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.75rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-ink-muted);
}

.mod-card-dl {
  color: var(--color-lavender-deep);
  font-family: var(--font-cartoon);
}

.mod-card-link:hover .mod-card-dl {
  text-decoration: underline;
}

.mods-sidebar-card {
  position: sticky;
  top: 5.5rem;
  background: var(--color-white);
  padding: 1.35rem;
  border-radius: var(--radius-md);
  border: 3px solid color-mix(in srgb, var(--color-lavender) 50%, transparent);
  box-shadow: var(--shadow-card);
}

.mods-sidebar-card h2 {
  font-family: var(--font-cartoon);
  font-size: 1.05rem;
  margin-bottom: 0.85rem;
  color: var(--color-ink);
}

.mods-sidebar-card ul {
  list-style: none;
}

.mods-sidebar-card li {
  position: relative;
  padding: 0.35rem 0 0.35rem 1.1rem;
  font-size: 0.9rem;
  color: var(--color-ink-muted);
  line-height: 1.45;
}

.mods-sidebar-card li::before {
  content: '◆';
  position: absolute;
  left: 0;
  color: var(--color-lavender-deep);
  font-size: 0.65rem;
  top: 0.55rem;
}

.list-empty {
  max-width: 36rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  text-align: center;
  background: var(--color-cream);
  border-radius: var(--radius-lg);
  border: 3px dashed color-mix(in srgb, var(--color-sage) 40%, transparent);
}

.list-empty--mods {
  border-color: color-mix(in srgb, var(--color-lavender-deep) 45%, transparent);
  background: color-mix(in srgb, var(--color-lavender) 18%, var(--color-cream));
}

.list-empty-label {
  font-family: var(--font-cartoon);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-sage-dark);
  margin-bottom: 0.5rem;
}

.list-empty--mods .list-empty-label {
  color: var(--color-lavender-deep);
}

.list-empty-title {
  font-family: var(--font-cartoon);
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
  color: var(--color-ink);
}

.list-empty p {
  font-size: 0.95rem;
  color: var(--color-ink-muted);
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.list-empty-hint {
  margin-top: 1.25rem;
  font-weight: 600;
  color: var(--color-ink);
}

.list-empty-links {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1.25rem;
  margin-top: 0.65rem;
}

.list-empty-links a {
  font-family: var(--font-cartoon);
  font-weight: 700;
  color: var(--color-sage-dark);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.list-empty--mods .list-empty-links a {
  color: var(--color-lavender-deep);
}

@media (max-width: 1024px) {
  .mods-list-content {
    grid-template-columns: 1fr;
  }

  .mods-sidebar-card {
    position: static;
  }

  .mod-card-row--list {
    grid-template-columns: 1fr;
  }

  .mod-card-row--list .mod-card-media {
    min-height: 160px;
  }
}
</style>
