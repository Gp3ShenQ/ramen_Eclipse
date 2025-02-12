<template>
  <div class="relative flex justify-center items-center w-full h-screen">
    <div class="top-0 left-0 absolute w-full h-full">
      <div class="top-0 left-0 z-[1] absolute bg-black opacity-40 w-full h-full"></div>
      <video class="relative w-full h-full object-cover" autoplay muted>
        <source src="/footer/shrimp.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="flex flex-col justify-center items-center w-full h-full">
      <footerMiddle />
      <footerBottom />
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

import footerBottom from '@/components/footerComponents/footerBottom.vue'
import footerMiddle from '@/components/footerComponents/footerMiddle.vue'
</script>

<style scoped lang="scss"></style>
