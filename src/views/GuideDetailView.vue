<template>
  <article v-if="guide" class="guide-detail-page">
    <section class="guide-detail-hero" aria-labelledby="guide-title">
      <div class="guide-detail-hero-media" aria-hidden="true">
        <img :src="guide.imageUrl" :alt="guide.imageAlt" width="1200" height="500" />
        <div class="guide-detail-hero-overlay"></div>
      </div>
      <div class="container guide-detail-hero-inner">
        <nav class="guide-breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/guides">Guides</RouterLink>
          <span aria-hidden="true">/</span>
          <span>{{ guide.tags?.[0] || 'Article' }}</span>
        </nav>
        <header class="guide-detail-header">
          <ul v-if="guide.tags?.length" class="guide-detail-tags">
            <li v-for="tag in guide.tags" :key="tag">{{ tag }}</li>
          </ul>
          <h1 id="guide-title">{{ guide.title }}</h1>
          <p class="guide-detail-desc">{{ guide.description }}</p>
          <p class="guide-detail-meta">
            <time :datetime="guide.publishDate">{{ formatDate(guide.publishDate) }}</time>
          </p>
        </header>
      </div>
    </section>

    <section class="guide-detail-body-section">
      <div class="container">
        <div class="guide-detail-layout">
          <div class="guide-article-col">
            <div class="guide-article-prose" v-html="guide.detailsHtml"></div>
          </div>
          <aside class="guide-aside" aria-label="Guide info">
            <div class="guide-aside-card">
              <img
                :src="imgSm"
                alt=""
                class="guide-aside-icon"
                aria-hidden="true"
              />
              <h2>On this guide</h2>
              <ul v-if="guide.tags?.length" class="guide-aside-tags">
                <li v-for="tag in guide.tags" :key="tag">{{ tag }}</li>
              </ul>
              <p class="guide-aside-note">
                Fan-written for Early Access players. Facts may change with patches — check Updates
                after major releases.
              </p>
            </div>

            <div class="guide-aside-card guide-aside-card--links">
              <h2>Explore more</h2>
              <ul class="guide-aside-links">
                <li><RouterLink to="/guides">All guides</RouterLink></li>
                <li><RouterLink to="/wiki">Wiki</RouterLink></li>
                <li><RouterLink to="/mods">Mods</RouterLink></li>
                <li><RouterLink to="/updates">Updates</RouterLink></li>
                <li><RouterLink to="/map">Town map</RouterLink></li>
              </ul>
            </div>

            <ul v-if="otherGuides.length" class="guide-aside-more">
              <li v-for="item in otherGuides" :key="item.id">
                <RouterLink :to="`/guides/${item.addressBar}`">
                  <span v-if="item.tags?.[0]" class="guide-aside-more-tag">{{ item.tags[0] }}</span>
                  {{ item.title }}
                </RouterLink>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  </article>

  <article v-else class="guide-detail-page guide-detail-page--missing">
    <div class="container">
      <div class="guide-not-found">
        <img :src="imgSm" alt="" aria-hidden="true" />
        <h1>Guide not found</h1>
        <p>This walkthrough does not exist or was moved.</p>
        <RouterLink to="/guides" class="btn btn-primary">Back to guides</RouterLink>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import guides from '@/data/guides.js'

const route = useRoute()
const imgSm = 'https://placehold.co/40x40/ffdac1/6B9B7B?text='

const guide = computed(() => guides.find((g) => g.addressBar === route.params.slug))

const otherGuides = computed(() =>
  guides.filter((g) => g.addressBar !== route.params.slug).slice(0, 3),
)

function formatDate(iso) {
  if (!iso) return ''
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
</script>

<style scoped>
.guide-detail-hero {
  position: relative;
  min-height: 320px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: var(--color-sage-dark);
}

.guide-detail-hero-media {
  position: absolute;
  inset: 0;
}

.guide-detail-hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.guide-detail-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-sage-dark) 20%, transparent) 0%,
    color-mix(in srgb, var(--color-ink) 88%, transparent) 100%
  );
}

.guide-detail-hero-inner {
  position: relative;
  z-index: 2;
  padding: 2.5rem 0 2.75rem;
  color: var(--color-white);
}

.guide-breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  margin-bottom: 1.25rem;
  opacity: 0.9;
}

.guide-breadcrumb a {
  color: var(--color-lemon);
  font-weight: 600;
  text-decoration: none;
}

.guide-breadcrumb a:hover {
  text-decoration: underline;
}

.guide-detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  list-style: none;
  margin-bottom: 0.85rem;
}

.guide-detail-tags li {
  font-family: var(--font-cartoon);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: var(--color-coral);
  border: 2px solid color-mix(in srgb, var(--color-white) 60%, transparent);
}

.guide-detail-header h1 {
  font-family: var(--font-display);
  font-size: clamp(1.65rem, 4vw, 2.35rem);
  line-height: 1.2;
  max-width: 20ch;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
  margin-bottom: 0.75rem;
}

.guide-detail-desc {
  font-size: 1.05rem;
  max-width: 52ch;
  line-height: 1.55;
  color: color-mix(in srgb, var(--color-white) 92%, transparent);
  margin-bottom: 0.65rem;
}

.guide-detail-meta {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-lemon);
}

.guide-detail-body-section {
  padding: 2.5rem 0 4.5rem;
  background: var(--color-white);
}

.guide-detail-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 2.5rem;
  align-items: start;
}

.guide-article-col {
  min-width: 0;
}

.guide-aside {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: sticky;
  top: 5.5rem;
}

.guide-aside-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  border: 3px solid color-mix(in srgb, var(--color-mint) 60%, transparent);
  box-shadow: var(--shadow-card);
}

.guide-aside-icon {
  border-radius: var(--radius-sm);
  margin-bottom: 0.65rem;
}

.guide-aside-card h2 {
  font-family: var(--font-cartoon);
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: var(--color-ink);
}

.guide-aside-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  margin-bottom: 0.85rem;
}

.guide-aside-tags li {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  background: var(--color-lemon);
}

.guide-aside-note {
  font-size: 0.85rem;
  color: var(--color-ink-muted);
  line-height: 1.55;
}

.guide-aside-links {
  list-style: none;
}

.guide-aside-links a {
  display: block;
  padding: 0.4rem 0;
  font-weight: 600;
  color: var(--color-sage-dark);
  text-decoration: none;
}

.guide-aside-links a:hover {
  color: var(--color-coral-deep);
  text-decoration: underline;
}

.guide-aside-more {
  list-style: none;
}

.guide-aside-more a {
  display: block;
  padding: 0.85rem 1rem;
  background: var(--color-white);
  border-radius: var(--radius-sm);
  border: 2px solid var(--color-peach);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-ink);
  line-height: 1.4;
  transition: border-color 0.2s ease;
}

.guide-aside-more a:hover {
  border-color: var(--color-sage);
}

.guide-aside-more-tag {
  display: block;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-coral-deep);
  margin-bottom: 0.25rem;
}

.guide-not-found {
  text-align: center;
  padding: 5rem 1rem;
}

.guide-not-found h1 {
  font-family: var(--font-cartoon);
  margin: 1rem 0 0.5rem;
}

.guide-not-found p {
  color: var(--color-ink-muted);
  margin-bottom: 1.5rem;
}

@media (max-width: 1024px) {
  .guide-detail-layout {
    grid-template-columns: 1fr;
  }

  .guide-aside {
    position: static;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}
</style>

<style>
/* 详情正文（v-html）— 非 scoped 以便作用于注入 HTML */
.guide-article-prose {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: 2rem 2.25rem;
  border: 3px solid color-mix(in srgb, var(--color-peach) 50%, transparent);
  box-shadow: var(--shadow-card);
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--color-ink);
}

.guide-article-prose .guide-lead {
  font-size: 1.12rem;
  color: var(--color-ink);
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 2px dashed color-mix(in srgb, var(--color-mint) 70%, transparent);
}

.guide-article-prose h2 {
  font-family: var(--font-cartoon);
  font-size: 1.35rem;
  color: var(--color-sage-dark);
  margin: 2rem 0 0.85rem;
}

.guide-article-prose h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  margin: 1.5rem 0 0.6rem;
  color: var(--color-ink);
}

.guide-article-prose p {
  margin-bottom: 1rem;
  color: var(--color-ink-muted);
}

.guide-article-prose ul,
.guide-article-prose ol {
  margin: 0 0 1.25rem 1.25rem;
  color: var(--color-ink-muted);
}

.guide-article-prose li {
  margin-bottom: 0.45rem;
}

.guide-article-prose strong {
  color: var(--color-ink);
  font-weight: 700;
}

.guide-article-prose em {
  font-style: italic;
  color: var(--color-sage-dark);
}

.guide-callout {
  padding: 1rem 1.2rem;
  border-radius: var(--radius-sm);
  margin: 1.5rem 0;
  font-size: 0.95rem;
  line-height: 1.6;
  border-left: 5px solid;
}

.guide-callout--tip {
  background: color-mix(in srgb, var(--color-mint) 35%, var(--color-white));
  border-color: var(--color-sage);
  color: var(--color-ink);
}

.guide-callout--note {
  background: color-mix(in srgb, var(--color-lemon) 50%, var(--color-white));
  border-color: var(--color-coral);
  color: var(--color-ink);
}

.guide-steps {
  counter-reset: step;
  list-style: none;
  margin-left: 0 !important;
  padding: 0;
}

.guide-steps li {
  position: relative;
  padding: 0.85rem 1rem 0.85rem 3rem;
  margin-bottom: 0.65rem;
  background: color-mix(in srgb, var(--color-cream) 80%, var(--color-white));
  border-radius: var(--radius-sm);
  border: 2px solid color-mix(in srgb, var(--color-peach) 60%, transparent);
}

.guide-steps li::before {
  counter-increment: step;
  content: counter(step);
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-cartoon);
  font-weight: 800;
  font-size: 0.85rem;
  background: var(--color-coral);
  color: var(--color-white);
  border-radius: 50%;
}

.guide-outro {
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 2px dashed var(--color-mint);
  font-style: italic;
  color: var(--color-ink) !important;
}

</style>
