<template>
  <div class="relative w-full">
    <template v-if="menuBackground">
      <div class="top-0 left-0 absolute flex justify-center bg-[url('/public/menu/menu_background.png')] w-full h-full"></div>
    </template>
    <template v-else>
      <div class="top-0 left-0 absolute flex justify-center bg-[url('/public/layout/background6.png')] w-full h-full"></div>
    </template>
    <TopHeader />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import TopHeader from '@/components/TopHeader.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()
const commonStore = useCommonStore()
const { menuBackground } = storeToRefs(commonStore)

const GSAPinit = () => {
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

  // const tk = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.mask',
  //     start: 'center 0%',
  //     end: 'center -30%',
  //     scrub: true,
  //   },
  // })
  // tk.fromTo(
  //   '.mask',
  //   { 'background-color': 'rgba(0,0,0, 0)' }, // 初始值
  //   { 'background-color': 'rgba(0,0,0, 0.6)' }, // 最終值
  // )
}

watch(
  () => route.path,
  () => {
    if (route.path === '/menuView') {
      menuBackground.value = true
    } else {
      menuBackground.value = false
    }
  },
)
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

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

page-enter-active,
.page-leave-active {
  transition: all 1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(5rem);
}
</style>
