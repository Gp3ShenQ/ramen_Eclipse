<template>
  <div class="flex justify-around gap-10 max-[530px]:mt-20 px-40 max-[1000px]:px-10 max-[1200px]:px-30 pt-30 max-[530px]:pt-0 w-full">
    <div>
      <img class="mb-5 border-[#D3D5D4] border-b-[4px] border-double w-full max-w-[150px]" src="/public/menu/price_title_niku.png" alt="" />
      <div>
        <template v-for="item in menuNiku" :key="item.name">
          <div class="flex justify-between en-font-700 text-white text-lg leading-10">
            <div>
              {{ item.name }}
            </div>
            <div>{{ item.price }}</div>
          </div>
        </template>
      </div>
    </div>
    <div class="max-[400px]:mt-1.5 pl-120 max-[1300px]:pl-0">
      <img class="-mt-80 max-[1300px]:-mt-12 mb-5 border-[#D3D5D4] border-b-[4px] border-double w-full max-w-[170px]" src="/public/menu/price_title_ramen.png" alt="" />
      <template v-for="item in menuRamen" :key="item.name">
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
</template>

<script setup lang="ts">
import {} from 'vue'

const menuNiku = [
  {
    name: '豚串焼き',
    price: 230,
  },
  {
    name: '牛肉串焼き',
    price: 230,
  },
  {
    name: '鶏の串焼き',
    price: 230,
  },
  {
    name: '雞柳',
    price: 170,
  },
  {
    name: '豚醬燒',
    price: 250,
  },
  {
    name: '薑燒味豚肉',
    price: 260,
  },
  {
    name: '山賊豚肉',
    price: 290,
  },
]

const menuRamen = [
  {
    name: '豚味',
    price: 300,
  },
  {
    name: '醬油',
    price: 300,
  },
  {
    name: '味噌',
    price: 300,
  },
  {
    name: '辛味',
    price: 300,
  },
  {
    name: '蔥味',
    price: 300,
  },
]
</script>
