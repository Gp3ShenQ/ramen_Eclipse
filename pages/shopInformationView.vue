<template>
  <div class="relative mt-30 w-full">
    <div class="flex max-[900px]:items-center max-[900px]:items-start gap-20 max-[530px]:gap-0 max-[900px]:gap-10 p-10 max-[900px]:p-2 w-full">
      <div class="-mt-30 max-[900px]:-mt-10 w-full max-w-[200px] max-[900px]:max-w-[100px]">
        <img class="" src="/public/shopInformation/shop_title.png" alt="" />
      </div>
      <div class="w-full max-w-[800px]">
        <img src="/public/MiddleData/ramen_house.png" alt="" />
      </div>
    </div>
    <div class="mt-20 p-10 w-full">
      <div class="flex justify-center w-full">
        <img class="w-full max-w-[250px]" src="/public/topHeader/Mark.png" alt="" />
      </div>
      <div class="flex min-[900px]:ml-50">
        <div class="flex gap-5 en-font-700 text-white text-xs min-[900px]:text-2xl leading-20">
          <div>
            <template v-for="item in shopTitle" :key="item.title">
              <p>{{ item.title }}</p>
            </template>
          </div>
          <div>
            <template v-for="item in shopData" :key="item.innerData">
              <p>
                {{ item.innerData }}
              </p>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="relative bg-[url('/public/shopInformation/middle_background.png')] mt-10 p-20 max-[900px]:p-5 w-full">
      <div class="z-[2] relative flex max-[600px]:flex-col justify-center max-[900px]:justify-center items-center gap-0 gap-30 max-[900px]:gap-5 w-full max-[900px]:">
        <div class="w-full max-w-[200px]">
          <img src="/public/shopInformation/shop_position_text.png" alt="" />
        </div>
        <div class="flex justify-center w-full max-w-[700px]">
          <iframe
            :width="iframeWidth"
            :height="iframeHeight"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1287.092119328943!2d120.68933373872144!3d24.15607728261177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d60a776535f%3A0xb31626affe74e842!2z5paw5rCR6auY5LitKOS4ieawkei3ryk!5e0!3m2!1szh-TW!2stw!4v1739262399294!5m2!1szh-TW!2stw"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="bg-[url('/public/shopInformation/bottom_background.png')] relative">
      <div class="relative flex justify-center items-center w-full h-full">
        <img src="/public/shopInformation/shop_open_text.png" alt="" />
      </div>
      <div class="flex max-[600px]:flex-col justify-center gap-10 px-5 pb-30 w-full">
        <div>
          <p class="en-font-700 text-2xl">聯絡店鋪</p>
          <p class="en-font-700 max-[600px]:text-5xl text-7xl">04-22022202</p>
        </div>
        <div class="flex flex-col gap-5">
          <div>
            <p class="en-font-700 text-2xl">營業時間</p>
            <p class="en-font-700 text-3xl">11:00 ～ 23:00 (last Oder 22:30)</p>
          </div>
          <div>
            <p class="en-font-700 text-2xl">定休日</p>
            <p class="en-font-700 text-3xl">日曜日</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const shopTitle = [
  {
    title: '店鋪名',
  },
  {
    title: '聯絡店鋪',
  },
  {
    title: '店鋪地址',
  },
  {
    title: '營業時間',
  },
  {
    title: '定休日',
  },
  {
    title: '總席數',
  },
]

const shopData = [
  {
    innerData: '日一食',
  },
  {
    innerData: '04-22022202',
  },
  {
    innerData: '台中市西屯區日一食路1號',
  },
  {
    innerData: '11:00 ～ 23:00 (last Oder 22:30)',
  },
  {
    innerData: '日曜日',
  },
  {
    innerData: '200席',
  },
]

const iframeWidth = ref<number>(300)
const iframeHeight = ref<number>(350)

const updateSlidesPerView = () => {
  iframeWidth.value = window.innerWidth <= 990 ? 300 : 600
  iframeHeight.value = window.innerWidth <= 990 ? 300 : 600
}

onMounted(() => {
  updateSlidesPerView()
  window.addEventListener('resize', updateSlidesPerView)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlidesPerView)
})
</script>
