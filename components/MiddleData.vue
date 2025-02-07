<template>
  <div class="relative z-[2] bg-transparent mt-[1800px] min-[1900px]:mt-[2500px] px-5 w-full text-white">
    <FirstIntroduction />
    <SecondIntroduction />
    <ThirdIntroduction />
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

import FirstIntroduction from '@/components/middleComponents/FirstIntroduction.vue'
import SecondIntroduction from '@/components/middleComponents/SecondIntroduction.vue'
import ThirdIntroduction from '@/components/middleComponents/ThirdIntroduction.vue'
</script>

<style scoped lang="scss"></style>
