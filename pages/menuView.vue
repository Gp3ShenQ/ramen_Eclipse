<template>
  <div class="relative w-full">
    <div class="flex items-end gap-10 max-[530px]:-mt-20 px-40 max-[1000px]:px-10 max-[1200px]:px-30 pt-30 max-[530px]:pt-0 w-full">
      <div class="w-full max-w-[200px]">
        <img src="/public/menu/menu_title.png" alt="" />
      </div>
      <div class="w-full max-w-[600px]">
        <img src="/public/menu/menu_ramen.png" alt="" />
      </div>
    </div>
    <firstMenu />
    <div class="flex justify-around mt-30 max-[820px]:px-5 w-full">
      <div class="flex mt-20">
        <div class="w-full max-w-[300px]">
          <img src="/public/menu/senMenu_img1.png" alt="" />
        </div>
        <div class="-mt-30 -ml-10 w-full max-w-[200px]">
          <img src="/public/menu/senMenu_img2.png" alt="" />
        </div>
      </div>
      <div class="-mt-70 max-[1300px]:mt-0 w-full max-w-[300px]">
        <img src="/public/menu/senMenu_img3.png" alt="" />
      </div>
    </div>
    <secondMenu />
    <thirdMenu />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

import firstMenu from '@/components/menuComponents/firstMenu.vue'
import secondMenu from '@/components/menuComponents/secondMenu.vue'
import thirdMenu from '@/components/menuComponents/thirdMenu.vue'

const commonStore = useCommonStore()
const { menuBackground } = storeToRefs(commonStore)

const initMenuBackground = () => {
  menuBackground.value = true
}

onMounted(() => {
  initMenuBackground()
})
</script>
