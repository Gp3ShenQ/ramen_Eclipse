<template>
  <swiper
    :slides-per-view="3"
    :space-between="30"
    :centeredSlides="true"
    :loop="true"
    :looped-slides="6"
    :autoplay="{ delay: 0, disableOnInteraction: false, stopOnLastSlide: false }"
    :speed="10000"
    :allow-touch-move="true"
    :navigation="false"
    :pagination="false"
    :modules="modules"
    class="w-full"
  >
    <template v-for="(item, index) in images" :key="index">
      <swiper-slide class="flex justify-center">
        <img :src="item" alt="" class="w-[350px] h-[350px]" />
      </swiper-slide>
    </template>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const modules = [Autoplay, Pagination, Navigation]

const images = [
  '/about/about_image1.png',
  '/about/about_image2.png',
  '/about/about_image3.png',
  '/about/about_image4.png',
  '/about/about_image5.png',
  '/about/about_image6.png',
  '/about/about_image7.png',
  '/about/about_image8.png',
  '/about/about_image9.png',
  '/about/about_image10.png',
  '/about/about_image11.png',
  '/about/about_image12.png',
]
</script>
