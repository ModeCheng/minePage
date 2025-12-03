<template>
  <main>
    <PageLoader @done="showLoader=false" v-if="showLoader" />
    <NavBar />
    <ScrollProgress />
    <SectionIndicator />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Showcase />
    <Experience />
    <Contact />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import SectionIndicator from './components/SectionIndicator.vue'
import PageLoader from './components/PageLoader.vue'
import Hero from './sections/Hero.vue'
import About from './sections/About.vue'
import Skills from './sections/Skills.vue'
import Projects from './sections/Projects.vue'
import Showcase from './sections/Showcase.vue'
import Experience from './sections/Experience.vue'
import Contact from './sections/Contact.vue'
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
