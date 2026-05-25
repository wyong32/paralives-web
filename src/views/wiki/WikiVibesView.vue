<template>
  <WikiCategoryShell
    title="Paralives Vibes"
    lead="Your Para’s default mood filter — it colors emotions, social moments, skill speed, and even idle poses."
  >
    <div class="wiki-prose">
      <h2>Why vibes matter day to day</h2>
      <p>
        Think of a vibe as temperament, not a cosmetic tag. It nudges which
        <RouterLink to="/wiki/emotions">emotions</RouterLink> show up, which
        <RouterLink to="/wiki/relationships">Together Cards</RouterLink> the game offers, how fast some
        <RouterLink to="/wiki/skills">skills</RouterLink> move, and how relationships develop. When nobody is
        giving orders, your Para’s idle animations still reflect how they feel — useful for reading a household at
        a glance.
      </p>
      <p>
        Creation gives you <strong>one vibe</strong>. Keep playing and personality points from wants and goals can
        add another vibe or evolve the first — Serious Parafolks in previews have branched into Studious or
        Hardworking once they earned enough points.
      </p>

      <h2>Launch roster vs later vibes</h2>
      <p>
        Five vibes are aimed at the May 25, 2026 Early Access launch. Three more (Anxious, Grumpy, Peaceful) were
        pushed to after launch while the team finishes how they interact with needs and social systems. The full
        long-term list may grow during the two-year EA window.
      </p>
    </div>

    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Icon</th>
          <th scope="col">Vibe</th>
          <th scope="col">Play feel</th>
          <th scope="col">When</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in vibeTable" :key="v.name">
          <td>
            <img
              class="wiki-table-icon"
              :src="`/images/wiki/vibes/${v.icon}`"
              :alt="`${v.name} vibe icon`"
              width="40"
              height="40"
              loading="lazy"
            />
          </td>
          <th scope="row">{{ v.name }}</th>
          <td>{{ v.feel }}</td>
          <td>
            <span class="wiki-badge" :class="v.statusClass">{{ v.status }}</span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <h2>Jester households need a plan</h2>
      <p>
        Most Parafolks only get a fun need bar when an activity runs long enough that they feel bored. Jesters are
        different — boredom hits harder, and the fun need can sit on screen more often. If you run a Jester, bake in
        outings, hobbies, or social time so they are not stuck mid-task while the rest of the house is fine.
      </p>

      <h2>Serious is the one with a known fork</h2>
      <p>
        Only Serious has a public evolution path so far (Studious or Hardworking). The other launch vibes do not have
        confirmed branches yet — treat evolution columns in wikis as “TBD until patch notes say otherwise.”
      </p>

      <h2>Mods and saves</h2>
      <p>
        Custom vibes are Workshop-friendly. After updates, disable vibe mods if emotions or wants act strange. Our
        <RouterLink to="/updates">roadmap page</RouterLink> tracks which social features land day one vs later EA.
      </p>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const vibeTable = [
  {
    name: 'Energetic',
    icon: 'Vibe-Energetic.png',
    feel: 'Upbeat, movement-heavy days. Good for active legacies and town wandering.',
    status: 'Launch',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Gloomy',
    icon: 'Vibe-Gloomy.png',
    feel: 'Lower moods show up more — strong for melancholy story play, harder to keep everyone cheery.',
    status: 'Launch',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Jester',
    icon: 'Vibe-Jester.png',
    feel: 'Humor-forward; fun need is a bigger deal. Schedule breaks.',
    status: 'Launch',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Overjoyed',
    icon: 'Vibe-Overjoyed.png',
    feel: 'Positive emotions land easier — helpful for social and career momentum.',
    status: 'Launch',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Serious',
    icon: 'Vibe-Serious.png',
    feel: 'Can evolve into Studious or Hardworking with personality points.',
    status: 'Launch',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Anxious',
    icon: 'Vibe-Anxious.png',
    feel: 'Still being wired to needs and social — expect tweaks when it arrives.',
    status: 'After launch',
    statusClass: 'wiki-badge--ea',
  },
  {
    name: 'Grumpy',
    icon: 'Vibe-Grumpy.png',
    feel: 'Sour-edge storytelling; not in the day-one roster.',
    status: 'After launch',
    statusClass: 'wiki-badge--ea',
  },
  {
    name: 'Peaceful',
    icon: 'Vibe-Peaceful.png',
    feel: 'Calmer temperament once mechanics are done.',
    status: 'After launch',
    statusClass: 'wiki-badge--ea',
  },
]
</script>
