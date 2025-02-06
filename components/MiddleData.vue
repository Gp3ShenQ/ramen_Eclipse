<template>
  <div></div>
  <!-- <div class="bg-cover bg-center mt-[1500px] w-full h-[1500px]" style="background-image: url('/layout/background6.png')"> -->
  <!-- <img class="w-full h-full" src="/layout/background6.png" alt="" /> -->

  <!-- <div class="flex justify-center w-full h-full video-area">
      <div class="relative">
        <div class="top-0 left-0 absolute w-full h-full mask"></div> -->
  <!-- <video class="w-full h-full object-cover" autoplay muted>
          <source src="/videoArea/ramen_video_first.mp4" type="video/mp4" />
        </video> -->
  <!-- </div>
    </div> -->
  <!-- </div> -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const videoBoxSize = () => {
//   gsap.to('.video-area', {
//     scrollTrigger: {
//       trigger: '.video-area',
//       start: 'top 40%', // 動畫從元素頂部到達視窗底部 80% 開始
//       end: 'top', // 動畫到元素頂部到達視窗頂部 10% 結束
//       scrub: true,
//       // markers: true,

//       onUpdate: (self) => {
//         const progressWidth = 50 + self.progress * 50
//         gsap.to('.video-area', { width: `${progressWidth}%` })

//         // 更新 mask 的透明度
//         const maskOpacity = self.progress * 0.5
//         gsap.to('.mask', { opacity: maskOpacity })

//         if (self.progress >= 1) {
//           // 當進度為 1（即滾動到頂部）時，設置為 fixed
//           gsap.set('.video-area', { position: 'fixed', top: '0', left: '0', width: '100%' })
//           gsap.set('.mask', { position: 'fixed', top: '0', left: '0', width: '100%' })
//         } else if (self.progress === 0) {
//           // 當進度為 0（即滾動到最上面）時，設置透明度為 0
//           gsap.set('.mask', { opacity: 0 })
//         } else {
//           // 當進度不為 1 時，恢復為正常的 position
//           gsap.set('.video-area', { position: 'relative', width: `${progressWidth}%` })
//           gsap.set('.mask', { position: 'absolute' })
//         }
//       },
//     },
//   })
// }

onMounted(() => {
  // videoBoxSize()
  // 強制更新 ScrollTrigger 計算
  // ScrollTrigger.refresh()
})
</script>

<style scoped lang="scss">
.video-area {
  width: 70%;
  min-width: 70%; // 設置初始寬度為 50%
  transition: width 0.01s ease;
}

.mask {
  background-color: black;
  opacity: 0; // 初始設置為透明
  transition: opacity 0.5s ease; // 添加透明度過渡效果
}
</style>
