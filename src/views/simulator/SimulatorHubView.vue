<template>
  <SimulatorLayout
    title="Paralives Simulator"
    lead="Free planning tools for Steam Early Access — check feature availability, plan Paramaker stats and colors, and roll session goals before you launch Paralives."
    accent="hub"
    :show-hub-link="false"
    hero-image="/images/about-02.webp"
  >

  <!-- 广告：GPT slot 1 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-simhub-1" class="gpt-banner-ad"></div>
    </aside>
  
    <div class="sim-hub-grid">
      <a
        v-for="card in cards"
        :key="card.to"
        :href="card.to"
        class="sim-hub-card"
        :class="`sim-hub-card--${card.accent}`"
      >
        <span class="sim-hub-card-icon" aria-hidden="true">{{ card.icon }}</span>
        <h2>{{ card.title }}</h2>
        <p>{{ card.desc }}</p>
        <span class="sim-hub-card-cta">Open tool →</span>
      </a>
    </div>

    <!-- 广告：GPT slot 2 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-simhub-2" class="gpt-banner-ad"></div>
    </aside>

    <section class="sim-seo" aria-labelledby="sim-seo-hub">
      <h2 id="sim-seo-hub">What is the Paralives Simulator?</h2>
      <p>
        The <strong>Paralives Simulator</strong> is a set of free browser tools on Paralives Wiki that
        help you plan a Steam Early Access save <em>before</em> you launch the game. You can check
        which features ship on day one, sketch a Paramaker personality spread, preview Parafolk
        colors, and roll a short play session goal — then copy notes into your own checklist or
        Paramaker session.
      </p>
      <p>
        These tools do <strong>not</strong> connect to Paralives, read save files, or replace
        in-game Paramaker or Build Mode. They are planning aids built from public development lists
        and reported creator rules. Always confirm mechanics in the game client after each patch.
      </p>

      <h3>What each tool does</h3>
      <ul>
        <li>
          <a href="/simulator/feature-filter"><strong>Feature filter</strong></a>
          — tick wishes (pets, pools, weather, mod tools) and see whether they are listed for day
          one or during Early Access.
        </li>
        <li>
          <a href="/simulator/trait-points"><strong>Trait points</strong></a>
          — allocate seven personality points across Physique, Mind, Creativity, and Charisma using
          reported Paramaker limits.
        </li>
        <li>
          <a href="/simulator/color-palette"><strong>Color studio</strong></a>
          — pick hex colors for skin, hair, and outfit zones on a preview figure, then copy codes
          into Paramaker’s color wheel.
        </li>
        <li>
          <a href="/simulator/session-roll"><strong>Session roll</strong></a>
          — random short challenges based on official day-one Live, Build, and Paramaker mechanics.
        </li>
      </ul>

      <h3>How to use the simulator (step by step)</h3>
      <ol>
        <li>
          Read our <a href="/updates">Updates &amp; roadmap</a> page so you know
          what ships on <time datetime="2026-05-25">May 25, 2026</time> versus later in EA.
        </li>
        <li>
          Run the <strong>feature filter</strong> with your must-have list before you buy or
          pre-order on Steam.
        </li>
        <li>
          Plan your first household in <strong>trait points</strong> and <strong>color studio</strong>,
          then open <a href="/start">Start Here</a> for a first-hour walkthrough.
        </li>
        <li>
          On launch night, use <strong>session roll</strong> if you want a focused goal instead of
          bouncing between all three modes.
        </li>
      </ol>

      <h3>Who is this for?</h3>
      <p>
        New players deciding whether Early Access fits their expectations, returning life-sim fans
        comparing Paralives to other games, and storytellers who like to plan builds and personalities
        on paper first. Pair the simulator with our
        <a href="/wiki">Paralives Wiki</a> for talents, emotions, and careers.
      </p>

      <h3>Frequently asked questions</h3>
      <dl class="sim-seo-faq">
        <dt>Does the Paralives Simulator import into my save?</dt>
        <dd>
          No. Nothing you set here is sent to the game. Copy summaries or hex codes manually when you
          play.
        </dd>
        <dt>Are feature lists guaranteed accurate?</dt>
        <dd>
          Lists follow Paralives Studio’s public Development page and our
          <a href="/updates">roadmap summary</a>. Dates and scope can change with
          patches — verify on Steam and in-game.
        </dd>
        <dt>Where do I learn the real game rules?</dt>
        <dd>
          Use <a href="/start">Start Here</a>, <a href="/guides">Guides</a>,
          and wiki articles such as
          <a href="/wiki/traits">Stats &amp; Personality</a> after Early Access
          launches.
        </dd>
      </dl>
    </section>

    <!-- 广告：GPT slot 3 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-simhub-3" class="gpt-banner-ad"></div>
    </aside>
  </SimulatorLayout>
</template>

<script setup>
import SimulatorLayout from '../../components/simulator/SimulatorLayout.vue'
import { GPT_SLOTS_SIM_HUB } from '@/config/gptPageSlots'
import { useGptAds } from '@/utils/gptAds'

useGptAds(GPT_SLOTS_SIM_HUB)

const cards = [
  {
    to: '/simulator/feature-filter',
    accent: 'filter',
    icon: '◎',
    title: 'Feature filter',
    desc: 'Pick wishes and see whether they are day-one Early Access or planned during EA.',
  },
  {
    to: '/simulator/trait-points',
    accent: 'traits',
    icon: '★',
    title: 'Trait points',
    desc: 'Spread 7 personality points across Physique, Mind, Creativity, and Charisma.',
  },
  {
    to: '/simulator/color-palette',
    accent: 'palette',
    icon: '◐',
    title: 'Color studio',
    desc: 'Paint a preview Parafolk — skin, hair, outfit — then copy hex codes for Paramaker.',
  },
  {
    to: '/simulator/session-roll',
    accent: 'roll',
    icon: '↻',
    title: 'Session roll',
    desc: 'Roll a short play goal built from official day-one mechanics only.',
  },
]
</script>
