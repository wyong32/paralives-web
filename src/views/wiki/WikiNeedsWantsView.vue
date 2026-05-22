<template>
  <WikiCategoryShell
    title="Paralives Needs & Wants"
    lead="Six wellbeing bars, optional daily wishes from emotions, and how they differ from long-term goals."
  >
    <div class="wiki-prose">
      <h2>Two systems in the thought panel</h2>
      <p>
        Needs and wants both appear in a Parafolk’s thoughts, but they behave differently. Needs are about
        wellbeing with real consequences if ignored. Wants are optional short goals you choose from
        <RouterLink to="/wiki/emotions">emotion cards</RouterLink>. Goals are longer missions — only wants are
        player-picked from moods.
      </p>

      <h2>Needs vs wants vs goals</h2>
      <table class="wiki-compare-table">
        <thead>
          <tr>
            <th></th>
            <th>Needs</th>
            <th>Wants</th>
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Skip penalty?</th>
            <td>Yes — mood and performance suffer</td>
            <td>No punishment for ignoring</td>
            <td>Varies by goal</td>
          </tr>
          <tr>
            <th>How you choose</th>
            <td>Automatic bars</td>
            <td>From emotion cards</td>
            <td>Long-term track</td>
          </tr>
          <tr>
            <th>Display</th>
            <td>Cartridge bars (10 default)</td>
            <td>Cards</td>
            <td>Separate UI</td>
          </tr>
          <tr>
            <th>Reset timing</th>
            <td>Continuous drain</td>
            <td>When Para sleeps</td>
            <td>Per goal rules</td>
          </tr>
        </tbody>
      </table>

      <h2>Reading need bars</h2>
      <p>
        Needs live in the Thoughts tab. Each bar uses cartridges — green means fine, yellow is pressing, red is
        urgent. Refill with the right objects: fridge for hunger, bed for sleep, toilets for bathroom, showers for
        hygiene, hobbies and outings for fun, solo time for me time.
      </p>

      <h2>Context-sensitive wants</h2>
      <p>
        Suggested wants weigh location, nearby Parafolks, objects, recent relationships, personality, and current
        emotions. Change the scene if you want different options — a kitchen visit after cooking skill practice
        may surface food-related wishes.
      </p>
      <p>
        Finishing wants earns personality points for vibe evolutions, talent upgrades, and extra perks.
      </p>

      <h2>Personality and schedules</h2>
      <p>
        <RouterLink to="/wiki/vibes">Vibes</RouterLink>, stats, and lifestyles tweak timing — Jesters care more
        about fun, Night Owls shift sleep hunger, and some lifestyles add cartridges to specific bars.
      </p>

      <h2>Town NPCs at Early Access launch</h2>
      <p>
        Parafolks outside your household do not simulate full need bars for performance. They may still visit
        toilets or “eat” as flavor, but without the same urgency as your active household. Plan town outings for
        story, not for expecting NPCs to autonomously cook full meals.
      </p>
    </div>

    <h2 class="wiki-section-heading">The six known needs</h2>
    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Icon</th>
          <th scope="col">Need</th>
          <th scope="col">What players should know</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in needs" :key="n.name">
          <td>
            <img
              class="wiki-table-icon"
              :src="`/images/wiki/needs/${n.icon}`"
              :alt="`${n.name} need icon`"
              width="40"
              height="40"
              loading="lazy"
            />
          </td>
          <th scope="row">{{ n.name }}</th>
          <td>{{ n.desc }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-callout">
      Early builds once showed needs and wants as similar sentences; the team later split them into bars vs cards
      after community feedback — easier to scan at a glance.
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const needs = [
  {
    name: 'Hunger',
    icon: 'Need-Hunger.png',
    desc: 'Empty means starving — use the fridge, cook, or eat out. Schedules can mimic regular mealtimes.',
  },
  {
    name: 'Sleep',
    icon: 'Need-Sleep.png',
    desc: 'Empty means exhausted — beds and sleep routines matter. Night Owl lifestyles shift timing.',
  },
  {
    name: 'Bathroom',
    icon: 'Need-Bathroom.png',
    desc: 'Use toilets on the lot or in town venues when the bar runs low.',
  },
  {
    name: 'Hygiene',
    icon: 'Need-Hygiene.png',
    desc: 'Drains through the day; exercise and cleaning speed it up. Showers restore it quickly.',
  },
  {
    name: 'Fun',
    icon: 'Need-Fun.png',
    desc: 'Hobbies, social play, and breaks from long tasks. Jesters feel boredom sooner.',
  },
  {
    name: 'Me Time',
    icon: 'Need-MeTime.png',
    desc: 'Solo recharge — important for some vibes and the “good at being alone” social perk.',
  },
]
</script>
