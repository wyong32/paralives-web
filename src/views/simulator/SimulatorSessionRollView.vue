<template>
  <SimulatorLayout
    title="Session challenge roll"
    lead="Random short goals built only from mechanics on the official day-one Early Access lists. Use for inspiration — your save may differ after patches."
    accent="roll"
  >
    <section class="sim-console" aria-labelledby="roll-console-title">
      <header class="sim-console-head">
        <div>
          <h2 id="roll-console-title">Roll a challenge</h2>
          <p>Pick a mode focus, then roll. Challenges never reference during-EA-only features.</p>
        </div>
        <span
          class="sim-roll-dice"
          :class="{ 'is-rolling': isRolling }"
          aria-hidden="true"
        >🎲</span>
      </header>

      <div class="sim-console-body">
        <div class="sim-btn-row" style="align-items: center; gap: 1rem">
          <label for="roll-focus" class="sim-trait-name">Focus</label>
          <select id="roll-focus" v-model="rollFocus" class="sim-palette-hex" style="max-width: 14rem">
            <option value="any">Any mode</option>
            <option value="build">Build Mode</option>
            <option value="live">Live Mode</option>
            <option value="paramaker">Paramaker</option>
          </select>
          <button type="button" class="sim-btn sim-btn--primary" @click="rollChallenge">
            Roll challenge
          </button>
        </div>

        <blockquote v-if="currentChallenge" class="sim-roll-result">
          <p>
            <span v-if="currentTag" class="sim-badge sim-badge--dayOne">{{ currentTag }}</span>
            {{ currentChallenge }}
          </p>
        </blockquote>

        <div v-if="history.length" class="sim-roll-history">
          <p>Recent rolls</p>
          <ul>
            <li v-for="(entry, i) in history" :key="i">{{ entry }}</li>
          </ul>
        </div>

      </div>
    </section>
    <section class="sim-seo" aria-labelledby="sim-seo-roll">
      <h2 id="sim-seo-roll">About the session challenge roll</h2>
      <p>
        The <strong>session challenge roll</strong> picks a random, short play goal using only
        mechanics from the official <strong>day-one Early Access</strong> lists. Choose a focus —
        Build Mode, Live Mode, Paramaker, or any mode — then roll for inspiration when you are not
        sure what to do in your next session.
      </p>

      <h3>How to use session roll</h3>
      <ol>
        <li>
          Set <strong>Focus</strong> to Build, Live, Paramaker, or Any mode depending on what you
          want to practice tonight.
        </li>
        <li>
          Click <strong>Roll challenge</strong> and read the goal (for example one curved wall plus a
          split level, or visit one town venue in Live Mode).
        </li>
        <li>
          Use <strong>Recent rolls</strong> to revisit earlier ideas without re-rolling immediately.
        </li>
        <li>
          Challenges never reference during-EA-only systems (pets, full weather, town editor, etc.).
        </li>
      </ol>

      <h3>Good uses for rolled challenges</h3>
      <ul>
        <li>First evening in Early Access when the full sandbox feels overwhelming.</li>
        <li>Streaming or screenshot sessions that need a clear mini-objective.</li>
        <li>Learning one mode deeply — Build-only night or Live-only town tour.</li>
      </ul>
      <p>
        For a full walkthrough instead of a random goal, start with
        <RouterLink to="/start">Paralives Start Guide</RouterLink> or
        <RouterLink to="/guides">Paralives Guides</RouterLink>.
      </p>
    </section>
  </SimulatorLayout>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SimulatorLayout from '../../components/simulator/SimulatorLayout.vue'

/** Session challenges — mechanics referenced from official day-one EA lists only */
const sessionChallenges = [
  {
    focus: 'build',
    text: 'Build a starter home using one curved wall and one split-level platform (day-one Build tools).',
    tag: 'Build',
  },
  {
    focus: 'build',
    text: 'Furnish a lot using only the color wheel — pick three hex colors and stick to them.',
    tag: 'Build',
  },
  {
    focus: 'build',
    text: 'Place stairs and a roof on a two-floor shell before decorating interiors.',
    tag: 'Build',
  },
  {
    focus: 'paramaker',
    text: 'Create one Parafolk with layered tops (undershirt + jacket) and asymmetry on one detail.',
    tag: 'Paramaker',
  },
  {
    focus: 'paramaker',
    text: 'Save two complete outfits (Casual and Work categories shown in public previews).',
    tag: 'Paramaker',
  },
  {
    focus: 'paramaker',
    text: 'Plan a legacy save: note genetics choices you want to pass to children later.',
    tag: 'Paramaker',
  },
  {
    focus: 'live',
    text: 'Move in and complete one Want while keeping needs stable.',
    tag: 'Live',
  },
  {
    focus: 'live',
    text: 'Send a Parafolk to work (rabbit hole) and unlock one career perk.',
    tag: 'Live',
  },
  {
    focus: 'live',
    text: 'Visit one shop or the museum and start a collection entry.',
    tag: 'Live',
  },
  {
    focus: 'live',
    text: 'Use multiselect so two Parafolks cook or socialize together.',
    tag: 'Live',
  },
  {
    focus: 'live',
    text: 'Check household bills after one in-game week (electricity / lot costs in dev previews).',
    tag: 'Live',
  },
  {
    focus: 'any',
    text: 'Full loop: Paramaker → small build → move in → one town visit in Live Mode.',
    tag: 'Mixed',
  },
  {
    focus: 'any',
    text: 'Split the session: half Build Mode practice, half Live Mode with one goal.',
    tag: 'Mixed',
  },
]

const rollFocus = ref('any')
const currentChallenge = ref('')
const currentTag = ref('')
const history = ref([])
const isRolling = ref(false)

function rollChallenge() {
  isRolling.value = true
  setTimeout(() => {
    isRolling.value = false
  }, 500)

  const pool = sessionChallenges.filter(
    (c) => rollFocus.value === 'any' || c.focus === rollFocus.value,
  )
  const pick = pool[Math.floor(Math.random() * pool.length)]
  currentChallenge.value = pick.text
  currentTag.value = pick.tag
  history.value = [pick.text, ...history.value].slice(0, 5)
}
</script>
