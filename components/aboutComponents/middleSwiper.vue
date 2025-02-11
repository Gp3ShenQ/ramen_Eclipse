<template>
  <swiper
    :slides-per-view="slidesPerView"
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
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const modules = [Autoplay, Pagination, Navigation]

type Props = {
  entrance: string
}

const props = defineProps<Props>()

const aboutImages = [
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

const storeImages = [
  '/storeInformation/store_swiper1.png',
  '/storeInformation/store_swiper2.png',
  '/storeInformation/store_swiper3.png',
  '/storeInformation/store_swiper4.png',
  '/storeInformation/store_swiper5.png',
  '/storeInformation/store_swiper6.png',
  '/storeInformation/store_swiper7.png',
  '/storeInformation/store_swiper8.png',
  '/storeInformation/store_swiper9.png',
  '/storeInformation/store_swiper10.png',
  '/storeInformation/store_swiper11.png',
  '/storeInformation/store_swiper12.png',
  '/storeInformation/store_swiper13.png',
]

const slidesPerView = ref<number>(3)

const entrance = computed(() => {
  return props.entrance
})

const images = computed<string[]>(() => {
  if (entrance.value === 'about') {
    return aboutImages
  } else {
    return storeImages
  }
})

const updateSlidesPerView = () => {
  slidesPerView.value = window.innerWidth <= 500 ? 3 : 6
}

onMounted(() => {
  updateSlidesPerView()
  window.addEventListener('resize', updateSlidesPerView)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlidesPerView)
})
</script>
