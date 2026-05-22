<template>
  <article class="guides-page">
    <section class="page-hero-section page-hero-section--guides" aria-labelledby="guides-title">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="page-hero-content">
          <span class="section-label">Walkthroughs</span>
          <h1 id="guides-title" class="title-gradient">Paralives Guides</h1>
          <p>
            Step-by-step Paralives game help for Early Access on Steam — beginner walkthroughs,
            mode tips, and realistic expectations, updated as patches ship.
          </p>
        </div>
      </div>
    </section>

    <section class="guides-list-section">
      <div class="container">
        <div class="guides-list-content">
          <ul v-if="guides.length" class="guides-page-grid">
            <li v-for="guide in guides" :key="guide.id">
              <RouterLink :to="`/guides/${guide.addressBar}`" class="guide-card-link">
                <article class="guide-card-stack">
                  <div class="guide-card-media">
                    <img
                      :src="guide.imageUrl"
                      :alt="guide.imageAlt"
                      width="480"
                      height="260"
                      loading="lazy"
                    />
                    <span v-if="guide.tags?.[0]" class="guide-cat-badge">{{ guide.tags[0] }}</span>
                  </div>
                  <div class="guide-card-body">
                    <h2>{{ guide.title }}</h2>
                    <p>{{ guide.description }}</p>
                    <p class="guide-meta">
                      <template v-if="guide.publishDate">{{ formatDate(guide.publishDate) }}</template>
                      <span v-if="guide.readTime"> · {{ guide.readTime }}</span>
                    </p>
                  </div>
                </article>
              </RouterLink>
            </li>
          </ul>

          <div v-else class="list-empty" role="status">
            <p class="list-empty-label">Guides</p>
            <h2 class="list-empty-title">No guides published yet</h2>
            <p>
              We are preparing step-by-step Paralives walkthroughs for Steam Early Access — beginner
              checklists, Build Mode tips, Paramaker help, and Live Mode goals. New articles will
              appear here after launch.
            </p>
            <p class="list-empty-hint">While you wait, try these pages:</p>
            <ul class="list-empty-links">
              <li><RouterLink to="/start">Paralives Start Guide</RouterLink></li>
              <li><RouterLink to="/wiki">Paralives Wiki</RouterLink></li>
              <li><RouterLink to="/updates">Roadmap &amp; Updates</RouterLink></li>
              <li><RouterLink to="/simulator">Paralives Simulator</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import guides from '@/data/guides.js'

function formatDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
</script>

<style scoped>
.guides-list-section {
  padding: 3rem 0 4rem;
  background: var(--color-white);
}

.guides-page-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.35rem;
  list-style: none;
}

.guide-card-link {
  display: block;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.guide-card-body h2 {
  font-family: var(--font-cartoon);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-ink);
}

.guide-meta {
  margin-top: 0.65rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-sage-dark);
}

.list-empty {
  max-width: 36rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  text-align: center;
  background: var(--color-cream);
  border-radius: var(--radius-lg);
  border: 3px dashed color-mix(in srgb, var(--color-sage) 40%, transparent);
}

.list-empty-label {
  font-family: var(--font-cartoon);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-sage-dark);
  margin-bottom: 0.5rem;
}

.list-empty-title {
  font-family: var(--font-cartoon);
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
  color: var(--color-ink);
}

.list-empty p {
  font-size: 0.95rem;
  color: var(--color-ink-muted);
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.list-empty-hint {
  margin-top: 1.25rem;
  font-weight: 600;
  color: var(--color-ink);
}

.list-empty-links {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1.25rem;
  margin-top: 0.65rem;
}

.list-empty-links a {
  font-family: var(--font-cartoon);
  font-weight: 700;
  color: var(--color-sage-dark);
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 768px) {
  .guides-page-grid {
    grid-template-columns: 1fr;
  }
}
</style>
