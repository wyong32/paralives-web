<template>
  <article class="wiki-cat-page">
    <section class="page-hero-section page-hero-section--wiki" :aria-labelledby="titleId">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="page-hero-content wiki-hero-content">
          <nav class="wiki-breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/wiki">Wiki</RouterLink>
            <span aria-hidden="true">/</span>
            <span>{{ title }}</span>
          </nav>
          <h1 :id="titleId" class="title-gradient">{{ title }}</h1>
          <p v-if="lead" class="wiki-hero-lead">{{ lead }}</p>
        </div>
      </div>
    </section>

    <div class="wiki-cat-body">
      <div class="container wiki-cat-container">
        <div class="wiki-article-layout">
          <div class="wiki-article-main">
            <slot />
          </div>

          <aside class="wiki-article-aside" aria-label="Wiki sidebar">
            <div class="wiki-aside-stack">
              <slot name="aside" />

              <section v-if="neighbors.prev || neighbors.next" class="wiki-aside-panel">
                <h2 class="wiki-aside-title">Keep reading</h2>
                <ul class="wiki-aside-nav">
                  <li v-if="neighbors.prev">
                    <RouterLink :to="`/wiki/${neighbors.prev.slug}`" class="wiki-aside-link">
                      <span class="wiki-aside-dir">Previous</span>
                      <span class="wiki-aside-label">{{ neighbors.prev.title }}</span>
                    </RouterLink>
                  </li>
                  <li v-if="neighbors.next">
                    <RouterLink :to="`/wiki/${neighbors.next.slug}`" class="wiki-aside-link">
                      <span class="wiki-aside-dir">Next</span>
                      <span class="wiki-aside-label">{{ neighbors.next.title }}</span>
                    </RouterLink>
                  </li>
                </ul>
              </section>

              <section v-if="sidebarTopics.length" class="wiki-aside-panel">
                <h2 class="wiki-aside-title">Other topics</h2>
                <ul class="wiki-aside-topics">
                  <li v-for="topic in sidebarTopics" :key="topic.slug">
                    <RouterLink :to="`/wiki/${topic.slug}`" class="wiki-aside-topic">
                      <span>{{ topic.title }}</span>
                      <span class="wiki-aside-tag">{{ topic.tag }}</span>
                    </RouterLink>
                  </li>
                </ul>
              </section>

              <section class="wiki-aside-panel wiki-aside-panel--muted">
                <h2 class="wiki-aside-title">Explore</h2>
                <ul class="wiki-aside-quick">
                  <li v-for="link in wikiQuickLinks" :key="link.to">
                    <RouterLink :to="link.to">{{ link.label }}</RouterLink>
                  </li>
                </ul>
              </section>
            </div>
          </aside>
        </div>

        <footer class="wiki-cat-footer">
          <RouterLink to="/wiki">← All wiki topics</RouterLink>
          <span aria-hidden="true">·</span>
          <RouterLink to="/updates">Development updates</RouterLink>
          <p class="wiki-source-note">
            Unofficial player guide — details can shift during Early Access. Check in-game after patches.
          </p>
        </footer>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getWikiNeighbors, getWikiSlugFromPath, wikiQuickLinks } from '@/data/wikiNav.js'
import '../../assets/wiki-pages.css'

defineProps({
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  titleId: { type: String, default: 'wiki-cat-title' },
  /** @deprecated layout is full-width; prop kept for compatibility */
  containerClass: { type: String, default: '' },
})

const route = useRoute()

const neighbors = computed(() => {
  const slug = getWikiSlugFromPath(route.path)
  return slug ? getWikiNeighbors(slug) : { prev: null, next: null, others: [] }
})

/** Show a compact set so the sidebar does not scroll forever */
const sidebarTopics = computed(() => neighbors.value.others.slice(0, 6))
</script>
