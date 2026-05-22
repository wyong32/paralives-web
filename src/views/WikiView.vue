<template>
  <article class="wiki-page">
    <section class="page-hero-section page-hero-section--wiki" aria-labelledby="wiki-title">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="page-hero-content">
          <span class="section-label">Encyclopedia</span>
          <h1 id="wiki-title" class="title-gradient">Paralives Wiki</h1>
          <p>
            Your Paralives game encyclopedia — talents, vibes, skills, stats, emotions, needs,
            Parafolks, build tools, careers, relationships, and modding. Each article explains what
            ships on Steam Early Access day one (May 25, 2026) and what arrives later in the roadmap.
          </p>
          <p class="wiki-hero-meta">
            {{ wikiCategories.length }} categories · unofficial fan reference · verify in-game after
            patches
          </p>
        </div>
      </div>
    </section>

    <section class="wiki-main-section">
      <div class="container">
        <ul class="wiki-hub-grid">
          <li v-for="cat in wikiCategories" :key="cat.slug">
            <RouterLink :to="`/wiki/${cat.slug}`" class="wiki-hub-card">
              <div class="wiki-hub-card-media">
                <img :src="cat.imageUrl" :alt="cat.imageAlt" loading="lazy" />
              </div>
              <div class="wiki-hub-card-body">
                <h2>{{ cat.title }}</h2>
                <p>{{ cat.description }}</p>
                <p v-if="cat.hubTag" class="wiki-hub-card-meta">{{ cat.hubTag }}</p>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'

/** Wiki hub cards — content lives in src/views/wiki/*.vue */
const wikiCategories = [
  {
    slug: 'talents',
    title: 'Talents',
    description: 'Pick one specialty at creation to level matching skills faster.',
    hubTag: 'Paramaker',
    imageUrl: 'https://placehold.co/480x260/d4c4f5/6B9B7B?text=Talents',
    imageAlt: 'Paralives talents guide',
  },
  {
    slug: 'vibes',
    title: 'Vibes',
    description: 'Your Parafolk’s outlook — emotions, social play, and skill speed.',
    hubTag: 'Personality',
    imageUrl: 'https://placehold.co/480x260/ffb89a/6B9B7B?text=Vibes',
    imageAlt: 'Paralives vibes guide',
  },
  {
    slug: 'skills',
    title: 'Skills',
    description: 'Practice activities in Live Mode — up to level 20.',
    hubTag: 'Live Mode',
    imageUrl: 'https://placehold.co/480x260/b8e8d4/6B9B7B?text=Skills',
    imageAlt: 'Paralives skills guide',
  },
  {
    slug: 'traits',
    title: 'Stats & Personality',
    description: 'Seven points across four stats, plus lifestyles and social perks.',
    hubTag: 'Paramaker',
    imageUrl: 'https://placehold.co/480x260/ffdac1/6B9B7B?text=Stats',
    imageAlt: 'Paralives stats and personality',
  },
  {
    slug: 'emotions',
    title: 'Emotions',
    description: 'Mood cards, wants, and how feelings affect daily life.',
    hubTag: 'Live Mode',
    imageUrl: 'https://placehold.co/480x260/ffb89a/6B9B7B?text=Emotions',
    imageAlt: 'Paralives emotions guide',
  },
  {
    slug: 'needs-wants',
    title: 'Needs & Wants',
    description: 'Six core needs, daily wants, and how they differ from goals.',
    hubTag: 'Live Mode',
    imageUrl: 'https://placehold.co/480x260/9ee0f5/6B9B7B?text=Needs',
    imageAlt: 'Paralives needs and wants',
  },
  {
    slug: 'parafolks',
    title: 'Parafolks & Genetics',
    description: 'Create in Paramaker, inherit looks, age, and raise a family.',
    hubTag: 'Family',
    imageUrl: 'https://placehold.co/480x260/ffdac1/6B9B7B?text=Parafolks',
    imageAlt: 'Paralives Parafolks and genetics',
  },
  {
    slug: 'build-tools',
    title: 'Build Mode Tools',
    description: 'Curved walls, split levels, and the color wheel at launch.',
    hubTag: 'Build',
    imageUrl: 'https://placehold.co/480x260/5bc4e8/6B9B7B?text=Build',
    imageAlt: 'Paralives Build Mode tools',
  },
  {
    slug: 'careers',
    title: 'Careers & Economy',
    description: 'Jobs, bills, shops, and the museum at Early Access launch.',
    hubTag: 'Live Mode',
    imageUrl: 'https://placehold.co/480x260/fff3a0/6B9B7B?text=Careers',
    imageAlt: 'Paralives careers and economy',
  },
  {
    slug: 'relationships',
    title: 'Relationships & Social',
    description: 'Social perks, Together Cards, and group play.',
    hubTag: 'Social',
    imageUrl: 'https://placehold.co/480x260/ff7b6b/6B9B7B?text=Social',
    imageAlt: 'Paralives relationships guide',
  },
  {
    slug: 'modding',
    title: 'Modding',
    description: 'In-game tools, Workshop, and free updates — no paid DLC.',
    hubTag: 'Community',
    imageUrl: 'https://placehold.co/480x260/a78bfa/6B9B7B?text=Mods',
    imageAlt: 'Paralives modding guide',
  },
]
</script>

<style scoped>
.wiki-hero-meta {
  margin-top: 0.75rem;
  font-size: 0.92rem;
  opacity: 0.9;
  max-width: 40rem;
}

.wiki-main-section {
  padding: 3rem 0 4rem;
  background: var(--color-white);
}

.wiki-hub-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.35rem;
}

.wiki-hub-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
  background: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 3px solid color-mix(in srgb, var(--color-mint) 45%, transparent);
  box-shadow: var(--shadow-card);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.wiki-hub-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-sage);
}

.wiki-hub-card-media img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.wiki-hub-card-body {
  padding: 1.15rem 1.25rem 1.35rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.wiki-hub-card-body h2 {
  font-family: var(--font-cartoon);
  font-size: 1.15rem;
  margin-bottom: 0.45rem;
}

.wiki-hub-card-body p {
  font-size: 0.9rem;
  color: var(--color-ink-muted);
  line-height: 1.55;
  flex: 1;
}

.wiki-hub-card-meta {
  margin-top: 0.75rem;
  font-family: var(--font-cartoon);
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--color-sage-dark);
  flex: none;
}

@media (max-width: 768px) {
  .wiki-hub-grid {
    grid-template-columns: 1fr;
  }
}
</style>
