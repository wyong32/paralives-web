<template>
  <article class="legal-page">
    <header class="legal-page-hero">
      <div class="container">
        <nav class="legal-breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true">/</span>
          <span>{{ title }}</span>
        </nav>
        <h1 id="legal-page-title">{{ title }}</h1>
        <p v-if="lead" class="legal-page-lead">{{ lead }}</p>
        <p v-if="lastUpdated" class="legal-page-meta">
          Last updated: <time :datetime="lastUpdated">{{ formattedDate }}</time>
        </p>
      </div>
    </header>

    <div class="legal-page-body">
      <div class="container legal-prose">
        <slot />
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  lastUpdated: { type: String, default: '2026-05-19' },
})

const formattedDate = computed(() => {
  if (!props.lastUpdated) return ''
  return new Date(props.lastUpdated + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
})
</script>

<style scoped>
.legal-page-hero {
  padding: 2.5rem 0 1.5rem;
  background: linear-gradient(180deg, var(--color-cream) 0%, var(--color-white) 100%);
  border-bottom: 3px solid color-mix(in srgb, var(--color-sage) 25%, transparent);
}

.legal-breadcrumb {
  font-size: 0.88rem;
  color: var(--color-ink-muted);
  margin-bottom: 0.75rem;
}

.legal-breadcrumb a:hover {
  color: var(--color-sage-dark);
}

.legal-breadcrumb span:last-child {
  color: var(--color-ink);
  font-weight: 600;
}

.legal-page-lead {
  margin-top: 0.65rem;
  max-width: 42rem;
  color: var(--color-ink-muted);
}

.legal-page-meta {
  margin-top: 0.5rem;
  font-size: 0.88rem;
  color: var(--color-ink-muted);
}

.legal-page-body {
  padding: 2rem 0 3.5rem;
}

.legal-prose :deep(h2) {
  font-size: 1.35rem;
  margin: 2rem 0 0.75rem;
}

.legal-prose :deep(h3) {
  font-size: 1.1rem;
  margin: 1.5rem 0 0.5rem;
}

.legal-prose :deep(p),
.legal-prose :deep(li) {
  color: var(--color-ink-muted);
  margin-bottom: 0.85rem;
}

.legal-prose :deep(ul),
.legal-prose :deep(ol) {
  padding-left: 1.35rem;
  margin-bottom: 1rem;
}

.legal-prose :deep(a) {
  color: var(--color-sage-dark);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.legal-prose :deep(strong) {
  color: var(--color-ink);
}
</style>
