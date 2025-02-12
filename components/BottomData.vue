<template>
  <div class="z-[2] relative p-10 w-full">
    <div class="top-0 left-0 absolute w-full h-full">
      <NuxtImg class="w-full h-full" src="/bottomData/background.png" alt="" />
    </div>
    <div class="relative">
      <topData />
      <bottomData />
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

import topData from '@/components/bottomDataComponents/topData.vue'
import bottomData from '@/components/bottomDataComponents/bottomData.vue'
</script>
