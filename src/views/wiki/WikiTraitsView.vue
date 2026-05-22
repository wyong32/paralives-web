<template>
  <WikiCategoryShell
    title="Paralives Stats & Personality"
    lead="Seven Paramaker points, lifestyles, social perks, and how personality grows after you start playing."
  >
    <div class="wiki-prose">
      <h2>Personality is more than one menu</h2>
      <p>
        Paralives spreads personality across several Paramaker picks: stats, vibe, talent, social perk, and
        lifestyles. The official day-one list calls this bundle “personality traits” — it is not a single
        trait picker like older life sims.
      </p>

      <h2>Stats point system</h2>
      <p>
        Adult Parafolks use seven points across four stats — Physique, Mind, Creativity, and Charisma — with up
        to three points in each (Gameplay Overview, February 2024). Other life stages may use different budgets
        when they are supported in Paramaker.
      </p>
      <p>
        Stats influence skill speed, wants, career performance, and general strengths. Spread points to match
        the story you want before locking vibe and talent.
      </p>

      <h2>Lifestyles</h2>
      <p>Optional tags that steer autonomy. Examples from previews:</p>
      <ul>
        <li><strong>Vegetarian</strong> — dietary preference on or off.</li>
        <li><strong>Cleaning habits</strong> — Neat, Normal, or Dirty.</li>
        <li><strong>Sleep schedule</strong> — Early Bird, Normal, or Night Owl.</li>
      </ul>
      <p>
        Night Owl shifts when hunger and sleep needs appear, helping roommates stay on similar rhythms. Stats and
        lifestyles can add extra cartridges to certain need bars.
      </p>

      <h2>Personality points in Live Mode</h2>
      <p>
        Completing wants and longer goals earns personality points. Spend them to evolve your vibe, upgrade
        talents, or unlock extra social perks — personality can grow across a save.
      </p>

      <h2>What children do not inherit</h2>
      <p>
        Stats, vibes, talents, social perks, and lifestyles are player choices — not passed down genetically.
        See <RouterLink to="/wiki/parafolks">Parafolks &amp; genetics</RouterLink> for inheritable visual traits.
      </p>

      <div class="wiki-callout">
        More personality options are planned during Early Access. Mods can add custom traits once Workshop tools
        are live — see <RouterLink to="/wiki/modding">modding</RouterLink>.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'
</script>
