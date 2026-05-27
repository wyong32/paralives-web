<template>
  <article class="wiki-cat-page">
    <section class="page-hero-section page-hero-section--wiki" :aria-labelledby="titleId">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="page-hero-row">
          <div class="page-hero-content wiki-hero-content">
            <nav class="wiki-breadcrumb" aria-label="Breadcrumb">
              <a href="/wiki">Wiki</a>
              <span aria-hidden="true">/</span>
              <template v-if="breadcrumbParent">
                <a :href="breadcrumbParent.href">{{ breadcrumbParent.title }}</a>
                <span aria-hidden="true">/</span>
              </template>
              <span>{{ title }}</span>
            </nav>
            <h1 :id="titleId" class="title-gradient">{{ title }}</h1>
            <p v-if="lead" class="wiki-hero-lead">{{ lead }}</p>
          </div>
          <figure class="page-hero-visual">
            <img
              :src="heroImage"
              :alt="`${title} — Paralives Wiki topic`"
              width="680"
              height="510"
              loading="eager"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>

    <div class="wiki-cat-body">
      <div class="container wiki-cat-container">
        <div class="wiki-article-layout">
          <div class="wiki-article-main">
            <slot />
          </div>

          <aside
            class="wiki-article-aside"
            aria-label="Wiki sidebar"
          >
            <div class="wiki-aside-stack">
              <slot name="aside" />

              <section
                v-if="showKeepReadingSection"
                class="wiki-aside-panel"
                :class="{ 'wiki-aside-panel--inpage-toc': hasKeepReadingSlot }"
              >
                <h2 class="wiki-aside-title">Keep reading</h2>
                <slot name="keep-reading">
                  <ul v-if="neighbors.prev || neighbors.next" class="wiki-aside-nav">
                    <li v-if="neighbors.prev">
                      <a :href="`/wiki/${neighbors.prev.slug}`" class="wiki-aside-link">
                        <span class="wiki-aside-dir">Previous</span>
                        <span class="wiki-aside-label">{{ neighbors.prev.title }}</span>
                      </a>
                    </li>
                    <li v-if="neighbors.next">
                      <a :href="`/wiki/${neighbors.next.slug}`" class="wiki-aside-link">
                        <span class="wiki-aside-dir">Next</span>
                        <span class="wiki-aside-label">{{ neighbors.next.title }}</span>
                      </a>
                    </li>
                  </ul>
                </slot>
              </section>

              <section v-if="sidebarTopics.length" class="wiki-aside-panel">
                <h2 class="wiki-aside-title">Other topics</h2>
                <ul class="wiki-aside-topics">
                  <li v-for="topic in sidebarTopics" :key="topic.slug">
                    <a :href="`/wiki/${topic.slug}`" class="wiki-aside-topic">
                      <span>{{ topic.title }}</span>
                      <span class="wiki-aside-tag">{{ topic.tag }}</span>
                    </a>
                  </li>
                </ul>
              </section>

              <section
                class="wiki-aside-panel wiki-aside-panel--muted"
              >
                <h2 class="wiki-aside-title">Explore</h2>
                <ul class="wiki-aside-quick">
                  <li v-for="link in wikiQuickLinks" :key="link.to">
                    <a :href="link.to">{{ link.label }}</a>
                  </li>
                </ul>
              </section>
            </div>
          </aside>
        </div>

        <footer class="wiki-cat-footer">
          <a href="/wiki">← All wiki topics</a>
          <span aria-hidden="true">·</span>
          <a href="/updates">Development updates</a>
          <p class="wiki-source-note">
            Unofficial player guide — details can shift during Early Access. Check in-game after patches.
          </p>
        </footer>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, useSlots } from 'vue'
import { useRoute } from 'vue-router'
import { getWikiNeighbors, getWikiSlugFromPath, wikiQuickLinks } from '@/data/wikiNav.js'
import '../../assets/wiki-pages.css'

const props = defineProps({
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  titleId: { type: String, default: 'wiki-cat-title' },
  /** 子页：面包屑 Wiki / 父级 / 当前标题 */
  breadcrumbParent: {
    type: Object,
    default: null,
    validator: (v) =>
      v == null || (typeof v.href === 'string' && typeof v.title === 'string'),
  },
  /** 各分类页可在调用处覆盖；默认与 Wiki 总览气质一致 */
  heroImage: { type: String, default: '/images/about-02.webp' },
})

const slots = useSlots()

const route = useRoute()

const neighbors = computed(() => {
  const slug = getWikiSlugFromPath(route.path)
  return slug ? getWikiNeighbors(slug) : { prev: null, next: null, others: [] }
})

const hasKeepReadingSlot = computed(() => Boolean(slots['keep-reading']?.()?.length))

const showKeepReadingSection = computed(() => {
  const n = neighbors.value
  return hasKeepReadingSlot.value || Boolean(n.prev || n.next)
})

/** Show a compact set so the sidebar does not scroll forever */
const sidebarTopics = computed(() => neighbors.value.others.slice(0, 6))
</script>
