<template>
  <div class="relative z-[2] p-10 w-full">
    <div class="top-0 left-0 absolute w-full h-full">
      <img class="w-full h-full" src="/public/bottomData/background.png" alt="" />
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
