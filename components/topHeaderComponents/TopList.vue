<template>
  <div class="flex gap-4 mb-10">
    <template v-for="(item, index) in dataList" :key="index">
      <div class="flex flex-col gap-2 en-font-700 text-main1 text-xs min-[1300px]:text-2xl cursor-pointer">
        <template v-for="child in item" :key="child.name">
          <NuxtLink :to="child.router" @click="console.log('前往:', child.router)">{{ child.name }}</NuxtLink>
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue'

type DataList = {
  name: string
  router: string
}

const dataList: DataList[][] = [
  [
    { name: '日一食', router: '/' },
    { name: '關於日一食', router: 'aboutView' },
    { name: '我們的承諾', router: '/' },
    { name: '選單', router: '/' },
  ],
  [
    { name: '店鋪資訊', router: '/' },
    { name: '商店資訊', router: '/' },
    { name: '招募資訊', router: '/' },
  ],
]
</script>
