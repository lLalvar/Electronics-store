<script setup>
import useWindowWidth from '../hooks/useWindowWidth'
import Cart from './Cart.vue';
import Wishlist from './Wishlist.vue';
import Languages from './Languages.vue';
import Categories from './Categories.vue';
import { useHamburgerMenu } from '../store';

const toggle = useHamburgerMenu();

const width = useWindowWidth()


window.addEventListener('resize', () => {
  if (width.value > 766) {
    toggle.isHamburgerMenuOpen = false
    document.querySelector('body').style.overflow = 'visible';
  }
})

screen.orientation.addEventListener('change', () => {
  if (width.value > 766) {
    toggle.isHamburgerMenuOpen.value = false
    document.querySelector('body').style.overflow = 'visible';
  }
})

</script>

<template>
  <div>
    <button @click="toggle.toggleMenu" class="grid overflow-hidden place-items-center cursor-pointer w-9 h-9 z-[20]"
      ref="hamburgerMenu">
      <div :class="{ '-rotate-45 translate-y-3': toggle.isHamburgerMenuOpen }"
        class="w-9 h-1 bg-white  transition-transform duration-300">
      </div>
      <div :class="{ 'translate-x-12': toggle.isHamburgerMenuOpen }"
        class="w-9 h-1 bg-white  transition-transform duration-300">
      </div>
      <div :class="{ 'rotate-45 -translate-y-3': toggle.isHamburgerMenuOpen }"
        class="w-9 h-1 bg-white  transition-transform duration-300">
      </div>
    </button>
    <div v-if="toggle.isHamburgerMenuOpen" class="absolute top-[100px] left-0 flex flex-col items-center w-full">
      <div class="fixed top-[71px] left-0 w-screen h-screen bg-primary -z-10 opacity-[.98]"></div>
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
