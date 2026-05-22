<template>
  <article class="start-page">
    <section class="page-hero-section page-hero-section--start" aria-labelledby="start-title">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="page-hero-content">
          <h1 id="start-title" class="title-gradient">Paralives Start Guide</h1>
          <p>
            Learn the three modes, create your first Parafolks, build a home, and know what to do in
            town. Game info and PC specs are at the end.
          </p>
          <p class="start-hero-meta">
            Updated <time datetime="2026-05-19">May 19, 2026</time>
          </p>
        </div>
      </div>
    </section>

    <div class="start-body">
      <div class="container start-layout">
        <!-- Mobile jump nav -->
        <nav class="start-toc-mobile" aria-label="Page sections">
          <a
            v-for="item in toc"
            :key="item.id"
            :href="`#${item.id}`"
            class="start-toc-mobile-link"
            :class="{ 'is-active': activeId === item.id }"
          >
            {{ item.num }}
          </a>
        </nav>

        <aside class="start-sidebar" aria-label="On this page">
          <div class="start-sidebar-inner">
            <p class="start-sidebar-title">Guide</p>
            <ol class="start-sidebar-list">
              <li v-for="item in toc" :key="item.id">
                <a
                  :href="`#${item.id}`"
                  class="start-sidebar-link"
                  :class="{ 'is-active': activeId === item.id }"
                  @click="onTocClick"
                >
                  <span class="start-sidebar-num">{{ item.num }}</span>
                  <span class="start-sidebar-text">{{ item.label }}</span>
                </a>
              </li>
            </ol>
          </div>
        </aside>

        <div class="start-main">
          <!-- 1 -->
          <section id="modes" class="start-section" aria-labelledby="modes-heading">
            <h2 id="modes-heading">Three game modes</h2>
            <p>
              Paralives revolves around three modes. You switch between them often; each has a clear
              job in your save.
            </p>
            <figure class="start-figure start-figure--wide">
              <img
                src="/images/start-01.webp"
                alt="Placeholder — Paramaker, Build Mode, and Live Mode overview"
                width="800"
                height="360"
                loading="lazy"
              />
            </figure>
            <div class="start-mode-cards">
              <article class="start-mode-card start-mode-card--paramaker">
                <h3>Paramaker</h3>
                <p class="start-mode-lead">Create Parafolks and outfits</p>
                <p>
                  Design characters, genetics, and clothing. Personality choices are set here and
                  carry into Live Mode.
                </p>
              </article>
              <article class="start-mode-card start-mode-card--build">
                <h3>Build Mode</h3>
                <p class="start-mode-lead">Build their home</p>
                <p>
                  Curved walls, split levels, resized furniture, and a color wheel — with an optional
                  wall grid for precision.
                </p>
              </article>
              <article class="start-mode-card start-mode-card--live">
                <h3>Live Mode</h3>
                <p class="start-mode-lead">Play their lives in town</p>
                <p>
                  Needs, jobs, relationships, skills, bills, and venues like shops and the museum in
                  an open-world town.
                </p>
              </article>
            </div>
            <p class="start-aside">
              Typical loop: create people → build a home → live their story → return to Build or
              Paramaker when you expand or redecorate.
            </p>
          </section>

          <!-- 2 -->
          <section id="boot" class="start-section" aria-labelledby="boot-heading">
            <h2 id="boot-heading">From launch to your household</h2>
            <div class="start-split">
              <div class="start-split-text">
                <p>
                  The game launches on Steam for <strong>PC and Mac</strong> (Early Access May 25,
                  2026). It is <strong>single-player</strong> and does not need an internet connection.
                  There is no open beta.
                </p>
                <p>Public dev logs suggest this order for a new save:</p>
                <ol class="start-flow-steps">
                  <li>Start or load a save</li>
                  <li>Open the town map and pick or buy a lot</li>
                  <li>Create or choose a household</li>
                  <li>Open Paramaker and add Parafolks</li>
                  <li>Build on your lot in Build Mode</li>
                  <li>Move in and play in Live Mode</li>
                </ol>
                <p class="start-tip">
                  Tip: start with one or two Parafolks until needs and bills feel familiar.
                </p>
              </div>
              <figure class="start-figure">
                <img
                  src="/images/start-02.webp"
                  alt="Placeholder — town map and lot selection"
                  width="480"
                  height="320"
                  loading="lazy"
                />
              </figure>
            </div>
          </section>

          <!-- 3 -->
          <section id="paramaker" class="start-section" aria-labelledby="paramaker-heading">
            <h2 id="paramaker-heading">Creating and customizing Parafolks</h2>
            <p>
              Paramaker is where you define who lives in your save. Appearance and personality both
              matter for long-term play.
            </p>
            <figure class="start-figure start-figure--wide">
              <img
                src="/images/start-03.webp"
                alt="Placeholder — character creation in Paramaker"
                width="800"
                height="360"
                loading="lazy"
              />
            </figure>

            <h3>Look and clothing (day one)</h3>
            <p>Official Early Access launch features include:</p>
            <ul class="start-config-grid">
              <li>Color wheel for everything</li>
              <li>Height, body, and face sliders</li>
              <li>Tattoo placement</li>
              <li>Layered tops (e.g. undershirt + jacket)</li>
              <li>Asymmetry (eyes, socks, and more)</li>
              <li>Genetics system</li>
              <li>Multiple outfits per character</li>
            </ul>

            <h3>Personality and gameplay</h3>
            <p>
              Live Mode at launch includes traits, emotions, wants, skills, and needs. Personality
              picked in Paramaker ties into careers and how Parafolks react over time.
            </p>
            <ul class="start-bullet-list">
              <li>Skills grow through related activities</li>
              <li>Genetics can pass to children in legacy saves</li>
              <li>Dev builds also support saved households and relationship presets</li>
            </ul>
            <p class="start-note-inline">
              Pets in Paramaker and advanced genetics tools are planned during Early Access, not
              necessarily on day one.
            </p>
          </section>

          <!-- 4 -->
          <section id="build" class="start-section" aria-labelledby="build-heading">
            <h2 id="build-heading">Build Mode before you move in</h2>
            <div class="start-split start-split--reverse">
              <figure class="start-figure">
                <img
                  src="/images/start-04.webp"
                  alt="Placeholder — building a home in Build Mode"
                  width="480"
                  height="320"
                  loading="lazy"
                />
              </figure>
              <div class="start-split-text">
                <p>
                  You need a livable lot before Live Mode. Many players spend their first hour here —
                  that is normal.
                </p>
                <h3>Day-one building tools</h3>
                <ul class="start-bullet-list">
                  <li>Curved walls and any-angle walls, optional grid</li>
                  <li>Split-level platforms and multiple floors</li>
                  <li>Move walls, resize objects, stairs, roofs, fences</li>
                  <li>Color wheel on surfaces and furniture</li>
                </ul>
                <h3>First build goals</h3>
                <ol class="start-mini-steps">
                  <li>Small layout: bed, bath, kitchen or living space</li>
                  <li>Try one trick: curved wall, split level, or resized item</li>
                  <li>Roof and doors before heavy decor</li>
                  <li>Basic furniture so needs work in Live Mode</li>
                </ol>
              </div>
            </div>
            <p class="start-aside">
              Pools, basements, and advanced roof tools are on the during-EA list. See
              <RouterLink to="/updates">Updates</RouterLink> for the full official breakdown.
            </p>
          </section>

          <!-- 5 -->
          <section id="live" class="start-section" aria-labelledby="live-heading">
            <h2 id="live-heading">First things in Live Mode</h2>
            <p>
              After move-in you play in an open town with a day–night cycle. Use this as a first-session
              list:
            </p>
            <figure class="start-figure start-figure--wide">
              <img
                src="/images/start-05.webp"
                alt="Placeholder — Live Mode in the open-world town"
                width="800"
                height="360"
                loading="lazy"
              />
            </figure>
            <ul class="start-checklist">
              <li><strong>Watch needs</strong> — hunger, energy, and related meters</li>
              <li><strong>Complete a want</strong> — learn the mood and reward loop</li>
              <li><strong>Take a job</strong> — work uses rabbit holes at Early Access</li>
              <li><strong>Level a career</strong> — try one progression path</li>
              <li><strong>Socialize once</strong> — start one relationship chain</li>
              <li><strong>Visit a venue</strong> — shop, restaurant, or museum</li>
              <li><strong>Use multiselect</strong> — direct a group when needed</li>
              <li><strong>Check bills</strong> — household costs can add up</li>
              <li><strong>Save often</strong> — especially during Early Access</li>
            </ul>
            <p>
              Later in the same save: cooking, children, aging, museum collections, and in-game modding
              tools (all on the official day-one list).
            </p>
          </section>

          <!-- 6 -->
          <section id="playstyles" class="start-section" aria-labelledby="playstyles-heading">
            <h2 id="playstyles-heading">Recommended ways to play</h2>
            <p>Pick a pace that fits you — you need a home before Live Mode, but how deep you go is up to you.</p>
            <div class="start-playstyles">
              <article>
                <h3>Balanced (good first save)</h3>
                <p>Paramaker → starter home → one job, one skill, one town visit.</p>
              </article>
              <article>
                <h3>Builder-first</h3>
                <p>Extra time in Build Mode; simple home, then Live Mode when ready.</p>
              </article>
              <article>
                <h3>Story-first</h3>
                <p>Minimal house, focus on relationships and wants; save often in EA.</p>
              </article>
              <article>
                <h3>Legacy / family</h3>
                <p>Invest in genetics and relationships early; children and aging are day-one systems.</p>
              </article>
            </div>
          </section>

          <!-- 7 -->
          <section id="caution" class="start-section" aria-labelledby="caution-heading">
            <h2 id="caution-heading">Things to watch out for</h2>
            <ul class="start-warnings">
              <li>
                <strong>Early Access is unfinished.</strong> Bugs and missing features are expected; the
                team estimates about two years in EA before 1.0.
              </li>
              <li>
                <strong>Not everything is day one.</strong> Weather, pets, cars, swimming, gardening, and
                town editing are on the during-EA list —
                <RouterLink to="/updates">see Updates</RouterLink> before you buy for one feature.
              </li>
              <li>
                <strong>Trailers ≠ launch scope.</strong> Use the official day-one vs during-EA lists as
                your reference.
              </li>
              <li><strong>Camera:</strong> free 3D only — no first- or third-person view.</li>
              <li><strong>Mods:</strong> Steam Workshop yes; script mods not planned; in-game mod tools at EA launch.</li>
              <li><strong>This site is unofficial.</strong> Trust the game client and store page if anything conflicts.</li>
            </ul>
          </section>

          <!-- 8 -->
          <section id="about" class="start-section start-section--ref" aria-labelledby="about-heading">
            <h2 id="about-heading">About Paralives</h2>
            <div class="start-split">
              <div class="start-split-text">
                <p>
                  An indie life sim from Alex Massé and Paralives Studio — community-funded, built with
                  player feedback. Create Parafolks, build without a rigid grid, and live in an open town
                  with free content updates (no paid DLC).
                </p>
                <dl class="start-facts">
                  <div>
                    <dt>Release</dt>
                    <dd>Steam Early Access — May 25, 2026 (PC &amp; Mac)</dd>
                  </div>
                  <div>
                    <dt>Price</dt>
                    <dd>$39.99 USD in EA; price rises toward 1.0. Free updates only.</dd>
                  </div>
                  <div>
                    <dt>Platforms</dt>
                    <dd>PC and Mac on Steam. No console or mobile plans.</dd>
                  </div>
                  <div>
                    <dt>Play style</dt>
                    <dd>Single-player; offline play supported.</dd>
                  </div>
                  <div>
                    <dt>Languages</dt>
                    <dd>English, French, Chinese, Spanish (LATAM), Portuguese (BR), German, Italian, Polish.</dd>
                  </div>
                  <div>
                    <dt>Rating</dt>
                    <dd>Teen target — no drugs, gore, sexual violence, etc.</dd>
                  </div>
                </dl>
                <p class="start-more">
                  <RouterLink to="/updates">Roadmap</RouterLink> ·
                  <RouterLink to="/guides/getting-started">Full guide</RouterLink> ·
                  <RouterLink to="/wiki">Wiki</RouterLink>
                </p>
              </div>
              <figure class="start-figure">
                <img
                  src="/images/start-06.webp"
                  alt="Placeholder — Paralives town and Parafolks"
                  width="480"
                  height="320"
                  loading="lazy"
                />
              </figure>
            </div>
          </section>

          <!-- 9 -->
          <section id="specs" class="start-section start-section--ref" aria-labelledby="specs-heading">
            <h2 id="specs-heading">System requirements</h2>
            <p>
              From the Steam store page (November 2025). Lower resolution and graphics settings if
              performance is weak.
            </p>
            <div class="start-specs-grid">
              <div class="start-specs-card">
                <h3>Windows — minimum</h3>
                <ul>
                  <li>Windows 10</li>
                  <li>Intel i5 or AMD Ryzen 5 @ 2.5 GHz</li>
                  <li>12 GB RAM · GTX 1060 or RX 6600 XT</li>
                  <li>DirectX 11 · 8 GB storage</li>
                </ul>
              </div>
              <div class="start-specs-card">
                <h3>Windows — recommended</h3>
                <ul>
                  <li>Windows 11</li>
                  <li>Intel i5 or AMD Ryzen 5 @ 3.0 GHz</li>
                  <li>16 GB RAM · RTX 2060 or RX 7600 XT</li>
                  <li>DirectX 11 · 8 GB storage</li>
                </ul>
              </div>
              <div class="start-specs-card">
                <h3>macOS — minimum</h3>
                <ul>
                  <li>Apple silicon · macOS Big Sur 11+</li>
                  <li>Apple M2 · 12 GB RAM</li>
                </ul>
              </div>
              <div class="start-specs-card">
                <h3>macOS — recommended</h3>
                <ul>
                  <li>Apple M3 · 16 GB RAM</li>
                </ul>
              </div>
            </div>
            <p class="start-footnote">
              Paralives Hub is a fan site. Check Steam and in-game news for the latest specs after launch.
            </p>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const toc = [
  { id: 'modes', num: 1, label: 'Three game modes' },
  { id: 'boot', num: 2, label: 'Launch to household' },
  { id: 'paramaker', num: 3, label: 'Create Parafolks' },
  { id: 'build', num: 4, label: 'Build Mode' },
  { id: 'live', num: 5, label: 'Live Mode first steps' },
  { id: 'playstyles', num: 6, label: 'Ways to play' },
  { id: 'caution', num: 7, label: 'Watch outs' },
  { id: 'about', num: 8, label: 'About the game' },
  { id: 'specs', num: 9, label: 'System requirements' },
]

const activeId = ref(toc[0].id)
let observer = null

function onTocClick() {
  /* allow native hash scroll; observer updates active state */
}

onMounted(() => {
  const ids = toc.map((t) => t.id)
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]?.target?.id) {
        activeId.value = visible[0].target.id
      }
    },
    { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
  )
  ids.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.start-hero-meta {
  margin-top: 0.75rem;
  font-size: 0.88rem;
  opacity: 0.9;
}

.start-body {
  padding: 2rem 0 4.5rem;
  background: var(--color-white);
}

.start-layout {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .start-layout {
    grid-template-columns: 252px minmax(0, 1fr);
    gap: 2.5rem;
    align-items: start;
  }

  .start-sidebar {
    grid-column: 1;
    grid-row: 1;
  }

  .start-main {
    grid-column: 2;
    grid-row: 1;
  }
}

/* —— Sidebar —— */
.start-sidebar {
  display: none;
}

@media (min-width: 1024px) {
  .start-sidebar {
    display: block;
    position: sticky;
    top: 5.5rem;
    align-self: start;
    z-index: 5;
    max-height: calc(100vh - 6rem);
  }
}

.start-sidebar-inner {
  padding: 1.25rem 0;
  border-radius: var(--radius-lg);
  background: linear-gradient(
    165deg,
    color-mix(in srgb, var(--color-cream) 90%, var(--color-white)) 0%,
    var(--color-white) 55%
  );
  border: 2px solid color-mix(in srgb, var(--color-sage) 38%, transparent);
  box-shadow:
    0 4px 20px color-mix(in srgb, var(--color-sage) 12%, transparent),
    inset 0 1px 0 color-mix(in srgb, var(--color-white) 80%, transparent);
  max-height: calc(100vh - 6rem);
  overflow-x: hidden;
  overflow-y: auto;
}

.start-sidebar-title {
  font-family: var(--font-cartoon);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-sage-dark);
  padding: 0 1.15rem;
  margin-bottom: 0.75rem;
}

.start-sidebar-list {
  list-style: none;
  margin: 0;
  padding: 0 0.65rem 0.5rem;
}

.start-sidebar-link {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.5rem 0.55rem;
  margin-bottom: 0.15rem;
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition:
    background 0.2s ease,
    transform 0.15s ease;
}

.start-sidebar-link:hover {
  background: color-mix(in srgb, var(--color-mint) 40%, transparent);
}

.start-sidebar-link.is-active {
  background: color-mix(in srgb, var(--color-sage) 22%, var(--color-white));
  box-shadow: inset 3px 0 0 var(--color-sage);
}

.start-sidebar-num {
  flex-shrink: 0;
  width: 1.65rem;
  height: 1.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-cartoon);
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--color-white);
  background: color-mix(in srgb, var(--color-sage) 75%, var(--color-ink));
  border-radius: 50%;
  transition: background 0.2s ease, transform 0.2s ease;
}

.start-sidebar-link.is-active .start-sidebar-num {
  background: var(--color-coral);
  transform: scale(1.05);
}

.start-sidebar-text {
  font-size: 0.84rem;
  line-height: 1.4;
  color: var(--color-ink-muted);
  padding-top: 0.15rem;
}

.start-sidebar-link.is-active .start-sidebar-text {
  color: var(--color-ink);
  font-weight: 600;
}

/* —— Mobile toc —— */
.start-toc-mobile {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-cream) 60%, var(--color-white));
  border: 2px solid color-mix(in srgb, var(--color-peach) 50%, transparent);
}

@media (min-width: 1024px) {
  .start-toc-mobile {
    display: none;
  }
}

.start-toc-mobile-link {
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
  border: 2px solid color-mix(in srgb, var(--color-sage) 30%, transparent);
}

.start-toc-mobile-link.is-active {
  background: var(--color-sage);
  color: var(--color-white);
  border-color: var(--color-sage);
}

/* —— Main content —— */
.start-section {
  margin-bottom: 3.25rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-mint) 55%, transparent);
  scroll-margin-top: 5.5rem;
}

.start-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.start-section--ref {
  padding-top: 0.5rem;
}

.start-section h2 {
  font-family: var(--font-cartoon);
  font-size: clamp(1.35rem, 2.5vw, 1.6rem);
  color: var(--color-ink);
  margin: 0 0 1rem;
  line-height: 1.25;
}

.start-section h3 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--color-ink);
  margin: 1.5rem 0 0.5rem;
}

.start-section > p {
  color: var(--color-ink-muted);
  line-height: 1.7;
  margin-bottom: 0.85rem;
  max-width: 42rem;
}

.start-figure {
  margin: 1.25rem 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 3px solid color-mix(in srgb, var(--color-peach) 45%, transparent);
  box-shadow: var(--shadow-card);
}

.start-figure img {
  display: block;
  width: 100%;
  height: auto;
  vertical-align: middle;
}

.start-figure--wide {
  max-width: 100%;
}

.start-split {
  display: grid;
  gap: 1.5rem;
  align-items: start;
  margin-top: 0.5rem;
}

@media (min-width: 768px) {
  .start-split {
    grid-template-columns: 1fr minmax(200px, 280px);
    gap: 2rem;
  }

  .start-split--reverse {
    grid-template-columns: minmax(200px, 280px) 1fr;
  }

  .start-split--reverse .start-figure {
    order: -1;
  }
}

.start-split-text .start-bullet-list,
.start-split-text .start-mini-steps,
.start-split-text .start-flow-steps {
  max-width: none;
}

.start-mode-cards {
  display: grid;
  gap: 1rem;
  margin: 1.25rem 0;
}

@media (min-width: 768px) {
  .start-mode-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

.start-mode-card {
  padding: 1.1rem 1.15rem;
  border-radius: var(--radius-md);
  background: var(--color-white);
  border: 2px solid transparent;
  box-shadow: var(--shadow-card);
}

.start-mode-card--paramaker {
  border-color: color-mix(in srgb, var(--color-lavender-deep) 40%, transparent);
}

.start-mode-card--build {
  border-color: color-mix(in srgb, var(--color-sky-deep) 35%, transparent);
}

.start-mode-card--live {
  border-color: color-mix(in srgb, var(--color-sage) 45%, transparent);
}

.start-mode-card h3 {
  margin: 0 0 0.25rem;
  font-family: var(--font-cartoon);
  font-size: 1.05rem;
}

.start-mode-lead {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-coral-deep);
  margin-bottom: 0.45rem;
}

.start-mode-card p:last-child {
  font-size: 0.9rem;
  color: var(--color-ink-muted);
  line-height: 1.55;
  margin: 0;
}

.start-aside,
.start-tip,
.start-note-inline {
  font-size: 0.9rem;
  color: var(--color-ink-muted);
  line-height: 1.55;
  max-width: 42rem;
}

.start-tip {
  margin-top: 0.75rem;
  padding: 0.65rem 0.85rem;
  background: color-mix(in srgb, var(--color-mint) 30%, var(--color-white));
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--color-sage);
}

.start-flow-steps {
  margin: 0.5rem 0 0 1.2rem;
  color: var(--color-ink-muted);
  line-height: 1.65;
}

.start-flow-steps li {
  margin-bottom: 0.4rem;
}

.start-config-grid {
  display: grid;
  gap: 0.45rem 1rem;
  margin: 0.5rem 0 1rem;
  padding: 0;
  list-style: none;
}

@media (min-width: 768px) {
  .start-config-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.start-config-grid li {
  padding-left: 1.1rem;
  position: relative;
  font-size: 0.92rem;
  color: var(--color-ink);
  line-height: 1.45;
}

.start-config-grid li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-sage-dark);
  font-weight: 700;
}

.start-bullet-list {
  margin: 0.35rem 0 0 1.2rem;
  color: var(--color-ink-muted);
  line-height: 1.6;
}

.start-bullet-list li {
  margin-bottom: 0.35rem;
}

.start-mini-steps {
  margin: 0.35rem 0 0 1.2rem;
  color: var(--color-ink-muted);
  line-height: 1.6;
}

.start-checklist {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
  display: grid;
  gap: 0.55rem;
}

.start-checklist li {
  padding: 0.7rem 0.9rem 0.7rem 2.35rem;
  position: relative;
  background: color-mix(in srgb, var(--color-cream) 45%, var(--color-white));
  border-radius: var(--radius-sm);
  border: 1px solid color-mix(in srgb, var(--color-peach) 40%, transparent);
  font-size: 0.92rem;
  color: var(--color-ink-muted);
  line-height: 1.5;
}

.start-checklist li::before {
  content: '✓';
  position: absolute;
  left: 0.85rem;
  color: var(--color-sage-dark);
  font-weight: 800;
}

.start-checklist strong {
  color: var(--color-ink);
}

.start-playstyles {
  display: grid;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

@media (min-width: 768px) {
  .start-playstyles {
    grid-template-columns: repeat(2, 1fr);
  }
}

.start-playstyles article {
  padding: 1rem;
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-mint) 18%, var(--color-white));
  border: 2px solid color-mix(in srgb, var(--color-sage) 28%, transparent);
}

.start-playstyles h3 {
  margin: 0 0 0.35rem;
  font-size: 0.95rem;
}

.start-playstyles p {
  margin: 0;
  font-size: 0.88rem;
  color: var(--color-ink-muted);
  line-height: 1.5;
}

.start-warnings {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.65rem;
}

.start-warnings li {
  padding: 0.8rem 1rem;
  border-radius: var(--radius-sm);
  background: color-mix(in srgb, var(--color-peach) 22%, var(--color-white));
  border-left: 4px solid var(--color-coral);
  font-size: 0.92rem;
  color: var(--color-ink-muted);
  line-height: 1.55;
}

.start-warnings strong {
  color: var(--color-ink);
}

.start-facts {
  margin: 1rem 0 0;
  display: grid;
  gap: 0.65rem;
}

.start-facts div {
  display: grid;
  gap: 0.15rem;
}

@media (min-width: 768px) {
  .start-facts div {
    grid-template-columns: 5.5rem 1fr;
    gap: 0.5rem;
  }
}

.start-facts dt {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--color-sage-dark);
}

.start-facts dd {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-ink-muted);
  line-height: 1.5;
}

.start-more {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.start-more a {
  color: var(--color-sage-dark);
  font-weight: 600;
  text-decoration: none;
}

.start-more a:hover {
  color: var(--color-coral-deep);
}

.start-specs-grid {
  display: grid;
  gap: 0.85rem;
  margin: 1rem 0;
}

@media (min-width: 768px) {
  .start-specs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.start-specs-card {
  padding: 1rem;
  background: color-mix(in srgb, var(--color-cream) 40%, var(--color-white));
  border-radius: var(--radius-md);
  border: 2px solid color-mix(in srgb, var(--color-sage) 25%, transparent);
}

.start-specs-card h3 {
  margin: 0 0 0.4rem;
  font-size: 0.9rem;
}

.start-specs-card ul {
  margin: 0;
  padding-left: 1rem;
  font-size: 0.86rem;
  color: var(--color-ink-muted);
  line-height: 1.5;
}

.start-footnote {
  font-size: 0.85rem;
  color: var(--color-ink-muted);
  margin-top: 1rem;
  max-width: 40rem;
}

.start-section a {
  color: var(--color-sage-dark);
  font-weight: 600;
}
</style>
