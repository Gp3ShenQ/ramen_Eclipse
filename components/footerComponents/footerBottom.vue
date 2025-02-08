<template>
  <div class="relative z-[2] flex flex-wrap justify-around items-center gap-4 p-5 w-full max-h-[100px]">
    <template v-for="(item, index) in footerBottom" :key="index.name">
      <img class="w-auto max-w-[15vw] max-h-[60px] hover:scale-110 transition-transform duration-500" :src="item.image" alt="About" />
    </template>
    <!-- <img class="w-auto max-w-[15vw] max-h-[80px] hover:scale-110 transition-transform duration-500" src="/footer/footerButton/about.png" alt="About" />
    <img class="w-auto max-w-[15vw] max-h-[80px] hover:scale-110 transition-transform duration-500" src="/footer/footerButton/promise.png" alt="Promise" />
    <img class="w-auto max-w-[15vw] max-h-[80px] hover:scale-110 transition-transform duration-500" src="/footer/footerButton/list.png" alt="List" />
    <img class="w-auto max-w-[15vw] max-h-[80px] hover:scale-110 transition-transform duration-500" src="/footer/footerButton/about_shop.png" alt="About Shop" />
    <img class="w-auto max-w-[15vw] max-h-[80px] hover:scale-110 transition-transform duration-500" src="/footer/footerButton/inner_shop.png" alt="Shop Button" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const footerBottom = ref([
  {
    name: 'About',
    image: '/footer/footerButton/about.png',
  },
  {
    name: 'Promise',
    image: '/footer/footerButton/promise.png',
  },
  {
    name: 'List',
    image: '/footer/footerButton/list.png',
  },
  {
    name: 'About Shop',
    image: '/footer/footerButton/about_shop.png',
  },
  {
    name: 'Shop',
    image: '/footer/footerButton/inner_shop.png',
  },
])
</script>
