<template>
  <div class="relative flex justify-around gap-10 max-[530px]:mt-20 mb-30 px-40 max-[1000px]:px-10 max-[1200px]:px-30 pt-30 max-[530px]:pt-0 w-full">
    <div class="z-[2] relative flex max-[700px]:flex-col gap-30">
      <div class="flex gap-30 max-[450px]:gap-10">
        <div>
          <img class="mb-5 border-[#D3D5D4] border-b-[4px] border-double w-full max-w-[150px]" src="/public/menu/price_title_vegetable.png" alt="" />
          <div>
            <template v-for="item in menuVegetables" :key="item.name">
              <div class="flex justify-between en-font-700 text-white text-lg leading-10">
                <div>
                  {{ item.name }}
                </div>
                <div>{{ item.price }}</div>
              </div>
            </template>
          </div>
        </div>
        <div>
          <img class="mb-5 border-[#D3D5D4] border-b-[4px] border-double w-full max-w-[150px]" src="/public/menu/price_title_rice.png" alt="" />
          <div>
            <template v-for="item in menuRice" :key="item.name">
              <div class="flex justify-between en-font-700 text-white text-lg leading-10">
                <div>
                  {{ item.name }}
                </div>
                <div>{{ item.price }}</div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="mt-2.5 pl-50 max-[1300px]:pl-0">
        <img class="-mt-80 max-[1300px]:-mt-0 mb-5 border-[#D3D5D4] border-b-[4px] border-double w-full max-w-[170px]" src="/public/menu/price_title_soup.png" alt="" />
        <template v-for="item in menuSoup" :key="item.name">
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
    <div class="top-50 right-50 absolute opacity-40 max-w-[300px]">
      <img src="/public/menu/menu_middle_sake.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
const menuVegetables = [
  {
    name: '毛豆',
    price: 80,
  },
  {
    name: '醋溜泡菜',
    price: 80,
  },
  {
    name: '醃製番茄',
    price: 60,
  },
  {
    name: '甜菜根蒸',
    price: 90,
  },
  {
    name: '涼拌海帶芽',
    price: 60,
  },
  {
    name: '和風醬時蔬',
    price: 150,
  },
  {
    name: '醋漬小黃瓜',
    price: 90,
  },
]

const menuRice = [
  {
    name: '燒肉丼',
    price: 230,
  },
  {
    name: '牛肉丼',
    price: 230,
  },
  {
    name: '鶏の丼',
    price: 230,
  },
  {
    name: 'TGK',
    price: 90,
  },
  {
    name: '烤飯糰',
    price: 130,
  },
  {
    name: '鹽烤飯糰',
    price: 130,
  },
]

const menuSoup = [
  {
    name: '鶏の湯',
    price: 180,
  },
  {
    name: '豚の湯',
    price: 180,
  },
  {
    name: '味噌魚湯',
    price: 180,
  },
]
</script>
