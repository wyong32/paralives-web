<template>
  <div class="sim-page" :class="`sim-page--${accent}`">
    <header class="sim-hero" :aria-labelledby="titleId">
      <div class="container sim-hero-inner">
        <div>
          <span class="sim-hero-badge">Paralives Simulator</span>
          <h1 :id="titleId">{{ title }}</h1>
          <p class="sim-hero-lead">{{ lead }}</p>
        </div>
        <RouterLink v-if="showHubLink" to="/simulator" class="sim-btn sim-btn--primary">
          ← All tools
        </RouterLink>
      </div>
    </header>

    <div class="sim-body">
      <div class="container sim-layout">
        <aside class="sim-nav-panel" aria-label="Simulator tools">
          <p class="sim-nav-title">Tools</p>
          <ul class="sim-nav-list">
            <li v-for="item in tools" :key="item.to">
              <RouterLink
                :to="item.to"
                class="sim-nav-link"
                active-class="is-active"
              >
                <span class="sim-nav-icon" aria-hidden="true">{{ item.icon }}</span>
                {{ item.label }}
              </RouterLink>
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
import { RouterLink } from 'vue-router'
import '../../assets/simulator.css'
import '../../assets/simulator-tools.css'

defineProps({
  title: { type: String, required: true },
  lead: { type: String, required: true },
  accent: { type: String, default: 'hub' },
  titleId: { type: String, default: 'sim-tool-title' },
  showHubLink: { type: Boolean, default: true },
})

const tools = [
  { to: '/simulator', label: 'Overview', icon: '⌂' },
  { to: '/simulator/feature-filter', label: 'Feature filter', icon: '◎' },
  { to: '/simulator/trait-points', label: 'Trait points', icon: '★' },
  { to: '/simulator/color-palette', label: 'Color studio', icon: '◐' },
  { to: '/simulator/session-roll', label: 'Session roll', icon: '↻' },
]
</script>
