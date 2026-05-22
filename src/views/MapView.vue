<template>
  <article class="map-page" itemscope itemtype="https://schema.org/WebPage">
    <meta itemprop="name" content="Paralives Map — Paralives Interactive Map & Melino POI Guide" />

    <section class="page-hero-section page-hero-section--map" aria-labelledby="map-title">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="map-hero-layout">
          <div class="page-hero-content">
            <span class="section-label">Live Mode · Town</span>
            <h1 id="map-title" class="title-gradient title-gradient--light">
              Paralives Map — Melino Town &amp; Points of Interest
            </h1>
            <p>
              Your <strong>Paralives map</strong> for Early Access — use our
              <strong>Paralives Interactive Map</strong> to explore <strong>Melino</strong>, the first
              open world at launch (May 25, 2026). Find shops, schools, the museum, bus stops, and
              neighborhoods before you play in Live Mode.
            </p>
            <p class="map-hero-meta">
              Last updated <time datetime="2026-05-19">May 19, 2026</time>
              · Early Access launch <time datetime="2026-05-25">May 25, 2026</time>
            </p>
            <p class="map-hero-source">
              <strong>Source:</strong> Paralives Studio public Development lists (Live Mode). Paralives
              Wiki is unofficial and not affiliated with the developer.
            </p>
          </div>
          <figure class="map-hero-media">
            <img
              src="/images/map-hero.webp"
              alt="Melino town overview — Paralives Early Access open world map"
              loading="eager"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>

    <div class="map-body">
      <div class="container map-layout">
        <nav class="map-toc" aria-label="On this page">
          <p class="map-toc-title">Jump to</p>
          <ol>
            <li v-for="item in toc" :key="item.id">
              <a :href="`#${item.id}`">{{ item.label }}</a>
            </li>
          </ol>
        </nav>

        <div class="map-main">
          <!-- Melino interactive map (data from paralives.wiki.gg) -->
          <section id="town-map" class="map-section" aria-labelledby="map-image-heading">
            <h2 id="map-image-heading">Paralives Interactive Map</h2>
            <p>
              The <strong>Paralives Interactive Map</strong> below is your pan-and-zoom
              <strong>Paralives map</strong> of Melino — filter by category and click pins for lot names.
              Pin data is based on the community map for
              <a href="https://paralives.wiki.gg/wiki/Melino" target="_blank" rel="noopener noreferrer"
                >Melino on Paralives Wiki</a
              >. Four districts: Old Town, Industrial, Mountain, and Countryside (50–70 lots at EA).
            </p>

            <MelinoInteractiveMap />
          </section>

          <!-- Intro -->
          <section id="overview" class="map-section" aria-labelledby="overview-heading">
            <h2 id="overview-heading">About Paralives Map — Melino</h2>
            <p>
              <strong>Melino</strong> is the first playable open world in Paralives Early Access — not a
              loading screen between lots. Official materials describe venues such as
              <strong>shops</strong>, <strong>restaurants</strong>, and a <strong>museum</strong>, plus
              rabbit-hole <strong>work</strong> for careers. The town has four districts (Old Town,
              Industrial, Mountain, Countryside) and roughly 50–70 lots, some public and some residential.
            </p>
            <p>
              Paralives Hub groups those venue types below so you can plan a first session. For the
              exact wording and future features (pets, cars, town editing tools), see our
              <RouterLink to="/updates">Development &amp; roadmap</RouterLink> page or the beginner
              walkthrough in <RouterLink to="/start">Start Here</RouterLink>.
            </p>
            <ul class="map-fact-list">
              <li>
                <strong>Day one (official):</strong> open world town, shops and restaurants, museum and
                collections, work (rabbit holes), plus core Live systems (needs, relationships, bills,
                etc.).
              </li>
              <li>
                <strong>During Early Access (official):</strong> weather and seasons, gardening and
                fishing, cars and bikes, swimming, social events, and tools to edit and create towns —
                not all are “map pins” at launch.
              </li>
            </ul>
          </section>

          <!-- POI directory -->
          <section id="venues" class="map-section" aria-labelledby="venues-heading">
            <h2 id="venues-heading">Paralives Map — Points of Interest</h2>
            <p>
              Each entry ties to an official Early Access bullet where possible. “Day one” and “during
              EA” labels match the Development page.
            </p>

            <ul class="map-poi-list">
              <li v-for="poi in pois" :key="poi.id" :id="`poi-${poi.id}`" class="map-poi-item">
                <article>
                  <header class="map-poi-head">
                    <span class="map-poi-icon" aria-hidden="true">{{ poi.icon }}</span>
                    <div>
                      <h3>{{ poi.name }}</h3>
                      <p class="map-poi-meta">
                        <span class="map-poi-type">{{ poi.typeLabel }}</span>
                        <span
                          class="map-poi-availability"
                          :class="`map-poi-availability--${poi.availability}`"
                        >
                          {{ poi.availability === 'dayOne' ? 'Day one EA' : 'During EA' }}
                        </span>
                      </p>
                    </div>
                  </header>
                  <p>{{ poi.desc }}</p>
                  <h4 v-if="poi.tips?.length">Player tips</h4>
                  <ul v-if="poi.tips?.length">
                    <li v-for="(tip, i) in poi.tips" :key="i">{{ tip }}</li>
                  </ul>
                  <p v-if="poi.officialRef" class="map-poi-ref">
                    <strong>Official list:</strong> {{ poi.officialRef }}
                  </p>
                </article>
              </li>
            </ul>
          </section>

          <!-- EA town features -->
          <section id="town-features" class="map-section" aria-labelledby="features-heading">
            <h2 id="features-heading">Paralives Map Features by Release Phase</h2>
            <p>
              Copied from the Live Mode sections on the public Development page. Non-town systems
              (traits, emotions, multiselect, etc.) are omitted here — see
              <RouterLink to="/updates">Updates</RouterLink> for the full mode lists.
            </p>
            <div class="map-phase-grid">
              <article class="map-phase-card map-phase-card--day">
                <h3>Available on day one of Early Access</h3>
                <ul>
                  <li v-for="item in townDayOne" :key="item">{{ item }}</li>
                </ul>
              </article>
              <article class="map-phase-card map-phase-card--later">
                <h3>Planned during Early Access</h3>
                <ul>
                  <li v-for="item in townDuringEa" :key="item">{{ item }}</li>
                </ul>
              </article>
            </div>
          </section>

          <!-- First visit -->
          <section id="first-visit" class="map-section" aria-labelledby="visit-heading">
            <h2 id="visit-heading">First Visit on the Paralives Map</h2>
            <p>
              A practical order for your first hour in Live Mode after move-in — aligned with official
              day-one mechanics, not a guaranteed quest line.
            </p>
            <ol class="map-checklist">
              <li>Open the in-game map or travel UI and locate your home lot in the open world.</li>
              <li>Visit <strong>shops</strong> for essentials; watch household bills afterward.</li>
              <li>Try a <strong>restaurant</strong> meal for social or mood benefits if your save allows.</li>
              <li>Stop at the <strong>museum</strong> and start at least one collection entry.</li>
              <li>Send a Parafolk to <strong>work</strong> (rabbit hole) and note career progression.</li>
              <li>
                Use multiselect to do one activity as a group (official day-one feature) — cooking or
                socializing together.
              </li>
            </ol>
            <p class="map-aside">
              Want a random goal? Try the
              <RouterLink to="/simulator/session-roll">Session roll</RouterLink> in the Paralives
              Simulator.
            </p>
          </section>

          <!-- FAQ -->
          <section id="faq" class="map-section map-faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Paralives map FAQ</h2>
            <dl class="map-faq-list">
              <div v-for="item in faq" :key="item.q" class="map-faq-item">
                <dt>{{ item.q }}</dt>
                <dd>{{ item.a }}</dd>
              </div>
            </dl>
          </section>

          <!-- Related -->
          <section id="related" class="map-section map-related" aria-labelledby="related-heading">
            <h2 id="related-heading">Beyond the Paralives Map</h2>
            <ul class="map-related-grid">
              <li>
                <RouterLink to="/start" class="map-related-card">
                  <strong>Start Here</strong>
                  <span>First session loop: Paramaker → build → town</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/updates" class="map-related-card">
                  <strong>Development updates</strong>
                  <span>Official day-one vs during-EA lists</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/guides" class="map-related-card">
                  <strong>Player guides</strong>
                  <span>Mode tips and Early Access notes</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/simulator/feature-filter" class="map-related-card">
                  <strong>Feature filter</strong>
                  <span>Check if a wish is day-one or later</span>
                </RouterLink>
              </li>
            </ul>
            <p class="map-disclaimer">
              Paralives Hub is an unofficial fan site. Town layout and UI may change in patches — always
              trust the game client and Paralives Studio’s Development page after launch.
            </p>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import MelinoInteractiveMap from '@/components/map/MelinoInteractiveMap.vue'

const PAGE_URL = 'https://paralives.wiki/map'
const LAST_UPDATED = '2026-05-19'

const toc = [
  { id: 'town-map', label: 'Paralives Interactive Map' },
  { id: 'overview', label: 'About Paralives Map' },
  { id: 'venues', label: 'Map POI directory' },
  { id: 'town-features', label: 'Map & EA features' },
  { id: 'first-visit', label: 'First map visit' },
  { id: 'faq', label: 'Paralives map FAQ' },
  { id: 'related', label: 'Related guides' },
]

const pois = [
  {
    id: 'shops',
    name: 'Shops',
    typeLabel: 'Commerce',
    availability: 'dayOne',
    officialRef: 'Shops and restaurants (Development — Live Mode, day one)',
    icon: '🛒',
    desc: 'Retail venues where Parafolks buy objects and daily goods. Listed on the official day-one Early Access feature list alongside restaurants.',
    tips: [
      'Pair a shop run with bill planning — electricity and lot costs are part of day-one Live Mode.',
      'Useful right after furnishing a starter home in Build Mode.',
    ],
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    typeLabel: 'Social · Dining',
    availability: 'dayOne',
    officialRef: 'Shops and restaurants (Development — Live Mode, day one)',
    icon: '🍽',
    desc: 'Social venues for meals with other Parafolks. Official materials group restaurants with shops as a day-one town activity.',
    tips: [
      'Good for relationship building in early saves.',
      'During EA, organizing parties and weddings is planned separately on the official list.',
    ],
  },
  {
    id: 'museum',
    name: 'Museum & collections',
    typeLabel: 'Culture',
    availability: 'dayOne',
    officialRef: 'Museum and collections (Development — Live Mode, day one)',
    icon: '🏛',
    desc: 'A long-term Live Mode goal: complete collection entries over multiple visits. Confirmed for day one of Early Access on the public Development page.',
    tips: [
      'Schedule repeat visits — collections are designed as ongoing progression.',
      'Combine with a town outing when teaching new players the open world.',
    ],
  },
  {
    id: 'work',
    name: 'Work & careers',
    typeLabel: 'Rabbit-hole jobs',
    availability: 'dayOne',
    officialRef: 'Work (rabbit holes); Career progression (Development — Live Mode, day one)',
    icon: '💼',
    desc: 'Career progression through rabbit-hole style work — Parafolks travel to work without full workplace simulation at EA launch, per official feature wording.',
    tips: [
      'Unlock at least one career perk in your first week to learn the progression loop.',
      'Session Roll challenges on Paralives Hub often reference this day-one mechanic.',
    ],
  },
  {
    id: 'residential',
    name: 'Residential lots',
    typeLabel: 'Your home base',
    availability: 'dayOne',
    officialRef: 'Open world town; core Live Mode housing loop (Development — day one)',
    icon: '🏠',
    desc: 'Household lots embedded in the open world — build in Build Mode, then play Live Mode from home. Travel out to shops, work, and venues.',
    tips: [
      'After move-in, learn travel from home to town center before chasing collections.',
      'House fires and bills are day-one systems — stay near home until you understand needs.',
    ],
  },
]

const townDayOne = [
  'Open world town',
  'Shops and restaurants',
  'Museum and collections',
  'Work (rabbit holes)',
  'Career progression',
  'Day-night cycle',
  'Multiselecting characters and doing anything as a group',
]

const townDuringEa = [
  'Weather and seasons',
  'Gardening and fishing',
  'Cars and bikes',
  'Boats and houseboats',
  'Swimming',
  'Organizing social events (parties, weddings)',
  'Tools to edit and create towns',
]

const faq = [
  {
    q: 'Is this the official Paralives map?',
    a: 'This Paralives map is a player guide on Paralives Wiki, not an in-game screen from Paralives Studio. The Paralives Interactive Map uses community Melino pin data from paralives.wiki.gg; layout and labels can change in patches.',
  },
  {
    q: 'How do I use the Paralives Interactive Map?',
    a: 'On this Paralives map page: scroll to zoom, drag to pan, tick categories in the legend to filter pins, and click a marker for the lot name and notes. Use the search box to find a venue by name.',
  },
  {
    q: 'What town venues are available on day one of Early Access?',
    a: 'The Development page lists an open world town with shops, restaurants, museum and collections, and rabbit-hole work with career progression. This page groups those into a directory for players.',
  },
  {
    q: 'When can I drive, swim, or edit the town?',
    a: 'Cars and bikes, swimming, gardening and fishing, and tools to edit and create towns are on the official “during Early Access” list — not the day-one list. See the feature phase section above or use the Simulator feature filter.',
  },
  {
    q: 'Are there parks or beaches on the map?',
    a: 'Public Development bullets do not name standalone parks or beaches for day one. Outdoor activities like swimming and expanded town tools are listed for during EA. We avoid inventing venue names that are not on the official lists.',
  },
  {
    q: 'How do I plan a first visit to town?',
    a: 'Use the first-visit checklist on this page: locate your lot, shop, eat out, start a museum collection, send someone to work, and try one group activity with multiselect.',
  },
]

function injectJsonLd() {
  const payload = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: 'Paralives Map — Paralives Interactive Map & Melino Points of Interest',
        description:
          'Paralives map for Early Access with a Paralives Interactive Map of Melino: shops, schools, museum, bus stops, districts, and venue directory. Fan reference for May 25, 2026 launch.',
        dateModified: LAST_UPDATED,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Paralives Hub',
          url: 'https://paraliveshub.com/',
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://paraliveshub.com/' },
            { '@type': 'ListItem', position: 2, name: 'Town Map', item: PAGE_URL },
          ],
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${PAGE_URL}#poilist`,
        name: 'Paralives town points of interest',
        itemListElement: pois.map((poi, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: poi.name,
          description: poi.desc,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}#faq`,
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = 'map-page-jsonld'
  script.textContent = JSON.stringify(payload)
  document.head.appendChild(script)
}

onMounted(() => {
  injectJsonLd()
})

onUnmounted(() => {
  document.getElementById('map-page-jsonld')?.remove()
})
</script>

<style scoped>
.map-hero-layout {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 1.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .map-hero-layout {
    grid-template-columns: minmax(0, 1fr) minmax(260px, 38%);
    gap: 2rem;
  }
}

.map-hero-layout .page-hero-content {
  max-width: none;
}

.map-hero-media {
  margin: 0;
  flex-shrink: 0;
}

.map-hero-media img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  border: 3px solid color-mix(in srgb, var(--color-white) 55%, transparent);
  box-shadow: var(--shadow-card);
}

@media (max-width: 1023px) {
  .map-hero-media {
    max-width: 420px;
    margin-inline: auto;
  }
}

.map-hero-meta,
.map-hero-source {
  margin-top: 0.75rem;
  font-size: 0.92rem;
  line-height: 1.55;
  max-width: 42rem;
}

.map-hero-source {
  opacity: 0.92;
}

.map-body {
  padding: 2.5rem 0 4rem;
  background: var(--color-white);
}

.map-layout {
  display: grid;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .map-layout {
    grid-template-columns: 200px minmax(0, 1fr);
    align-items: start;
  }
}

.map-toc {
  position: sticky;
  top: 5.5rem;
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-mint) 20%, var(--color-cream));
  border: 2px solid color-mix(in srgb, var(--color-sage) 35%, transparent);
}

.map-toc-title {
  font-family: var(--font-cartoon);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-sage-dark);
  margin-bottom: 0.6rem;
}

.map-toc ol {
  list-style: none;
  display: grid;
  gap: 0.35rem;
}

.map-toc a {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-ink-muted);
  text-decoration: none;
}

.map-toc a:hover {
  color: var(--color-sage-dark);
}

.map-section {
  margin-bottom: 3rem;
  scroll-margin-top: 5.5rem;
}

.map-section > p {
  color: var(--color-ink-muted);
  max-width: 46rem;
  margin-bottom: 1rem;
}

.map-section h2 {
  font-family: var(--font-cartoon);
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  margin-bottom: 0.75rem;
}

.map-section h3 {
  font-size: 1.1rem;
  margin-bottom: 0.35rem;
}

.map-section h4 {
  font-size: 0.95rem;
  margin: 0.85rem 0 0.4rem;
}

.map-fact-list {
  margin-top: 1rem;
  padding-left: 1.25rem;
  max-width: 46rem;
  color: var(--color-ink-muted);
}

.map-fact-list li {
  margin-bottom: 0.5rem;
}

.map-image-wrap {
  margin: 1.25rem 0 0;
  padding: 1rem;
  background: var(--color-cream);
  border-radius: var(--radius-lg);
  border: 3px solid var(--color-sage);
  box-shadow: var(--shadow-card);
}

.map-image-wrap img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-md);
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: color-mix(in srgb, var(--color-mint) 25%, var(--color-white));
}

.map-image-wrap figcaption {
  margin-top: 0.75rem;
  font-size: 0.82rem;
  color: var(--color-ink-muted);
  text-align: center;
  font-style: italic;
}

.map-poi-list {
  list-style: none;
  display: grid;
  gap: 1rem;
  margin-top: 1.25rem;
}

.map-poi-item {
  scroll-margin-top: 6rem;
}

.map-poi-item article {
  padding: 1.15rem 1.25rem;
  border-radius: var(--radius-md);
  background: var(--color-cream);
  border: 2px solid color-mix(in srgb, var(--color-mint) 50%, transparent);
}

.map-poi-head {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin-bottom: 0.65rem;
}

.map-poi-icon {
  font-size: 1.75rem;
  line-height: 1;
}

.map-poi-head h3 {
  font-family: var(--font-cartoon);
  font-size: 1.15rem;
  margin: 0;
}

.map-poi-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
  font-size: 0.8rem;
}

.map-poi-type {
  color: var(--color-ink-muted);
  font-weight: 600;
}

.map-poi-availability {
  font-family: var(--font-cartoon);
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}

.map-poi-availability--dayOne {
  background: var(--color-sage);
  color: var(--color-white);
}

.map-poi-availability--duringEa {
  background: var(--color-coral);
  color: var(--color-white);
}

.map-poi-item ul {
  margin: 0.35rem 0 0.75rem;
  padding-left: 1.2rem;
  color: var(--color-ink-muted);
  font-size: 0.92rem;
}

.map-poi-ref {
  font-size: 0.82rem;
  color: var(--color-ink-muted);
  margin-top: 0.5rem;
}

.map-phase-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .map-phase-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.map-phase-card {
  padding: 1.15rem 1.25rem;
  border-radius: var(--radius-md);
  border: 2px solid transparent;
}

.map-phase-card--day {
  background: color-mix(in srgb, var(--color-sage) 10%, var(--color-white));
  border-color: color-mix(in srgb, var(--color-sage) 35%, transparent);
}

.map-phase-card--later {
  background: color-mix(in srgb, var(--color-coral) 8%, var(--color-white));
  border-color: color-mix(in srgb, var(--color-coral) 30%, transparent);
}

.map-phase-card h3 {
  font-family: var(--font-cartoon);
  font-size: 0.95rem;
  margin-bottom: 0.65rem;
}

.map-phase-card ul {
  padding-left: 1.15rem;
  font-size: 0.92rem;
  color: var(--color-ink-muted);
}

.map-phase-card li {
  margin-bottom: 0.35rem;
}

.map-checklist {
  margin: 1rem 0;
  padding-left: 1.35rem;
  max-width: 40rem;
  color: var(--color-ink-muted);
}

.map-checklist li {
  margin-bottom: 0.55rem;
}

.map-aside {
  font-size: 0.92rem;
  color: var(--color-ink-muted);
}

.map-aside a {
  color: var(--color-sage-dark);
  font-weight: 600;
}

.map-faq-list {
  margin-top: 1rem;
}

.map-faq-item {
  padding: 1rem 0;
  border-bottom: 1px dashed color-mix(in srgb, var(--color-mint) 60%, transparent);
}

.map-faq-item:last-child {
  border-bottom: none;
}

.map-faq-item dt {
  font-family: var(--font-cartoon);
  font-weight: 800;
  font-size: 1rem;
  margin-bottom: 0.35rem;
}

.map-faq-item dd {
  color: var(--color-ink-muted);
  font-size: 0.95rem;
  margin: 0;
}

.map-related-grid {
  list-style: none;
  display: grid;
  gap: 0.75rem;
  margin: 1rem 0;
}

@media (min-width: 768px) {
  .map-related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.map-related-card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  text-decoration: none;
  color: inherit;
  background: var(--color-cream);
  border: 2px solid color-mix(in srgb, var(--color-peach) 50%, transparent);
  transition: transform 0.15s ease;
}

.map-related-card:hover {
  transform: translateY(-3px);
  border-color: var(--color-sage);
}

.map-related-card strong {
  font-family: var(--font-cartoon);
  color: var(--color-sage-dark);
}

.map-related-card span {
  font-size: 0.88rem;
  color: var(--color-ink-muted);
}

.map-disclaimer {
  font-size: 0.85rem;
  color: var(--color-ink-muted);
  max-width: 42rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px dashed color-mix(in srgb, var(--color-mint) 50%, transparent);
}
</style>
