<script setup>
import { createPopper } from '@popperjs/core';
import { ref, onMounted } from 'vue';
import Search from './Search.vue'
const categories = ref()
const tooltipDiv = ref()
const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

onMounted(() => {
  createPopper(categories.value, tooltipDiv.value, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 30],
        },
      },
    ],
  });

  function show() {
    tooltip.setAttribute('data-show', '');
    // popperInstance.update();
  }

  function hide() {
    tooltip.removeAttribute('data-show');
  }

  showEvents.forEach((event) => {
    categories.value.addEventListener(event, show);
  });

  hideEvents.forEach((event) => {
    categories.value.addEventListener(event, hide);
  });
})

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <header class="bg-primary  text-white">
    <div class="max-w-screen-2xl mx-auto  h-[100px] p-4  flex items-center gap-2 md:gap-8">
      <div class="w-20">
        <img src="../assets/logo.png" alt="logo">
      </div>
      <nav class="flex-1">
        <ul class="flex items-center gap-4 justify-end">
          <li class="hidden  md:block flex-1">
            <div class="flex ">
              <div ref="categories" class="flex gap-1 cursor-pointer hover:opacity-80 transition">
                <div class="text-xl">Categories</div>
                <img class="translate-y-[3px]" src="../assets/arrow.svg" alt="arrow down">
              </div>
            </div>
            <ul id="tooltip" ref="tooltipDiv" role="tooltip" class="bg-white text-primary z-20">
              <li>Computers</li>
              <li>Laptops</li>
              <li>Phones</li>
              <li>Tablets</li>
              <li>TVs</li>
              <li>Monitors</li>
            </ul>
          </li>
          <li>
            <Search />
          </li>
          <li class="hidden md:flex gap-1 cursor-pointer hover:opacity-80 transition">
            <img src="../assets/heart.svg" alt="heart">
            <div class="text-xl">
              Wishlist
            </div>
          </li>
          <li class="hidden md:flex gap-1 cursor-pointer hover:opacity-80 transition">
            <img src="../assets/cart.svg" alt="">
            <div class="text-xl">
              Cart
            </div>
          </li>
          <li class="hidden md:flex gap-1 items-center cursor-pointer hover:opacity-80 transition">
            <img class="w-6 h-6" src="../assets/united-kingdom.png" alt="flag">
            <div class="hidden md:block text-xl">
              English
            </div>
            <img class="translate-y-[2px]" src="../assets/arrow.svg" alt="arrow down">
          </li>
          <li @click="toggleMenu" class="grid place-items-center md:hidden cursor-pointer w-11 h-11"
            ref="hamburgerMenu">
            <button>
              <div :class="{ '-rotate-45 translate-y-3': isOpen }"
                class="w-9 h-1 bg-white my-2 transition duration-300">
              </div>
              <div :class="{ 'translate-x-9 opacity-0': isOpen }" class="w-9 h-1 bg-white my-2 transition duration-300">
              </div>
              <div :class="{ 'rotate-45 -translate-y-3': isOpen }"
                class="w-9 h-1 bg-white my-2 transition duration-300"></div>
            </button>
          </li>
        </ul>
      </nav>

    </div>
  </header>
</template> 

<style>
#tooltip {
  display: none;
}

#tooltip[data-show] {
  display: block;
}
</style>