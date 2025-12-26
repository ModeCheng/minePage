<template>
  <main>
    <PageLoader @done="showLoader=false" v-if="showLoader" />
    <NavBar />
    <Hero />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import PageLoader from './components/PageLoader.vue'
import Hero from './sections/Hero.vue'
import { useHead } from '@vueuse/head'

const showLoader = ref(true)

useHead({
  title: 'MinePage | 个人介绍',
  meta: [
    { name: 'description', content: '前端工程师的绚丽个人介绍站点' },
    { property: 'og:title', content: 'MinePage' },
    { property: 'og:description', content: '前端工程师的绚丽个人介绍站点' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
