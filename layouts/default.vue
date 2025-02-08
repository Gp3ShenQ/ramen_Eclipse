<template>
  <div class="relative w-full h-screen">
    <div class="top-0 left-0 absolute flex justify-center w-full h-[1800px] min-[1900px]:h-[2500px]" style="background-image: url('/layout/background6.png')"></div>
    <div class="top-0 left-0 fixed absolute w-full h-full video-area">
      <div class="top-0 left-0 z-[1] absolute w-full h-full mask"></div>
      <video class="relative w-full h-full object-cover" autoplay muted>
        <source src="/videoArea/ramen_video_first.mp4" type="video/mp4" />
      </video>
    </div>
    <TopHeader />
    <MiddleData />
    <BottomData />
    <Footer />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import TopHeader from '@/components/TopHeader.vue'
import MiddleData from '@/components/MiddleData.vue'
import BottomData from '@/components/BottomData.vue'
import Footer from '@/components/Footer.vue'

const initGsap = () => {
  gsap.registerPlugin(ScrollTrigger)
}

const videoBoxSize = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.video-area',
      start: 'center 43%',
      end: 'center 30%',
      scrub: true,
    },
  })

  tl.fromTo(
    '.video-area',
    { 'clip-path': 'inset(30% 10% 0 10%)' }, // 初始值
    { 'clip-path': 'inset(0% 0% 0% 0%)' }, // 最終值
  )

  const tk = gsap.timeline({
    scrollTrigger: {
      trigger: '.mask',
      start: 'center 0%',
      end: 'center -30%',
      scrub: true,
    },
  })
  tk.fromTo(
    '.mask',
    { 'background-color': 'rgba(0,0,0, 0)' }, // 初始值
    { 'background-color': 'rgba(0,0,0, 0.6)' }, // 最終值
  )
}

onMounted(() => {
  initGsap()
  videoBoxSize()
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap');

::-webkit-scrollbar {
  width: 5px;
  background: rgb(34, 32, 32);
}

::-webkit-scrollbar-thumb {
  background: rgb(24, 19, 19);
}

.en-font-400 {
  color: linear-gradient(90deg, rgba(238, 231, 135, 1) 14%, rgba(235, 233, 88, 1) 49%, rgb(230, 229, 218) 100%);
  font-family: 'Charm', serif;
  font-weight: 400;
  font-style: normal;
}

.en-font-700 {
  color: linear-gradient(90deg, rgba(238, 231, 135, 1) 14%, rgb(255, 251, 7) 49%, rgb(230, 229, 218) 100%);
  font-family: 'Charm', serif;
  font-weight: 700;
  font-style: normal;
}

.text-vertical {
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
}
</style>
