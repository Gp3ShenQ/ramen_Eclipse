<template>
  <div class="top-0 left-0 fixed absolute w-full h-full video-area">
    <div class="top-0 left-0 z-[1] absolute w-full h-full mask"></div>
    <video class="relative w-full h-full object-cover" autoplay muted>
      <source src="/videoArea/ramen_video_first.mp4" type="video/mp4" />
    </video>
  </div>
  <MiddleData />
  <BottomData />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import MiddleData from '@/components/MiddleData.vue'
import BottomData from '@/components/BottomData.vue'

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
