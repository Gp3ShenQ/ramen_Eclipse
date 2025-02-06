<template>
  <div class="flex gap-4 mb-10">
    <template v-for="(item, index) in dataList" :key="index">
      <div class="flex flex-col gap-2 en-font-700 text-main1 text-xs min-[1300px]:text-2xl cursor-pointer">
        <template v-for="(child, index) in item" :key="index">
          <p class="en-font-400">{{ child.name }}</p>
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue'

const dataList = [
  [
    { name: '日一食', link: 'https://www.google.com' },
    { name: '關於日一食', link: 'https://www.google.com' },
    { name: '我們的承諾', link: 'https://www.google.com' },
    { name: '選單', link: 'https://www.google.com' },
  ],
  [
    { name: '店鋪資訊', link: 'https://www.google.com' },
    { name: '商店資訊', link: 'https://www.google.com' },
    { name: '招募資訊', link: 'https://www.google.com' },
  ],
]
</script>
