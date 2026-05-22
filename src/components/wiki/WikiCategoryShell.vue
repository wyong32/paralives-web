<template>
  <article class="wiki-cat-page">
    <section class="page-hero-section page-hero-section--wiki" :aria-labelledby="titleId">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="page-hero-content">
          <nav class="wiki-breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/wiki">Wiki</RouterLink>
            <span aria-hidden="true">/</span>
            <span>{{ title }}</span>
          </nav>
          <h1 :id="titleId" class="title-gradient">{{ title }}</h1>
          <p v-if="lead">{{ lead }}</p>
        </div>
      </div>
    </section>

    <div class="wiki-cat-body">
      <div class="container" :class="containerClass">
        <slot />
        <footer class="wiki-cat-footer">
          <RouterLink to="/wiki">← All wiki topics</RouterLink>
          <span aria-hidden="true">·</span>
          <RouterLink to="/updates">Development updates</RouterLink>
        </footer>
      </div>
    </div>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import '../../assets/wiki-pages.css'

defineProps({
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  titleId: { type: String, default: 'wiki-cat-title' },
  containerClass: { type: String, default: '' },
})
</script>
