<template>
  <div class="px-60 max-sm:px-5 max-md:px-15 max-lg:px-30 pt-30 w-full">
    <div class="z-10 relative flex justify-between w-full">
      <div class="relative flex max-[550px]:flex-col items-center gap-10">
        <img class="-mt-25 w-full max-w-[100px] cursor-pointer" src="/public/topHeader/Mark.png" alt="" @click="toIndex" />
        <TopList />
      </div>
      <div class="w-auto h-full">
        <div class="top-0 right-0 absolute max-[530px]:relative max-[530px]:mt-5">
          <div class="flex gap-5">
            <div class="en-font-400 text-[#E2DAB2] text-vertical max-[530px]:text-4xl text-5xl min-[1300px]:text-7xl">必食。</div>
            <div class="en-font-400 text-[#E2DAB2] text-vertical max-[530px]:text-4xl text-5xl min-[1300px]:text-7xl">この旨さ</div>
            <div class="en-font-700 text-[#E2DAB2] text-vertical max-[530px]:text-xl text-2xl min-[1300px]:text-4xl">日一食地鶏を愉しむ、</div>
            <div class="en-font-700 text-[#E2DAB2] text-vertical max-[530px]:text-xl text-2xl min-[1300px]:text-4xl">職人が炭火で焼くラーメン店。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue'

import TopList from '@/components/topHeaderComponents/TopList.vue'

const router = useRouter()

const toIndex = () => {
  router.push('/')
}
</script>
