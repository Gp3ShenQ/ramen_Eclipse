<template>
  <div>
    <div class="z-[-1] absolute">
      <img src="/layout/background4.png" alt="" />
    </div>
    <TopHeader />
    <slot />
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

import TopHeader from '@/components/TopHeader.vue'
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap');

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
</style>
