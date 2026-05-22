<template>
  <SimulatorLayout
    title="Personality point allocator"
    lead="Plan a 7-point spread across four categories from public Paramaker previews: 7 total, at least 1 per category, up to 3 each. Confirm rules in-game after Early Access launch."
    accent="traits"
  >
    <section class="sim-console" aria-labelledby="trait-console-title">
      <header class="sim-console-head">
        <div>
          <h2 id="trait-console-title">Trait spread</h2>
          <p>Use presets or fine-tune, then copy your plan into Paramaker notes.</p>
        </div>
        <div class="sim-btn-row">
          <button
            v-for="preset in presets"
            :key="preset.name"
            type="button"
            class="sim-btn"
            @click="applyPreset(preset.values)"
          >
            {{ preset.name }}
          </button>
        </div>
      </header>

      <div class="sim-console-body">
        <ul class="sim-trait-grid">
          <li v-for="stat in traitStats" :key="stat.key">
            <div class="sim-trait-row">
              <span class="sim-trait-name">{{ stat.label }}</span>
              <div
                class="sim-trait-bar"
                role="progressbar"
                :aria-valuenow="traits[stat.key]"
                aria-valuemin="1"
                aria-valuemax="3"
              >
                <div
                  class="sim-trait-fill"
                  :style="{ width: `${(traits[stat.key] / MAX_TRAIT) * 100}%` }"
                />
              </div>
              <div class="sim-trait-controls">
                <button
                  type="button"
                  class="sim-trait-btn"
                  :disabled="traits[stat.key] <= MIN_TRAIT"
                  :aria-label="`Decrease ${stat.label}`"
                  @click="adjustTrait(stat.key, -1)"
                >
                  −
                </button>
                <span class="sim-trait-value">{{ traits[stat.key] }}</span>
                <button
                  type="button"
                  class="sim-trait-btn"
                  :disabled="traits[stat.key] >= MAX_TRAIT || traitTotal >= TOTAL_POINTS"
                  :aria-label="`Increase ${stat.label}`"
                  @click="adjustTrait(stat.key, 1)"
                >
                  +
                </button>
              </div>
            </div>
          </li>
        </ul>

        <p
          class="sim-trait-total"
          :class="{ 'sim-trait-total--ok': traitValid, 'sim-trait-total--bad': !traitValid }"
        >
          Total: {{ traitTotal }} / {{ TOTAL_POINTS }}
          <span v-if="traitValid"> — valid spread</span>
          <span v-else> — adjust points to match rules</span>
        </p>

        <div class="sim-output">
          <h3>Your plan</h3>
          <pre>{{ traitSummary }}</pre>
          <div class="sim-btn-row">
            <button type="button" class="sim-btn sim-btn--primary" @click="copyText(traitSummary)">
              {{ copied ? 'Copied!' : 'Copy summary' }}
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="sim-seo" aria-labelledby="sim-seo-traits">
      <h2 id="sim-seo-traits">About the personality point planner</h2>
      <p>
        The <strong>personality point allocator</strong> helps you plan a Paramaker stat spread
        before Early Access: <strong>seven points total</strong>, at least one in each of Physique,
        Mind, Creativity, and Charisma, and up to three in any single category. Rules follow public
        Paramaker previews; confirm exact limits in-game after launch.
      </p>

      <h3>How to use the trait planner</h3>
      <ol>
        <li>
          Choose a <strong>preset</strong> (Balanced, Creative, Social, Athletic) or adjust each bar
          with + and −.
        </li>
        <li>
          Watch <strong>Total: 7 / 7</strong> — the spread is valid only when the total equals seven
          and each stat stays between 1 and 3.
        </li>
        <li>
          Copy the <strong>Your plan</strong> summary and paste it into notes or a Paramaker session
          so you do not forget your build.
        </li>
        <li>
          Read <RouterLink to="/wiki/traits">Stats &amp; Personality</RouterLink> for how stats link
          to lifestyles and social perks in Live Mode.
        </li>
      </ol>

      <h3>What this is not</h3>
      <p>
        This page does not create a Parafolk file or connect to Steam. It is a math helper for
        reported creation rules. If the game changes point caps at launch, update your plan using
        in-game Paramaker.
      </p>
    </section>
  </SimulatorLayout>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import SimulatorLayout from '../../components/simulator/SimulatorLayout.vue'
import { useSimulatorCopy } from '../../composables/useSimulatorCopy.js'

const TOTAL_POINTS = 7
const MIN_TRAIT = 1
const MAX_TRAIT = 3

const traitStats = [
  { key: 'physique', label: 'Physique' },
  { key: 'mind', label: 'Mind' },
  { key: 'creativity', label: 'Creativity' },
  { key: 'charisma', label: 'Charisma' },
]

const traits = reactive({
  physique: 2,
  mind: 2,
  creativity: 2,
  charisma: 1,
})

const presets = [
  { name: 'Balanced', values: { physique: 2, mind: 2, creativity: 2, charisma: 1 } },
  { name: 'Social', values: { physique: 1, mind: 1, creativity: 2, charisma: 3 } },
  { name: 'Bookworm', values: { physique: 1, mind: 3, creativity: 2, charisma: 1 } },
  { name: 'Athlete', values: { physique: 3, mind: 1, creativity: 1, charisma: 2 } },
]

const { copied, copyText } = useSimulatorCopy()

const traitTotal = computed(() =>
  traitStats.reduce((sum, s) => sum + traits[s.key], 0),
)

const traitValid = computed(() => {
  if (traitTotal.value !== TOTAL_POINTS) return false
  return traitStats.every((s) => traits[s.key] >= MIN_TRAIT && traits[s.key] <= MAX_TRAIT)
})

function adjustTrait(key, delta) {
  const next = traits[key] + delta
  if (next < MIN_TRAIT || next > MAX_TRAIT) return
  if (delta > 0 && traitTotal.value >= TOTAL_POINTS) return
  traits[key] = next
}

function applyPreset(values) {
  for (const stat of traitStats) {
    traits[stat.key] = values[stat.key]
  }
}

const traitSummary = computed(() => {
  const lines = traitStats.map((s) => `${s.label}: ${traits[s.key]}`)
  lines.push(`Total: ${traitTotal.value}/${TOTAL_POINTS}${traitValid.value ? ' (valid)' : ' (invalid)'}`)
  lines.push('Verify point rules in Paramaker after EA launch.')
  return lines.join('\n')
})
</script>
