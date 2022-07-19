<script setup>
import { ref } from 'vue';

const isHamburgerMenuOpen = ref(false);

const toggleMenu = () => {
  isHamburgerMenuOpen.value = !isHamburgerMenuOpen.value;
}
</script>

<template>
  <button @click="toggleMenu" class="grid overflow-hidden place-items-center cursor-pointer w-9 h-9"
    ref="hamburgerMenu">
    <div :class="{ '-rotate-45 translate-y-3': isHamburgerMenuOpen }"
      class="w-9 h-1 bg-white  transition-transform duration-300">
    </div>
    <div :class="{ 'translate-x-12': isHamburgerMenuOpen }" class="w-9 h-1 bg-white  transition-transform duration-300">
    </div>
    <div :class="{ 'rotate-45 -translate-y-3': isHamburgerMenuOpen }"
      class="w-9 h-1 bg-white  transition-transform duration-300">
    </div>
  </button>
</template>