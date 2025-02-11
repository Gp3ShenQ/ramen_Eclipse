<template>
  <div class="relative mb-40 w-full">
    <div class="z-[2] flex gap-20 pt-30 pl-30 w-full max-[1200px]:justify-between max-[720px]:pl-5 max-[720px]:justify-center max-[720px]:gap-0">
      <div class="">
        <img class="w-full max-w-[500px]" src="/public/storeInformation/store_title.png" alt="" />
      </div>

      <div class="-mt-50 max-[720px]:-mt-30">
        <img class="w-full max-w-[150px]" src="/public/storeInformation/store_title_text.png" alt="" />
      </div>
    </div>

    <div class="flex mt-30 justify-center w-full px-5">
      <div class="en-font-700 text-white gap-20 flex max-[576px]:flex-col items-center text-xl leading-10">
        <div class="">
          <p class="text-[#E2DAB2] text-4xl en-font-700">炭火香氣、濃郁豚骨的香醇味道</p>
          <p>　　平靜的牆紙和柔和的燈光營造出舒適的氛圍。</p>
          <p>　　一樓設有吧台座位，二樓設有半開放式包廂，</p>
          <p>　　無論是個人或團體，都可以享受舒適的用餐環境。</p>
        </div>
        <div class="w-full max-w-[600px]">
          <img src="/public/storeInformation/store_image3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="flex justify-center w-full">
      <div class="p-5 max-w-[350px] text-white flex justify-center mt-10 w-full flex-col items-center border-solid border-gray-500 border-[1px]">
        <p>安裝除臭設備，減少臭味</p>
        <p>本店安裝了防止烤肉味道積聚的裝置。</p>
      </div>
    </div>
    <div class="flex mt-10 justify-center w-full px-5">
      <div class="en-font-700 text-white gap-20 flex items-center text-xl leading-10 max-[576px]:flex-col">
        <div class="w-full max-w-[600px]">
          <img src="/public/storeInformation/store_image2.png" alt="" />
        </div>
        <div class="">
          <div class="w-full max-w-[300px]">
            <img src="/public/storeInformation/store_bar.png" alt="" />
          </div>
          <p>您可以直接在長長的木櫃上享受炭火的溫暖</p>
          <p>一進店，就會看到一個可以坐八個人的長長的櫃檯。</p>
          <p>無論您是獨自一人還是情侶，都可以隨意使用此設施。</p>
          <p>一邊觀看烹飪過程，一邊享用美食。</p>
        </div>
      </div>
    </div>
    <div class="flex mt-10 justify-center w-full px-5 mb-20">
      <div class="en-font-700 text-white gap-20 flex items-center text-xl leading-10 max-[576px]:flex-col w-full justify-around">
        <div class="w-full max-w-[500px]">
          <img src="/public/storeInformation/store_image4.png" alt="" />
        </div>
        <div class="">
          <div class="">
            <div class="w-full max-w-[150px]">
              <img src="/public/storeInformation/store_set.png" alt="" />
            </div>
            <p>私人桌席可供</p>
            <p>小型或大型團體放鬆。</p>
            <p>半開放式包廂，兼具部分隱密性。</p>
          </div>
          <div class="w-full max-w-[400px] mt-20">
            <img src="/public/storeInformation/store_image1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <middleSwiper :entrance="'store'" />
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

import middleSwiper from '@/components/aboutComponents/middleSwiper.vue'
</script>
