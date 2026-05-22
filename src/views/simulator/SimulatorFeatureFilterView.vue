<template>
  <SimulatorLayout
    title="Feature wish filter"
    lead="Select features you care about. Labels match the official Development page — day one vs during Early Access. Cross-check on our Updates page before you buy."
    accent="filter"
  >
    <section class="sim-console" aria-labelledby="filter-console-title">
      <header class="sim-console-head">
        <div>
          <h2 id="filter-console-title">Wish list checker</h2>
          <p>
            Source wording from Paralives Studio’s public lists.
            <RouterLink to="/updates">View full roadmap →</RouterLink>
          </p>
        </div>
        <button type="button" class="sim-btn" @click="selectedFeatures = []">Clear all</button>
      </header>

      <div class="sim-console-body">
        <h3>Popular wishes</h3>
        <ul class="sim-chips">
          <li v-for="item in popularWishes" :key="item.id">
            <label class="sim-chip">
              <input v-model="selectedFeatures" type="checkbox" :value="item.id" />
              <span>{{ item.label }}</span>
            </label>
          </li>
        </ul>

        <details class="sim-details">
          <summary>Browse full official lists by mode</summary>
          <article v-for="mode in eaModes" :key="mode.id" class="sim-mode-block">
            <h4>{{ mode.name }}</h4>
            <p class="sim-note" style="margin-top: 0">{{ mode.tagline }}</p>
            <div class="sim-columns">
              <div>
                <h5>Day one</h5>
                <ul>
                  <li v-for="feat in mode.dayOne" :key="`${mode.id}-d-${feat}`">
                    <label>
                      <input
                        v-model="selectedFeatures"
                        type="checkbox"
                        :value="featureKey(mode.id, feat, 'dayOne')"
                      />
                      {{ feat }}
                    </label>
                  </li>
                </ul>
              </div>
              <div>
                <h5>During EA</h5>
                <ul>
                  <li v-for="feat in mode.duringEa" :key="`${mode.id}-e-${feat}`">
                    <label>
                      <input
                        v-model="selectedFeatures"
                        type="checkbox"
                        :value="featureKey(mode.id, feat, 'duringEa')"
                      />
                      {{ feat }}
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </details>

        <div
          v-if="filterResult"
          class="sim-filter-result"
          :class="`sim-filter-result--${filterResult.tone}`"
        >
          <h3>Result</h3>
          <p>{{ filterResult.summary }}</p>
          <ul>
            <li v-for="row in filterResult.items" :key="row.id">
              <span class="sim-badge" :class="`sim-badge--${row.when}`">{{
                row.when === 'dayOne' ? 'Day one' : 'During EA'
              }}</span>
              <span>{{ row.label }}</span>
              <span class="sim-mode-label">{{ row.mode }}</span>
            </li>
          </ul>
        </div>
        <p v-else class="sim-note">Select at least one feature to see availability.</p>
      </div>
    </section>
    <section class="sim-seo" aria-labelledby="sim-seo-filter">
      <h2 id="sim-seo-filter">About the Paralives feature filter</h2>
      <p>
        The <strong>Paralives feature filter</strong> lets you select mechanics you care about — open
        world town, pets, pools, mod tools, weather, and more — and instantly see whether each item
        is on the official <strong>day one</strong> Early Access list or planned <strong>during
        EA</strong>. It helps you set realistic expectations before purchase and avoid assuming a
        feature exists on launch day.
      </p>

      <h3>How to use the feature filter</h3>
      <ol>
        <li>
          Tick items under <strong>Popular wishes</strong> or expand
          <strong>Browse full official lists by mode</strong> for Live Mode, Build Mode, and
          Paramaker.
        </li>
        <li>
          Read the <strong>Result</strong> panel: summaries show whether everything you picked is day
          one; mixed results mean some items arrive later in Early Access.
        </li>
        <li>
          Cross-check important rows on our <RouterLink to="/updates">Updates</RouterLink> page and
          the Steam store description before you commit to a save concept.
        </li>
        <li>Use <strong>Clear all</strong> to reset and test a different wish list.</li>
      </ol>

      <h3>Why this tool is useful</h3>
      <p>
        Early Access marketing can blur “at launch” and “during EA.” If you mainly want pets,
        gardening, or a family tree UI, this filter shows whether those systems are day-one or
        roadmap — so you can wait, plan a later save, or focus on what is already playable.
      </p>
      <p>
        Source labels match Paralives Studio’s public development lists (same data we use on
        <RouterLink to="/updates">Paralives roadmap</RouterLink>). The filter does not predict patch
        dates for during-EA features.
      </p>
    </section>
  </SimulatorLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import SimulatorLayout from '../../components/simulator/SimulatorLayout.vue'

/** Official Early Access lists — wording from paralives.com/development (same as Updates page) */
const eaModes = [
  {
    id: 'live',
    name: 'Live mode',
    tagline:
      'Manage the lives, the relationships, the careers and the family of your Parafolks',
    dayOne: [
      'Open world town',
      'Day-night cycle',
      'Work (rabbit holes)',
      'Career progression',
      'Personality traits',
      'Emotions',
      'Wants',
      'Skills',
      'Needs',
      'Social interactions',
      'Relationship development',
      'Multiselecting characters and doing anything as a group',
      'Cooking system',
      'House fires',
      'Bills',
      'Having children',
      'Aging and death',
      'Character autonomy',
      'Shops and restaurants',
      'Museum and collections',
      'Modding tools to add and edit the game’s content',
    ],
    duringEa: [
      'Weather and seasons',
      'Calendar',
      'Family tree',
      'Dogs, cats and horses',
      'Cars and bikes',
      'Boats and houseboats',
      'Swimming',
      'Story progression for NPCs',
      'Gardening and fishing',
      'Organizing social events (parties, weddings)',
      'Calling Paras over the phone and chatting online',
      'Tools to edit and create towns',
      'More personality traits, wants, emotions, jobs, etc',
    ],
  },
  {
    id: 'build',
    name: 'Build mode',
    tagline: 'Create a beautiful home for your Parafolks',
    dayOne: [
      'Color wheel for everything',
      'Flexible wall placement tools (curved and at any angle)',
      'Optional grid for wall placement',
      'Split-level platforms',
      'Building multiple floors',
      'Moving existing walls',
      'Object resizing',
      'Stairs and roof placement',
      'Fences',
    ],
    duringEa: [
      'Pools',
      'Advanced roof tools',
      'Advanced stairs tools',
      'Placing windows and doors on curved walls',
      'Basement tools',
      'Lake and pond tools',
      'More furnitures and objects',
    ],
  },
  {
    id: 'paramaker',
    name: 'Paramaker',
    tagline: 'Make your household of Parafolks and design their outfits',
    dayOne: [
      'Color wheel for everything',
      'Height slider',
      'Body and face sliders',
      'Tattoo placement tool',
      'Layering and mixing of tops (undershirt with a jacket)',
      'Asymmetry (for eye color, socks and more)',
      'Genetics System',
      'Creating and managing multiple outfits',
    ],
    duringEa: [
      'Creating pets in the Paramaker',
      'Editing the genetics of a Para with advanced tools',
      'More clothing items, hairstyles and accessories',
    ],
  },
]

const popularWishes = [
  { id: 'w-pets', label: 'Pets', mode: 'Live', feature: 'Dogs, cats and horses', when: 'duringEa' },
  { id: 'w-weather', label: 'Weather & seasons', mode: 'Live', feature: 'Weather and seasons', when: 'duringEa' },
  { id: 'w-cars', label: 'Cars & bikes', mode: 'Live', feature: 'Cars and bikes', when: 'duringEa' },
  { id: 'w-pools', label: 'Pools', mode: 'Build', feature: 'Pools', when: 'duringEa' },
  { id: 'w-swim', label: 'Swimming', mode: 'Live', feature: 'Swimming', when: 'duringEa' },
  { id: 'w-garden', label: 'Gardening & fishing', mode: 'Live', feature: 'Gardening and fishing', when: 'duringEa' },
  { id: 'w-town-edit', label: 'Town editing', mode: 'Live', feature: 'Tools to edit and create towns', when: 'duringEa' },
  { id: 'w-family-tree', label: 'Family tree UI', mode: 'Live', feature: 'Family tree', when: 'duringEa' },
  { id: 'w-pets-maker', label: 'Pets in Paramaker', mode: 'Paramaker', feature: 'Creating pets in the Paramaker', when: 'duringEa' },
  { id: 'w-town-day1', label: 'Open-world town', mode: 'Live', feature: 'Open world town', when: 'dayOne' },
  { id: 'w-build-curved', label: 'Curved walls', mode: 'Build', feature: 'Flexible wall placement tools (curved and at any angle)', when: 'dayOne' },
  { id: 'w-genetics', label: 'Genetics', mode: 'Paramaker', feature: 'Genetics System', when: 'dayOne' },
]

function featureKey(modeId, feat, when) {
  return `${modeId}::${when}::${feat}`
}

function buildFeatureRegistry() {
  const map = new Map()
  for (const w of popularWishes) {
    map.set(w.id, { id: w.id, label: w.feature, mode: w.mode, when: w.when })
  }
  for (const mode of eaModes) {
    for (const feat of mode.dayOne) {
      const id = featureKey(mode.id, feat, 'dayOne')
      map.set(id, { id, label: feat, mode: mode.name, when: 'dayOne' })
    }
    for (const feat of mode.duringEa) {
      const id = featureKey(mode.id, feat, 'duringEa')
      map.set(id, { id, label: feat, mode: mode.name, when: 'duringEa' })
    }
  }
  return map
}

const featureRegistry = computed(() => buildFeatureRegistry())
const selectedFeatures = ref([])

const filterResult = computed(() => {
  if (!selectedFeatures.value.length) return null
  const items = selectedFeatures.value
    .map((id) => featureRegistry.value.get(id))
    .filter(Boolean)
  const duringCount = items.filter((i) => i.when === 'duringEa').length
  const dayCount = items.filter((i) => i.when === 'dayOne').length
  let summary
  let tone = 'ok'
  if (duringCount === 0) {
    summary = 'All selected features are on the official day-one Early Access list.'
  } else if (dayCount === 0) {
    summary =
      'Everything you selected is listed for during Early Access only — not the day-one list. You may want to wait or follow patch notes.'
    tone = 'warn'
  } else {
    summary = `${duringCount} selected feature(s) are during-EA only; ${dayCount} are day-one. Check Updates before you buy if timing matters.`
    tone = 'mixed'
  }
  return { summary, items, tone }
})
</script>
