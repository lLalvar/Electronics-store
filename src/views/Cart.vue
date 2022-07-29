<script setup>
import { ref } from 'vue'

const itemCount = ref(1)

const increment = () => {
  itemCount.value++
}
const decrement = () => {
  if (itemCount.value > 1) {
    itemCount.value--
  }
}


</script>
<template>
  <div
    class="max-w-screen-lg mx-auto p-4 py-8 flex flex-col-reverse md:flex-row gap-8 items-start justify-end font-semibold min-h-[calc(100vh-365px)]">

    <div class="flex flex-col gap-8 w-full">

      <div class="relative border border-primary flex min-h-[200px]">
        <div class="flex items-center justify-center">
          <img src="../../public/assets/iphone.png" alt="iphone">
        </div>
        <div class="flex flex-col md:flex-row px-2 md:px-4 p-4 gap-4 items-start justify-between w-full">
          <h2 class="text-sm md:text-base">Apple iPhone 13 Pro Max <br> (256 GB, Alpine Green)</h2>
          <div class="flex gap-2">
            <div class="flex items-start justify-between bg-slate-50 h-6 lg:h-8">
              <button @click="decrement"
                class="group flex justify-center items-center h-full w-6 lg:w-8 hover:bg-primary transition">
                <div class="h-[3px] w-3 bg-primary group-hover:bg-white transition"></div>
              </button>
              <div class="h-full w-6 lg:w-8 flex items-center justify-center">{{ itemCount }}</div>
              <button @click="increment"
                class="group relative flex justify-center items-center h-full w-6 lg:w-8 hover:bg-primary transition">
                <div class="h-[3px] w-3 bg-primary group-hover:bg-white transition"></div>
                <div class="absolute rotate-90 h-[3px] w-3 bg-primary group-hover:bg-white transition"></div>
              </button>
            </div>
            <div class="flex items-center justify-center">
              <h4>1250$</h4>
            </div>
          </div>
        </div>
        <button class="bg-primary p-2 absolute right-4 bottom-4 cursor-pointer hover:opacity-95 transition"><img
            src="../../public/assets/trash.svg" alt=""></button>
      </div>

      <div class="relative border border-primary flex min-h-[200px]">
        <div class="flex items-center justify-center">
          <img src="../../public/assets/iphone.png" alt="iphone">
        </div>
        <div class="flex flex-col md:flex-row px-2 md:px-4 p-4 gap-4 items-start justify-between w-full">
          <h2 class="text-sm md:text-base">Apple iPhone 13 Pro Max <br> (256 GB, Alpine Green)</h2>
          <div class="flex gap-2">
            <div class="flex items-start justify-between bg-slate-50 h-6 lg:h-8">
              <button @click="decrement"
                class="group flex justify-center items-center h-full w-6 lg:w-8 hover:bg-primary transition">
                <div class="h-[3px] w-3 bg-black group-hover:bg-white transition"></div>
              </button>
              <div class="h-full w-6 lg:w-8 flex items-center justify-center">{{ itemCount }}</div>
              <button @click="increment"
                class="group relative flex justify-center items-center h-full w-6 lg:w-8 hover:bg-primary transition">
                <div class="h-[3px] w-3 bg-black group-hover:bg-white transition"></div>
                <div class="absolute rotate-90 h-[3px] w-3 bg-black group-hover:bg-white transition"></div>
              </button>
            </div>
            <div class="flex items-center justify-center">
              <h4>1250$</h4>
            </div>
          </div>
        </div>
        <button class="bg-primary p-2 absolute right-4 bottom-4 cursor-pointer hover:opacity-95 transition"><img
            src="../../public/assets/trash.svg" alt=""></button>
      </div>

    </div>

    <div
      class="md:sticky md:top-32 w-full md:max-w-[200px] h-[200px] border border-primary flex flex-col justify-between">
      <div class="flex justify-between p-4">
        <h3>Order Total</h3>
        <h3>2500$</h3>
      </div>
      <button class="bg-primary text-white w-full p-2 hover:opacity-95 transition">Proceed to Checkout</button>
    </div>
  </div>
</template>