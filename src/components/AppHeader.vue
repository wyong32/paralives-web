<template>
  <header class="site-header" role="banner">
    <div class="container">
      <div class="header-content">
        <a href="/" class="brand" aria-label="Paralives Wiki — Home">
          <img
            class="logo-img"
            src="/images/logo.webp"
            alt="Paralives Wiki logo"
          />
          <span class="brand-text"><span class="title-gradient">Paralives</span>Wiki</span>
        </a>

        <button
          type="button"
          class="btn btn-outline"
          aria-controls="main-nav"
          :aria-expanded="navOpen ? 'true' : 'false'"
          aria-label="Toggle navigation menu"
          @click="toggleNav"
        >
          <span aria-hidden="true">☰</span>
          <span class="visually-hidden">Menu</span>
        </button>

        <nav id="main-nav" class="main-nav" aria-label="Primary navigation">
          <ul>
            <li v-for="item in navItems" :key="item.path">
              <a
                :href="item.path"
                :class="{ 'is-active': navLinkActive(item.path) }"
                @click="closeNav"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>

        <a
          class="btn btn-primary header-cta"
          href="https://store.steampowered.com/app/1118520/Paralives/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Steam
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const navOpen = ref(false)
const route = useRoute()

function toggleNav() {
  navOpen.value = !navOpen.value
}

function closeNav() {
  navOpen.value = false
}

watch(() => route.path, closeNav)

/** 与顶栏一致：首页仅精确匹配，其余路径可匹配子路由 */
function navLinkActive(path) {
  if (path === '/') return route.path === '/'
  return route.path === path || route.path.startsWith(`${path}/`)
}

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Wiki', path: '/wiki' },
  { label: 'Start Here', path: '/start' },
  { label: 'Guides', path: '/guides' },
  { label: 'Mods', path: '/mods' },
  { label: 'Updates', path: '/updates' },
  { label: 'Simulator', path: '/simulator' },
  { label: 'Map', path: '/map' },
]
</script>
