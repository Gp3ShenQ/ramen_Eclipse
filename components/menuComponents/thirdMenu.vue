<template>
  <div class="relative flex max-[800px]:flex-col max-[800px]:items-center p-20 max-[800px]:p-5 w-full">
    <div class="z-[2] w-full max-w-[500px]">
      <img src="/public/menu/thirdMenu_img4.png" alt="" />
    </div>
    <div class="z-[2] m-20 w-full">
      <div class="flex justify-center gap-30 max-[1000px]:gap-10 ml-10 max-[800px]:ml-0 w-full">
        <div>
          <img class="mb-5 border-[#D3D5D4] border-b-[4px] border-double w-full max-w-[200px]" src="/public/menu/price_title_plum.png" alt="" />
          <template v-for="item in menuPlum" :key="item.name">
            <div class="flex justify-between en-font-700 text-white text-lg leading-10">
              <div>
                {{ item.name }}
              </div>
              <div>
                {{ item.price }}
              </div>
            </div>
          </template>
        </div>
        <div class="min-[1500px]:flex min-[1500px]:gap-30">
          <div>
            <img class="mt-2 mb-5 border-[#D3D5D4] border-b-[4px] border-double w-full max-w-[200px]" src="/public/menu/price_title_sake.png" alt="" />
            <template v-for="item in menuSake" :key="item.name">
              <div class="flex justify-between en-font-700 text-white text-lg leading-10">
                <div>
                  {{ item.name }}
                </div>
                <div>
                  {{ item.price }}
                </div>
              </div>
            </template>
          </div>
          <div>
            <img class="mt-10 min-[1500px]:-mt-9 mb-5 border-[#D3D5D4] border-b-[4px] border-double w-full max-w-[200px]" src="/public/menu/price_title_drink.png" alt="" />
            <template v-for="item in menuDrink" :key="item.name">
              <div class="flex justify-between en-font-700 text-white text-lg leading-10">
                <div>
                  {{ item.name }}
                </div>
                <div>
                  {{ item.price }}
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-end max-[1500px]:justify-center opacity-30 -mt-100 w-full">
    <img class="w-full max-w-[500px]" src="/public/menu/menu_house.png" alt="" />
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

const menuPlum = [
  {
    name: '梅子',
    price: 80,
  },
  {
    name: '李子',
    price: 80,
  },
  {
    name: '檸檬',
    price: 80,
  },
  {
    name: '萊姆',
    price: 80,
  },
  {
    name: '柚子',
    price: 120,
  },
  {
    name: '石榴',
    price: 120,
  },
]

const menuSake = [
  {
    name: '冷清酒',
    price: 160,
  },
  {
    name: '琵琶湖蒸餾',
    price: 330,
  },
  {
    name: '高球',
    price: 230,
  },
]

const menuDrink = [
  {
    name: '可爾必思',
    price: 80,
  },
  {
    name: '烏龍茶',
    price: 80,
  },
  {
    name: '可樂',
    price: 80,
  },
  {
    name: '薑汁汽水',
    price: 80,
  },
  {
    name: '柚子',
    price: 80,
  },
  {
    name: '碳酸水',
    price: 80,
  },
]
</script>
