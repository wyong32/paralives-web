<template>
  <WikiCategoryShell
    title="Paralives Talents"
    lead="Pick one specialty when you create a Para. It nudges certain skills ahead — and can grow stronger if you keep playing their story."
  >
    <div class="wiki-prose">
      <h2>What you’re actually picking</h2>
      <p>
        A talent is not a hard lock. Every Parafolk can still learn every
        <RouterLink to="/wiki/skills">skill</RouterLink> in the game. What the talent does is hand you perks so
        the activities that match your pick feel smoother — faster bars, better outcomes, or weird rules if you
        chose the joke option.
      </p>
      <p>
        You choose <strong>one talent</strong> in Paramaker. That’s it for creation. Kids do
        <strong>not</strong> inherit Mom’s Music or Dad’s Food talent; genetics handle looks, not personality.
      </p>

      <h2>It can change over a long save</h2>
      <p>
        Knock out <RouterLink to="/wiki/needs-wants">wants</RouterLink> and longer
        <RouterLink to="/wiki/needs-wants">goals</RouterLink> and you earn personality points — the same currency
        you use for <RouterLink to="/wiki/vibes">vibe</RouterLink> evolutions. Pour points back into your talent to
        upgrade it. We have not seen many talent evolution branches yet (unlike Serious → Studious), but the system
        is built for growth, not a frozen creation screen.
      </p>

      <h2>Pick for how you want to play</h2>
      <p>
        Match talent to the skills you plan to lean on first week. Food talent + cooking at home is obvious for
        family saves. Music talent pays off if you want instruments and town gigs later. Technology helps software
        and creative desk jobs. Fitness is great for active households — just remember hygiene tanks faster after
        workouts.
      </p>
      <p>
        Jack-of-All-Trades suits experimental saves where everyone tries a bit of everything. Good at Nothing is
        for players who want the game to push back — not a typo, and not the same as the social perks that start
        with “Good at…”.
      </p>
    </div>

    <table class="wiki-data-table wiki-talent-table">
      <thead>
        <tr>
          <th scope="col">Icon</th>
          <th scope="col">Talent</th>
          <th scope="col">What players usually build around</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in talents" :key="t.slug">
          <td>
            <img
              class="wiki-table-icon"
              :src="`/images/wiki/talents/${t.icon}`"
              :alt="`${t.name} talent icon`"
              width="40"
              height="40"
              loading="lazy"
            />
          </td>
          <th scope="row">{{ t.name }}</th>
          <td>{{ t.desc }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <h2>Where talents sit in Paramaker</h2>
      <p>
        Talents are one slice of the personality bundle: seven
        <RouterLink to="/wiki/traits">stat points</RouterLink>, one
        <RouterLink to="/wiki/vibes">vibe</RouterLink>, one
        <RouterLink to="/wiki/relationships">social perk</RouterLink>, plus optional lifestyles. The official Early
        Access sheet lumps these together as “personality traits,” which is why guides sometimes sound like they
        mean a single trait menu — they don’t.
      </p>

      <h2>Mods</h2>
      <p>
        Workshop packs can add custom talents once tools settle in. If you run trait mods, re-check saves after
        each patch — broken personality data can freeze wants or job rolls. More in our
        <RouterLink to="/wiki/modding">modding</RouterLink> page.
      </p>

      <div class="wiki-callout">
        Seven talents have shown up in previews so far. Names and numbers may shift on May 25, 2026 launch day —
        worth a quick look in Paramaker before you commit to a legacy family plan.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const talents = [
  {
    slug: 'art',
    name: 'Art',
    icon: 'Talent-Art.png',
    desc:
      'Painting and other visual creative skills climb faster. Nice for decorators, storytellers, or anyone living in Build Mode.',
  },
  {
    slug: 'music',
    name: 'Music',
    icon: 'Talent-Music.png',
    desc:
      'Instrument skills get a head start. Level guitar first and Music Knowledge makes piano (and the next instrument) less of a grind.',
  },
  {
    slug: 'food',
    name: 'Food',
    icon: 'Talent-Food.png',
    desc:
      'Tied to Cooking and Food Knowledge — home meals, restaurants, and keeping hunger stable on busy days.',
  },
  {
    slug: 'technology',
    name: 'Technology',
    icon: 'Talent-Technology.png',
    desc:
      'Tech hobbies and desk careers. Broad Technology Knowledge can cover gaps when a job wants software skills you have not maxed yet.',
  },
  {
    slug: 'fitness',
    name: 'Fitness',
    icon: 'Talent-Fitness.png',
    desc:
      'Exercise skills level quicker. Trade-off: hygiene drops faster while training — schedule showers.',
  },
  {
    slug: 'jack-of-all-trades',
    name: 'Jack-of-All-Trades',
    icon: 'Talent-JackOfAllTrades.png',
    desc:
      'For Parafolks who bounce between hobbies without committing to one lane early. Slower specialists, flexible days.',
  },
  {
    slug: 'good-at-nothing',
    name: 'Good at Nothing',
    icon: 'Talent-GoodAtNothing.png',
    desc:
      'Odd rules instead of a clean speed boost — meant for challenge runs. Not a social perk; do not mix the names up.',
  },
]
</script>
