<template>
  <div class="h-screen w-screen overflow-hidden">
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :direction="'horizontal'"
      :speed="800"
      :mousewheel="true"
      :keyboard="{ enabled: true }"
      :pagination="{ clickable: true }"
      style="height: 100vh; width: 100vw"
      @slideChange="onSlideChange"
      class="h-full"
    >
      <SwiperSlide class="h-full w-full"><Hero /></SwiperSlide>
      <SwiperSlide class="h-full w-full"><About /></SwiperSlide>
      <SwiperSlide class="h-full w-full"><Skills /></SwiperSlide>
      <SwiperSlide class="h-full w-full"><Projects /></SwiperSlide>
      <SwiperSlide class="h-full w-full"><Showcase /></SwiperSlide>
      <SwiperSlide class="h-full w-full"><Experience /></SwiperSlide>
      <SwiperSlide class="h-full w-full"><Contact /></SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Keyboard, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Hero from '../sections/Hero.vue'
import About from '../sections/About.vue'
import Skills from '../sections/Skills.vue'
import Projects from '../sections/Projects.vue'
import Showcase from '../sections/Showcase.vue'
import Experience from '../sections/Experience.vue'
import Contact from '../sections/Contact.vue'

const modules = [Mousewheel, Keyboard, Pagination]

function onSlideChange(swiper: any) {
  const detail = { index: swiper.activeIndex, total: swiper.slides.length }
  window.dispatchEvent(new CustomEvent('slide-change', { detail }))
}
</script>
