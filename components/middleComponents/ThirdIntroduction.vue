<template>
  <div class="flex max-[1000px]:flex-col">
    <div class="max-[1000px]:hidden py-20 w-1/3">
      <NuxtImg class="max-w-[300px]" src="/MiddleData/ramen1.jpg" alt="" />
    </div>
    <div class="flex justify-center items-center max-[1000px]:mt-20 max-[1000px]:mb-20 w-1/3 max-[1000px]:w-full" @click="goPages('aboutView')">
      <button
        class="before:top-[-100%] hover:before:top-0 after:bottom-[-100%] hover:after:bottom-0 before:left-0 after:left-0 before:z-[-1] after:z-[-1] before:absolute after:absolute relative bg-transparent before:bg-[#E2DAB2] after:bg-[#E2DAB2] before:opacity-0 hover:before:opacity-60 after:opacity-0 hover:after:opacity-60 shadow-[0px_2px_6px_#E2DAB2] border border-[#E2DAB2] border-solid rounded-[30px] w-40 before:w-full after:w-full h-16 before:h-full after:h-full overflow-hidden font-bold text-[#E2DAB2] hover:text-black text-base text-center before:content-[''] after:content-[''] before:rotate-45 hover:before:rotate-0 after:rotate-45 hover:after:rotate-0 before:origin-center after:origin-center transition-colors before:transition-all after:transition-all duration-300 before:duration-500 after:duration-500 ease-linear before:ease-linear after:ease-linear cursor-pointer"
      >
        詳しくはこちら
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

const router = useRouter()

const goPages = (item: string) => {
  router.push(item)
}
</script>
