<template>
  <div class="app-layout">
    <AppHeader />
    <main id="main-content">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main-content {
  flex: 1;
  /* 路由 chunk 加载前预留主区高度，避免页脚从上方被整体顶下去（CLS） */
  min-height: calc(100vh - 5.5rem - 14rem);
}
</style>
