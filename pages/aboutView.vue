<template>
  <div class="relative w-full">
    <div class="flex justify-center gap-10 max-[530px]:-mt-20 px-40 max-[1000px]:px-10 max-[1200px]:px-30 pt-30 max-[530px]:pt-0 w-full">
      <div>
        <img class="w-full max-w-[100px]" src="/public/about/about.png" alt="" />
      </div>
      <div>
        <img class="w-full max-w-[500px]" src="/public/MiddleData/business_card.png" alt="" />
      </div>
    </div>
    <div ref="promiseTop" class="flex flex-col items-center gap-20 px-20 max-[768px]:px-5 pt-10 en-font-700 text-[#E2DAB2] text-center">
      <div class="">
        <div class="mb-10 text-3xl leading-10">歡迎來到【日一食】——極致拉麵與燒肉體驗</div>
        <p>在【日一食】，我們嚴選上等食材，融合傳統與創新，只為帶給您最純粹的日式美味。</p>
      </div>
      <div>
        <div class="mb-10 text-3xl leading-10">湯頭的靈魂，職人的堅持</div>
        <p>我們的拉麵湯頭每日精燉超過 12 小時， 使用新鮮豚骨、雞骨與昆布熬製， 濃厚順口，每一口都是溫暖與滿足。</p>
        <p class="pt-5">手工拉麵嚴格把關口感， Q 彈有勁，與湯頭完美融合， 讓人忍不住一口接一口。</p>
      </div>
      <middleSwiper />
      <div>
        <div class="mb-10 text-3xl leading-10">炭火燒肉，極致享受</div>
        <p>選用 A5 和牛、特選豬五花與嚴選海鮮， 炭火直烤，鎖住肉汁與鮮甜， 每一口都是香氣四溢的美味饗宴。</p>
        <p class="pt-5">我們精心調配日式燒肉醬， 搭配獨家秘製醃料， 讓燒肉更添層次，帶來無與倫比的口感體驗。</p>
      </div>
      <div>
        <div class="mb-10 text-3xl leading-10">日式職人精神，打造無與倫比的用餐體驗</div>
        <p class="pt-5">在【日一食】，我們堅持食材品質與料理細節， 不論是一碗拉麵，或是一盤燒肉， 都希望能帶給您最道地的日式風味。</p>
      </div>
      <div class="mb-20 text-2xl">
        <p>我們邀請您來【日一食】， 感受最真摯的美食饗宴！</p>
      </div>
    </div>
    <sakeArea />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

import sakeArea from '@/components/aboutComponents/sakeArea.vue'
import middleSwiper from '@/components/aboutComponents/middleSwiper.vue'

const commonStore = useCommonStore()
const { promiseType } = storeToRefs(commonStore)

const promiseTop = ref<HTMLElement | null>(null)

watch(
  () => promiseType.value,
  (newPromise) => {
    setTimeout(() => {
      if (newPromise) {
        promiseTop.value?.scrollIntoView({ behavior: 'smooth' })
        promiseType.value = false
      }
    }, 100)
  },
  { immediate: true },
)

onMounted(() => {
  if (promiseType.value) {
    promiseTop.value?.scrollIntoView({ behavior: 'smooth' })
  }
})
</script>
