<script setup lang="ts">
import GlobalNav from './components/GlobalNav.vue'
</script>

<template>
  <div class="app-container">
    <GlobalNav />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
}

.app-container {
  min-height: 100vh;
}

.main-content {
  min-height: calc(100vh - 60px);
}
</style>
