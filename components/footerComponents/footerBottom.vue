<template>
  <div class="z-[2] relative flex flex-wrap justify-around items-center gap-4 px-5 w-full max-h-[100px]">
    <template v-for="(item, index) in footerBottom" :key="index.name">
      <img class="w-auto max-w-[15vw] max-h-[60px] hover:scale-110 transition-transform duration-500 cursor-pointer" :src="item.image" alt="" @click="goPages(item.router, item.query)" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

const router = useRouter()
const commonStore = useCommonStore()
const { promiseType } = storeToRefs(commonStore)

const footerBottom = ref([
  {
    name: 'About',
    image: '/footer/footerButton/about.png',
    router: '/',
  },
  {
    name: 'Promise',
    image: '/footer/footerButton/promise.png',
    router: 'aboutView',
    query: 'promise',
  },
  {
    name: 'List',
    image: '/footer/footerButton/list.png',
    router: 'menuView',
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

const goPages = (item: string, query?: string) => {
  if (query) {
    promiseType.value = true
  }
  router.push(item)
}
</script>
