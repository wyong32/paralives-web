<template>
  <div class="sim-page" :class="`sim-page--${accent}`">
    <header class="sim-hero" :aria-labelledby="titleId">
      <div class="container sim-hero-inner">
        <div class="sim-hero-copy">
          <span class="sim-hero-badge">Paralives Simulator</span>
          <h1 :id="titleId">{{ title }}</h1>
          <p class="sim-hero-lead">{{ lead }}</p>
          <a v-if="showHubLink" href="/simulator" class="sim-btn sim-btn--primary sim-hero-back">
            ← All tools
          </a>
        </div>
        <figure class="page-hero-visual sim-hero-visual" aria-hidden="true">
          <img :src="heroImage" alt="" width="480" height="360" loading="eager" decoding="async" />
        </figure>
      </div>
    </header>

    <div class="sim-body">
      <div class="container sim-layout">
        <aside class="sim-nav-panel" aria-label="Simulator tools">
          <p class="sim-nav-title">Tools</p>
          <ul class="sim-nav-list">
            <li v-for="item in tools" :key="item.to">
              <a
                :href="item.to"
                class="sim-nav-link"
                :class="{ 'is-active': route.path === item.to }"
              >
                <span class="sim-nav-icon" aria-hidden="true">{{ item.icon }}</span>
                {{ item.label }}
              </a>
            </li>
          </ul>
        </aside>

        <main class="sim-main">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

import '../../assets/simulator.css'
import '../../assets/simulator-tools.css'

const route = useRoute()

defineProps({
  title: { type: String, required: true },
  lead: { type: String, required: true },
  accent: { type: String, default: 'hub' },
  titleId: { type: String, default: 'sim-tool-title' },
  showHubLink: { type: Boolean, default: true },
  heroImage: { type: String, default: '/images/about-01.webp' },
})

const tools = [
  { to: '/simulator', label: 'Overview', icon: '⌂' },
  { to: '/simulator/feature-filter', label: 'Feature filter', icon: '◎' },
  { to: '/simulator/trait-points', label: 'Trait points', icon: '★' },
  { to: '/simulator/color-palette', label: 'Color studio', icon: '◐' },
  { to: '/simulator/session-roll', label: 'Session roll', icon: '↻' },
]
</script>
