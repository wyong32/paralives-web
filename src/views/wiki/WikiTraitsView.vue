<template>
  <WikiCategoryShell
    title="Paralives Stats & Personality"
    lead="Seven points, four stats, optional lifestyles, one social perk — plus room to grow after you start playing."
  >
    <div class="wiki-prose">
      <h2>Personality is a bundle, not one list</h2>
      <p>
        Older life sims often give you a grab bag of traits. Paralives splits personality across
        <strong>stats</strong>, a <strong>vibe</strong>, a <strong>talent</strong>, a
        <strong>social perk</strong>, and optional <strong>lifestyles</strong>. The Early Access feature sheet
        calls the whole package “personality traits,” which confuses people who expect a single menu — it is
        several menus that work together.
      </p>
      <p>
        None of that is frozen on day one. Finish
        <RouterLink to="/wiki/needs-wants">wants</RouterLink> and
        <RouterLink to="/wiki/needs-wants">goals</RouterLink> and you bank personality points to evolve vibes,
        upgrade talents, or pick up extra social perks mid-save.
      </p>

      <h2>Stats — seven points, four buckets</h2>
      <p>
        Adults in previews get <strong>seven points</strong> to spread across Physique, Mind, Creativity, and
        Charisma. Each stat takes zero to three points (default is often one in each). Teens and other stages may
        get a different budget when Paramaker supports them fully.
      </p>
      <p>
        Stats nudge skill speed, which wants the game suggests, and sometimes job applications when skills are
        thin. Spread points for the story — charisma-heavy for social legacies, mind-heavy for desk careers — then
        pick vibe and talent to match.
      </p>
    </div>

    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Stat</th>
          <th scope="col">What it shapes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="s in statRows" :key="s.name">
          <th scope="row">{{ s.name }}</th>
          <td>{{ s.desc }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <h2>Lifestyles — autopilot flavor</h2>
      <p>
        Lifestyles are optional tags that steer what your Para does when you are not clicking. Mix them: vegetarian
        night owl is valid. They live in Paramaker next to stats.
      </p>
    </div>

    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Lifestyle</th>
          <th scope="col">Choices</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="l in lifestyles" :key="l.name">
          <th scope="row">{{ l.name }}</th>
          <td>{{ l.options }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <p>
        <strong>Night Owl</strong> shifts when hunger and sleep needs fire, which helps roommates eat and crash at
        similar times. Neat vs Dirty cleaning habits change how fast mess bothers them. Vegetarian is a simple on/off
        — autonomy will respect it when meals are available.
      </p>
      <p>
        Some lifestyles and high stats add extra cartridges to specific need bars, so two Parafolks in the same house
        can feel different even with the same furniture.
      </p>

      <h2>Not passed to kids</h2>
      <p>
        Stats, vibes, talents, social perks, and lifestyles stay with the player’s choices. Genetics only handles
        looks — see <RouterLink to="/wiki/parafolks">Parafolks &amp; genetics</RouterLink> for what actually
        carries to the next generation.
      </p>

      <div class="wiki-callout">
        More personality options are expected during Early Access. Trait mods land once Workshop tools are stable —
        head to <RouterLink to="/wiki/modding">modding</RouterLink> before stacking custom packs on a legacy save.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const statRows = [
  {
    name: 'Physique',
    desc: 'Strength, agility, health. Zero points is allowed — not everyone is athletic.',
  },
  {
    name: 'Mind',
    desc: 'Logic, problem solving, math-y tasks. Helps analytical jobs and focused hobbies.',
  },
  {
    name: 'Creativity',
    desc: 'Artistic bent. Pairs with creative skills and decor-heavy play.',
  },
  {
    name: 'Charisma',
    desc: 'Communication and leadership. Social careers and Together Card success lean here.',
  },
]

const lifestyles = [
  { name: 'Vegetarian', options: 'On or off' },
  { name: 'Cleaning habits', options: 'Neat · Normal · Dirty' },
  { name: 'Sleep schedule', options: 'Early Bird · Normal · Night Owl' },
]
</script>
