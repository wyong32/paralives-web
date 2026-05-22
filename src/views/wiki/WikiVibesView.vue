<template>
  <WikiCategoryShell
    title="Paralives Vibes"
    lead="Your Parafolk’s outlook in Paramaker — it shapes emotions, Together Cards, skills, and how relationships feel."
  >
    <div class="wiki-prose">
      <h2>What a vibe changes</h2>
      <p>
        A vibe is your Para’s general temperament, picked at creation. It influences which
        <RouterLink to="/wiki/emotions">emotions</RouterLink> show up and how strong they are, which
        <RouterLink to="/wiki/relationships">Together Cards</RouterLink> appear in social play, how fast certain
        <RouterLink to="/wiki/skills">skills</RouterLink> progress, and even idle animations when nobody is
        giving orders.
      </p>
      <p>
        You start with one vibe, but personality points from wants and goals can unlock extra vibes or evolve
        your starting one — Serious can branch into Studious or Hardworking in public gameplay footage.
      </p>
    </div>

    <h2 class="wiki-section-heading">All vibes (reference)</h2>
    <ul class="wiki-ref-grid wiki-ref-grid--3">
      <li v-for="v in allVibes" :key="v.name" class="wiki-ref-card wiki-ref-card--icon">
        <img
          class="wiki-ref-card-icon"
          :src="`/images/wiki/vibes/${v.icon}`"
          :alt="`${v.name} vibe icon`"
          width="56"
          height="56"
          loading="lazy"
        />
        <h3>{{ v.name }}</h3>
        <p>{{ v.note }}</p>
        <span v-if="v.status" class="wiki-badge" :class="v.statusClass">{{ v.status }}</span>
      </li>
    </ul>

    <h2 class="wiki-section-heading">Launch vs after launch</h2>
    <div class="wiki-phase-grid">
      <section class="wiki-phase-card wiki-phase-card--day">
        <h2><span class="wiki-badge wiki-badge--day">Day one</span> EA launch vibes</h2>
        <p class="wiki-phase-lead">Five vibes targeted for May 25, 2026 Early Access:</p>
        <ul>
          <li><strong>Energetic</strong> — active, upbeat play; leans toward movement and high energy.</li>
          <li><strong>Gloomy</strong> — lower moods more often; strong for melancholy storytelling.</li>
          <li><strong>Jester</strong> — humor and fun needs; boredom hits harder (see below).</li>
          <li><strong>Overjoyed</strong> — positive emotional states show up more readily.</li>
          <li><strong>Serious</strong> — can evolve into Studious or Hardworking with personality points.</li>
        </ul>
      </section>
      <section class="wiki-phase-card wiki-phase-card--ea">
        <h2><span class="wiki-badge wiki-badge--ea">After launch</span> Still in progress</h2>
        <p class="wiki-phase-lead">
          Anxious, Grumpy, and Peaceful were announced for post-launch while mechanics finish. The full vibe
          roster may grow during Early Access.
        </p>
        <ul>
          <li>Eight main vibes were discussed for the long-term roster.</li>
          <li>Only some evolution paths have been shown publicly.</li>
        </ul>
      </section>
    </div>

    <div class="wiki-prose">
      <h2>Jester and the fun need</h2>
      <p>
        Most Parafolks get a fun need when an activity drags on. Jesters feel boredom sooner and can carry a fun
        need more often — plan outings, hobbies, or social time so they do not stall.
      </p>
      <h2>Modding vibes</h2>
      <p>
        Custom vibes are supported for Workshop mods. Pair with the official
        <RouterLink to="/updates">feature lists</RouterLink> to see what is day one vs planned later.
      </p>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const allVibes = [
  {
    name: 'Energetic',
    icon: 'Vibe-Energetic.png',
    note: 'Active, upbeat play; movement and high energy.',
    status: 'Day one',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Gloomy',
    icon: 'Vibe-Gloomy.png',
    note: 'Lower moods; melancholy storytelling.',
    status: 'Day one',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Jester',
    icon: 'Vibe-Jester.png',
    note: 'Humor and fun needs; boredom hits harder.',
    status: 'Day one',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Overjoyed',
    icon: 'Vibe-Overjoyed.png',
    note: 'Positive emotions more often.',
    status: 'Day one',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Serious',
    icon: 'Vibe-Serious.png',
    note: 'Can evolve into Studious or Hardworking.',
    status: 'Day one',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Anxious',
    icon: 'Vibe-Anxious.png',
    note: 'Post-launch; mechanics still in progress.',
    status: 'After launch',
    statusClass: 'wiki-badge--ea',
  },
  {
    name: 'Grumpy',
    icon: 'Vibe-Grumpy.png',
    note: 'Post-launch; subject to change.',
    status: 'After launch',
    statusClass: 'wiki-badge--ea',
  },
  {
    name: 'Peaceful',
    icon: 'Vibe-Peaceful.png',
    note: 'Post-launch; calmer temperament.',
    status: 'After launch',
    statusClass: 'wiki-badge--ea',
  },
]
</script>
