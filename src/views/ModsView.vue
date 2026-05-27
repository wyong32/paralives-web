<template>
  <article class="mods-page">
    <section class="page-hero-section page-hero-section--mods" aria-labelledby="mods-title">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="page-hero-row">
          <div class="page-hero-content">
            <span class="section-label">Workshop</span>
            <h1 id="mods-title" class="title-gradient">Paralives Mods</h1>
            <p>
              Paralives mods and Steam Workshop-style community packs for Build Mode, Paramaker, and gameplay —
              curated notes and download links when creators publish them.
            </p>
          </div>
          <figure class="page-hero-visual">
            <img
              src="/images/mods/mod01.webp"
              alt="Paralives community mods and Workshop-style packs"
              width="680"
              height="510"
              loading="eager"
              decoding="async"
            />
          </figure>
        </div>
      </div>

      <!-- 广告：banner_1 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-mods-1" style="min-width: 300px; min-height: 250px;"></div>
    </aside>
    </section>

    <section class="mods-list-section">
      <div class="container">
        <div class="mods-list-content">
          <div class="mods-primary">
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

                <!-- 广告：banner_2 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-mods-2" style="min-width: 300px; min-height: 250px;"></div>
    </aside>

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
                          <span v-if="classifyPillLabel(mod)" class="mod-pill">{{ classifyPillLabel(mod) }}</span>
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

                <!-- 广告：banner_3 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-mods-3" style="min-width: 300px; min-height: 250px;"></div>
    </aside>
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
              <li><a href="/wiki/modding">Mods &amp; DLC (wiki)</a></li>
              <li><a href="/updates">Roadmap &amp; Updates</a></li>
              <li><a href="/wiki/build-tools">Build Mode Tools</a></li>
            </ul>
          </div>
            <section class="mods-install-guide" aria-labelledby="mods-install-heading">
              <h2 id="mods-install-heading" class="mods-install-guide-title">How to install mods</h2>
              <p class="mods-install-lead">
                Fast path: open a mod&rsquo;s detail page — from this catalogue or Steam Workshop — then follow the Workshop
                or creator download link, subscribe or add through the supported flow, enable the pack in the in-game mod
                menu, and restart Paralives when the readme asks for it. The sections below cover installs, compatibility
                checks, updates, removals, and what to try when content never surfaces in your save.
              </p>
              <p class="mods-install-intro">
                Mods span Build Mode, Paramaker tweaks, UI and camera polish, gameplay systems, or story-heavy households.
                Early Access shakes things up frequently, so always match listing notes to your current build — and save a
                backup before you stress-test stacks of unfamiliar files.
              </p>

              <figure class="mods-install-figure">
                <img
                  src="/images/mod-list-02.webp"
                  alt="Screenshot: Steam Workshop subscribe flow or Paralives mod catalogue"
                  width="1200"
                  height="675"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 960px) 100vw, min(928px, 100vw - 340px)"
                />
              </figure>

              <!-- 广告：banner_1 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-mods-4" style="min-width: 300px; min-height: 250px;"></div>
    </aside>

              <div class="mods-install-grid">
                <section id="mod-install-steps" class="mods-install-card">
                  <h3>General install flow</h3>
                  <p>For most players this is defaults-first and low friction:</p>
                  <ol class="mods-install-ol">
                    <li>Open the mod page you want.</li>
                    <li>Read the description, publish date, and compatibility callouts.</li>
                    <li>Use the creator&rsquo;s Workshop or download link.</li>
                    <li>Subscribe or complete the installer flow tied to that page.</li>
                    <li>Launch Paralives and visit the mod manager.</li>
                    <li>Confirm the piece is toggled on for your build.</li>
                    <li>Restart if reload is required — some packs only hydrate after boot.</li>
                  </ol>
                  <p class="mods-install-muted">
                    Sticking with this pathway cuts user error and keeps subscribed packs easier to mop up after EA
                    patches.
                  </p>
                </section>

                <section id="mod-install-workshop" class="mods-install-card">
                  <h3>Steam Workshop</h3>
                  <p>Best fit if you landed here from &ldquo;Paralives Steam Workshop mods&rdquo; style searches:</p>
                  <ol class="mods-install-ol">
                    <li>Stay signed into the Steam account that owns Paralives.</li>
                    <li>Jump to the Workshop item linked beside each listing.</li>
                    <li>Hit <strong>Subscribe</strong> and wait for the download toast to settle.</li>
                    <li>Boot the game fresh.</li>
                    <li>Open the mod/content manager panels.</li>
                    <li>Verify the checkbox is lit, load Live or Build Mode, sanity check thumbnails.</li>
                  </ol>
                  <p class="mods-install-muted">
                    If nothing appears, quit to desktop, confirm Steam syncing finished, and relaunch — bulky furniture CC
                    routinely lags behind tiny HUD tweaks.
                  </p>
                </section>

                <section id="mod-install-before" class="mods-install-card">
                  <h3>Before installing</h3>
                  <ul class="mods-install-ul">
                    <li>Marry the advertised version banner to whichever patch you're running.</li>
                    <li>Know whether you're grabbing gameplay/UI/camera swaps versus cosmetic-only payloads.</li>
                    <li>Stage mods in small waves instead of one giant zip bomb.</li>
                    <li>Snapshot saves whenever you flirt with scripted packs or chunky CC merges.</li>
                    <li>Glance previews so you're not dumping a mansion lot when you meant a UI skin.</li>
                  </ul>
                  <p class="mods-install-muted">
                    Loads of &ldquo;Paralives mods not working&rdquo; pings just mean mismatched revisions or piled-on
                    conflicts — two minutes here saves an evening.
                  </p>
                </section>

                <section id="mod-install-enable" class="mods-install-card">
                  <h3>Enable batches slowly</h3>
                  <p>
                    After install, poke the built-in toggle view so every subscribed entry is flagged on. Larger hauls?
                    Activate in groups so you instantly know what nuked thumbnails, menus, or save loads — Build, Paramaker,
                    and Live all cache differently.
                  </p>
                </section>

                <section id="mod-install-update" class="mods-install-card">
                  <h3>Patches &amp; updates</h3>
                  <ol class="mods-install-ol">
                    <li>Revisit creator posts after each Paralives patch.</li>
                    <li>Skim changelog blurbs dated after your EA release.</li>
                    <li>Disable anything uncertain before legacy saves migrate.</li>
                    <li>Turn pieces back on one by one once compatibility chatter looks green.</li>
                  </ol>
                  <p class="mods-install-muted">
                    Gameplay, camera, or UI rigs break harder than couches; cosmetic meshes still vanish whenever EA
                    rewrites asset hooks.
                  </p>
                </section>

                <section id="mod-install-remove" class="mods-install-card">
                  <h3>Uninstall cleanly</h3>
                  <ol class="mods-install-ol">
                    <li>Flip mods off internally when the UI exposes that.</li>
                    <li>Unsubscribe or delete the originating Workshop entry.</li>
                    <li>Restart twice if you're chasing stubborn hooks.</li>
                    <li>Boot a burner save first — confirm rooms still have walls.</li>
                  </ol>
                  <p class="mods-install-muted">
                    Removing furniture pipelines from active saves tends to spit out missing-slot gaps; plan room rehab
                    before you rip CC out mid-legacy session.
                  </p>
                </section>

                <section id="mod-install-troubleshoot" class="mods-install-card mods-install-card--wide">
                  <!-- 广告：banner_2 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-mods-5" style="min-width: 300px; min-height: 250px;"></div>
    </aside>
                  <h3>Not showing up?</h3>
                  <figure class="mods-install-figure mods-install-figure--in-card">
                    <img
                      src="/images/mod-list-01.webp"
                      alt="Screenshot: verifying mods enabled in-game or troubleshooting the mod panel"
                      width="1200"
                      height="675"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 960px) 100vw, min(928px, 100vw - 340px)"
                    />
                  </figure>
                  <ul class="mods-install-ul">
                    <li>Hard-close and reopen after subscribing.</li>
                    <li>Confirm Steam exited the download pane without errors.</li>
                    <li>Double-check the in-game roster actually checked the gear on.</li>
                    <li>Validate the readme still lists your EA label.</li>
                    <li>Isolate by toggling lonely singles to prove conflicts.</li>
                    <li>Purge rusty packs after sweeping balance patches.</li>
                  </ul>
                  <p>
                    Catalogue browsers need the right CC filters; households demand the correct tray flow. Peek at screenshots
                    to line up where the UI expects placements.
                  </p>
                </section>

                <section id="mod-install-faq" class="mods-install-card mods-install-card--wide">
                  <!-- 广告：banner_3 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-mods-6" style="min-width: 300px; min-height: 250px;"></div>
    </aside>
                  <h3>FAQ</h3>
                  <div class="mods-install-faq-item">
                    <h4>Are mods safe?</h4>
                    <p>
                      Trusted storefront copy plus version discipline is boringly reliable — skim notes, snag backups before
                      you rewrite half the UI.
                    </p>
                  </div>
                  <div class="mods-install-faq-item">
                    <h4>Restart every time?</h4>
                    <p>
                      Often, yes — smaller hooks feel instant until they aren't. Reboot covers Build/Paramaker/Live parity and
                      purges lingering asset locks.
                    </p>
                  </div>
                  <div class="mods-install-faq-item">
                    <h4>Can outdated packs brick saves?</h4>
                    <p>
                      Absolutely once scripts or placed assets desync — especially loud right after chunky EA drops.
                    </p>
                  </div>
                  <div class="mods-install-faq-item">
                    <h4>Best avenue overall?</h4>
                    <p>
                      Workshop + mirrored in-game tooling wins for shipping updates, unsubscribing cleanly, and reading
                      community signal on busted builds.
                    </p>
                  </div>
                </section>
                

                <section id="mod-install-tips" class="mods-install-card mods-install-card--wide">
                  <h3>New to modding?</h3>
                  <p>
                    Start with one or two well-reviewed uploads, babysit patch notes weekly, widen the pool only after green
                    tests in disposable saves — slower Friday night, quieter bug hunts month two.
                  </p>
                  <p class="mods-install-muted">
                    Stack this playbook with our
                    <a href="/wiki/modding">Mods &amp; DLC wiki primer</a>, the
                    <a href="/updates">roadmap &amp; changelog digest</a>, and
                    <a href="/wiki/build-tools">Build Mode cheat sheet</a> so installs line up with what EA still retools between
                    drops.
                  </p>
                </section>
              </div>
            </section>

          </div>

          <aside class="mods-sidebar" aria-label="Install guide navigation">
            <div class="mods-sidebar-card mods-sidebar-card--links">
              <h2>On this page</h2>
              <nav class="mods-sidebar-nav" aria-label="Install guide sections">
                <a href="#mods-install-heading">Overview</a>
                <a href="#mod-install-steps">General flow</a>
                <a href="#mod-install-workshop">Steam Workshop</a>
                <a href="#mod-install-before">Before installing</a>
                <a href="#mod-install-enable">Enable in game</a>
                <a href="#mod-install-update">Updates</a>
                <a href="#mod-install-remove">Remove</a>
                <a href="#mod-install-troubleshoot">Troubleshooting</a>
                <a href="#mod-install-faq">FAQ</a>
                <a href="#mod-install-tips">Tips &amp; more wiki</a>
              </nav>
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
import { pageBannerEntries } from '@/gpt/config'
import { useGptAds } from '@/gpt/ads'

useGptAds(pageBannerEntries('mods', 6))

/**
 * 固定分类：`mods.js` 里 `classify` 与第一项 key 一致。
 * 筛选通过地址栏 `?cat=key`；全部列表为 `All`（无 query）。
 */
const MOD_CATEGORIES = [
  ['modpacks', 'Modpacks'],
  ['the_goth_household', 'Household'],
  ['split_level_house', 'House'],
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

/** Pill above title: category label from MOD_CATEGORIES (not mod.tags). Other bucket matches tab. */
function classifyPillLabel(mod) {
  const n = normClassify(mod?.classify)
  if (!n || !isKnownClassify(n)) return 'Other'
  const hit = MOD_CATEGORIES.find(([k]) => k === n)
  return hit ? hit[1] : 'Other'
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

.mods-primary {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mods-install-guide {
  padding: 1.5rem 1.35rem 1.65rem;
  border-radius: var(--radius-lg);
  border: 3px solid color-mix(in srgb, var(--color-lavender-deep) 28%, transparent);
  background: color-mix(in srgb, var(--color-lavender) 10%, var(--color-cream));
  box-shadow: var(--shadow-card);
}

.mods-install-guide-title {
  margin: 0 0 0.65rem;
  font-family: var(--font-cartoon);
  font-size: clamp(1.2rem, 2.5vw, 1.42rem);
  color: var(--color-ink);
  scroll-margin-top: var(--site-anchor-offset, 6.35rem);
}

.mods-install-lead {
  margin: 0 0 0.75rem;
  font-size: 0.96rem;
  line-height: 1.62;
  color: var(--color-ink-muted);
}

.mods-install-intro {
  margin: 0 0 1.15rem;
  font-size: 0.93rem;
  line-height: 1.58;
  color: var(--color-ink-muted);
}

.mods-install-figure {
  margin: 0 0 1.35rem;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 2px solid color-mix(in srgb, var(--color-lavender) 42%, transparent);
  background: color-mix(in srgb, var(--color-lavender) 6%, var(--color-white));
  box-shadow: 0 4px 20px color-mix(in srgb, var(--color-lavender-deep) 12%, transparent);
}

.mods-install-figure img {
  display: block;
  width: 100%;
  height: auto;
  vertical-align: middle;
}

.mods-install-figure--in-card {
  margin-top: 0.35rem;
}

.mods-install-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 1rem;
}

.mods-install-card {
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  background: var(--color-white);
  border: 2px solid color-mix(in srgb, var(--color-lavender) 42%, transparent);
  scroll-margin-top: var(--site-anchor-offset, 6.35rem);
}

.mods-install-card--wide {
  grid-column: 1 / -1;
}

.mods-install-card h3 {
  margin: 0 0 0.5rem;
  font-family: var(--font-display);
  font-size: 1.02rem;
  color: var(--color-ink);
}

.mods-install-card h4 {
  margin: 0 0 0.35rem;
  font-size: 0.92rem;
  font-family: var(--font-display);
  color: var(--color-lavender-deep);
}

.mods-install-card p {
  margin: 0 0 0.65rem;
  font-size: 0.91rem;
  line-height: 1.58;
  color: var(--color-ink-muted);
}

.mods-install-card p:last-child {
  margin-bottom: 0;
}

.mods-install-muted {
  font-size: 0.87rem !important;
  opacity: 0.95;
}

.mods-install-ol,
.mods-install-ul {
  margin: 0 0 0.65rem;
  padding-left: 1.2rem;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--color-ink-muted);
}

.mods-install-ol li,
.mods-install-ul li {
  margin-bottom: 0.38rem;
}

.mods-install-faq-item {
  margin-bottom: 0.85rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px dashed color-mix(in srgb, var(--color-lavender) 65%, transparent);
}

.mods-install-faq-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.mods-install-faq-item p {
  margin: 0;
  font-size: 0.88rem;
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
  top: var(--site-anchor-offset, 6.35rem);
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

.mods-sidebar-card--links .mods-sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.mods-sidebar-nav a {
  display: block;
  padding: 0.38rem 0;
  font-size: 0.87rem;
  font-weight: 600;
  color: var(--color-ink-muted);
  text-decoration: none;
  border-bottom: 1px solid color-mix(in srgb, var(--color-lavender) 45%, transparent);
  transition: color 0.15s ease;
}

.mods-sidebar-nav a:last-child {
  border-bottom: none;
}

.mods-sidebar-nav a:hover {
  color: var(--color-lavender-deep);
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
