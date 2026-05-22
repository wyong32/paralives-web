<template>
  <article v-if="mod" class="mod-detail-page">
    <div class="mod-detail-bar">
      <div class="container">
        <nav class="mod-breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/mods">Mods</RouterLink>
          <span aria-hidden="true">/</span>
          <span>{{ mod.title }}</span>
        </nav>
      </div>
    </div>

    <section class="mod-detail-section" aria-labelledby="mod-title">
      <div class="container">
        <div class="mod-detail-panel">
          <div class="mod-detail-preview">
            <img :src="mod.imageUrl" :alt="mod.imageAlt" width="480" height="480" />
            <ul v-if="mod.tags?.length" class="mod-detail-tags">
              <li v-for="tag in mod.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>

          <div class="mod-detail-info">
            <h1 id="mod-title">{{ mod.title }}</h1>
            <p class="mod-detail-desc">{{ mod.description }}</p>
            <p class="mod-detail-meta">
              <time v-if="mod.publishDate" :datetime="mod.publishDate">
                Updated {{ formatDate(mod.publishDate) }}
              </time>
            </p>

            <div class="mod-download-box">
              <a
                v-if="mod.downloadUrl"
                :href="mod.downloadUrl"
                class="btn btn-primary mod-download-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download mod
                <span class="mod-download-icon" aria-hidden="true">↗</span>
              </a>
              <p class="mod-download-note">
                Opens an external site (e.g. Steam Workshop). Paralives Hub does not host files.
              </p>
            </div>
          </div>
        </div>

        <div class="mod-detail-content">
          <div class="mod-article-prose" v-html="mod.detailsHtml"></div>
        </div>

        <footer class="mod-detail-footer">
          <RouterLink to="/mods" class="btn btn-outline">← All mods</RouterLink>
          <a
            v-if="mod.downloadUrl"
            :href="mod.downloadUrl"
            class="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download mod ↗
          </a>
        </footer>
      </div>
    </section>
  </article>

  <article v-else class="mod-detail-page mod-detail-page--missing">
    <div class="container">
      <div class="mod-not-found">
        <h1>Mod not found</h1>
        <p>This listing does not exist or was removed.</p>
        <RouterLink to="/mods" class="btn btn-primary">Back to mods</RouterLink>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import mods from '@/data/mods.js'

const route = useRoute()

const mod = computed(() => mods.find((m) => m.addressBar === route.params.slug))

function formatDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
</script>

<style scoped>
.mod-detail-page {
  background: var(--color-white);
}

.mod-detail-bar {
  padding: 1rem 0;
  border-bottom: 2px solid color-mix(in srgb, var(--color-lavender) 35%, transparent);
  background: var(--color-white);
}

.mod-breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: var(--color-ink-muted);
}

.mod-breadcrumb a {
  font-weight: 600;
  color: var(--color-lavender-deep);
  text-decoration: none;
}

.mod-breadcrumb a:hover {
  text-decoration: underline;
}

.mod-detail-section {
  padding: 2.5rem 0 4rem;
}

.mod-detail-panel {
  display: grid;
  grid-template-columns: minmax(260px, 340px) minmax(0, 1fr);
  gap: 2rem;
  padding: 1.75rem;
  margin-bottom: 2rem;
  background: color-mix(in srgb, var(--color-lavender) 12%, var(--color-white));
  border: 3px solid color-mix(in srgb, var(--color-lavender) 45%, transparent);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}

.mod-detail-preview {
  position: relative;
}

.mod-detail-preview img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius-md);
  border: 3px solid var(--color-white);
  box-shadow: var(--shadow-soft);
}

.mod-detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.85rem;
  list-style: none;
}

.mod-detail-tags li {
  font-family: var(--font-cartoon);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  background: var(--color-lavender-deep);
  color: var(--color-white);
}

.mod-detail-info h1 {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  line-height: 1.2;
  color: var(--color-ink);
  margin-bottom: 0.75rem;
}

.mod-detail-desc {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--color-ink-muted);
  margin-bottom: 0.65rem;
}

.mod-detail-meta {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-sage-dark);
  margin-bottom: 1.5rem;
}

.mod-download-box {
  padding: 1.25rem;
  background: var(--color-white);
  border-radius: var(--radius-md);
  border: 2px dashed color-mix(in srgb, var(--color-lavender-deep) 40%, transparent);
}

.mod-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  text-align: center;
}

.mod-download-icon {
  font-size: 1.1rem;
  line-height: 1;
}

.mod-download-note {
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: var(--color-ink-muted);
  line-height: 1.45;
  text-align: center;
}

.mod-detail-content {
  max-width: 720px;
}

.mod-detail-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2.5rem;
  padding-top: 1.75rem;
  border-top: 2px dashed color-mix(in srgb, var(--color-lavender) 40%, transparent);
}

.mod-not-found {
  text-align: center;
  padding: 5rem 1rem;
}

.mod-not-found h1 {
  font-family: var(--font-cartoon);
  margin: 1rem 0 0.5rem;
}

.mod-not-found p {
  color: var(--color-ink-muted);
  margin-bottom: 1.5rem;
}

@media (max-width: 1024px) {
  .mod-detail-panel {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .mod-detail-panel {
    padding: 1.25rem;
  }

  .mod-detail-preview img {
    aspect-ratio: 16 / 10;
  }
}
</style>

<style>
/* Mod 正文（v-html） */
.mod-article-prose {
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--color-ink-muted);
}

.mod-article-prose .mod-lead {
  font-size: 1.08rem;
  color: var(--color-ink);
  margin-bottom: 1.5rem;
  padding: 1rem 1.15rem;
  background: color-mix(in srgb, var(--color-lavender) 18%, var(--color-white));
  border-radius: var(--radius-sm);
  border-left: 4px solid var(--color-lavender-deep);
}

.mod-article-prose h2 {
  font-family: var(--font-cartoon);
  font-size: 1.2rem;
  color: var(--color-lavender-deep);
  margin: 1.75rem 0 0.75rem;
}

.mod-article-prose ul,
.mod-article-prose ol {
  margin: 0 0 1.25rem 1.25rem;
}

.mod-article-prose li {
  margin-bottom: 0.4rem;
}

.mod-article-prose p {
  margin-bottom: 1rem;
}

.mod-article-prose strong {
  color: var(--color-ink);
}

.mod-callout {
  padding: 1rem 1.15rem;
  border-radius: var(--radius-sm);
  margin: 1.25rem 0;
  font-size: 0.95rem;
  line-height: 1.55;
}

.mod-callout--warn {
  background: color-mix(in srgb, var(--color-lemon) 45%, var(--color-white));
  border: 2px solid var(--color-coral);
  color: var(--color-ink);
}
</style>
