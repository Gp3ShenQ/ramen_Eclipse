<template>
  <div class="flex-col max-[530px]:flex-col justify-center items-between bg-cover bg-center px-60 max-sm:px-5 max-md:px-15 max-lg:px-30 pt-30 w-full max-w-[2000px]">
    <div class="flex justify-between w-full">
      <div class="relative flex max-[550px]:flex-col items-center gap-10">
        <img class="-mt-25 w-full max-w-[100px] cursor-pointer" src="/public/topHeader/Mark.png" alt="" />
        <TopList />
      </div>
      <div class="relative z-10 w-auto h-full">
        <div class="max-[530px]:relative top-0 right-0 absolute max-[530px]:mt-5">
          <div class="flex gap-5">
            <div class="en-font-400 text-[#E2DAB2] text-5xl text-vertical min-[1300px]:text-7xl max-[530px]:text-4xl">必食。</div>
            <div class="en-font-400 text-[#E2DAB2] text-5xl text-vertical min-[1300px]:text-7xl max-[530px]:text-4xl">この旨さ</div>
            <div class="en-font-700 text-[#E2DAB2] text-2xl text-vertical min-[1300px]:text-4xl max-[530px]:text-xl">日一食地鶏を愉しむ、</div>
            <div class="en-font-700 text-[#E2DAB2] text-2xl text-vertical min-[1300px]:text-4xl max-[530px]:text-xl">職人が炭火で焼くラーメン店。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue'

import TopList from '@/components/topHeaderComponents/TopList.vue'
</script>

<style scoped lang="scss"></style>
