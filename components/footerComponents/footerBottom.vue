<template>
  <div class="relative z-[2] flex flex-wrap justify-around items-center gap-4 p-5 w-full max-h-[100px]">
    <template v-for="(item, index) in footerBottom" :key="index.name">
      <img class="w-auto max-w-[15vw] max-h-[60px] hover:scale-110 transition-transform duration-500 cursor-pointer" :src="item.image" alt="" @click="goPages(item.router)" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const router = useRouter()

const footerBottom = ref([
  {
    name: 'About',
    image: '/footer/footerButton/about.png',
    router: 'aboutView',
  },
  {
    name: 'Promise',
    image: '/footer/footerButton/promise.png',
    router: '/',
  },
  {
    name: 'List',
    image: '/footer/footerButton/list.png',
    router: '/',
  },
  {
    name: 'About Shop',
    image: '/footer/footerButton/about_shop.png',
    router: '/',
  },
  {
    name: 'Shop',
    image: '/footer/footerButton/inner_shop.png',
    router: '/',
  },
])

const goPages = (item: string) => {
  router.push(item)
}
</script>
