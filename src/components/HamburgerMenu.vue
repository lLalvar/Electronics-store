<script setup>
import useWindowWidth from '../hooks/useWindowWidth'
import { ref, onMounted, onUnmounted } from 'vue';
import Cart from './Cart.vue';
import Wishlist from './Wishlist.vue';
import Languages from './Languages.vue';
import Categories from './Categories.vue';

const width = useWindowWidth()

const isHamburgerMenuOpen = ref(false);

window.addEventListener('resize', () => {
  if (width.value > 767) {
    isHamburgerMenuOpen.value = false
    document.querySelector('body').style.overflow = 'visible';
  }
})

screen.orientation.addEventListener('change', () => {
  if (width.value > 767) {
    isHamburgerMenuOpen.value = false
    document.querySelector('body').style.overflow = 'visible';
  }
})

const toggleMenu = () => {
  isHamburgerMenuOpen.value = !isHamburgerMenuOpen.value;
  if (isHamburgerMenuOpen.value) {
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = 'visible';
  }
}
</script>

<template>
  <div>
    <button @click="toggleMenu" class="grid overflow-hidden place-items-center cursor-pointer w-9 h-9 z-[20]"
      ref="hamburgerMenu">
      <div :class="{ '-rotate-45 translate-y-3': isHamburgerMenuOpen }"
        class="w-9 h-1 bg-white  transition-transform duration-300">
      </div>
      <div :class="{ 'translate-x-12': isHamburgerMenuOpen }"
        class="w-9 h-1 bg-white  transition-transform duration-300">
      </div>
      <div :class="{ 'rotate-45 -translate-y-3': isHamburgerMenuOpen }"
        class="w-9 h-1 bg-white  transition-transform duration-300">
      </div>
    </button>
    <div v-if="isHamburgerMenuOpen" class="absolute top-[120px] left-0 flex flex-col items-center w-full">
      <div class="fixed top-[101px] left-0 w-screen h-screen bg-primary -z-10 opacity-[.98]"></div>
      <ul class="absolute flex-col gap-2 w-full items-center">
        <li class="text-xl">
          <Cart />
        </li>
        <li>
          <Wishlist />
        </li>
        <li>
          <Languages />
        </li>
        <li class="mt-8 w-full">
          <Categories />
        </li>
      </ul>
    </div>
  </div>
</template>
