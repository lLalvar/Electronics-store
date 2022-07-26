<script setup>
import { useHamburgerMenu } from '../store';
import Search from './Search.vue'
import HamburgerMenu from './HamburgerMenu.vue'
import Languages from './Languages.vue'
import Categories from './Categories.vue'
import Cart from './Cart.vue';
import Wishlist from './Wishlist.vue';

const toggle = useHamburgerMenu();

</script>

<template>
  <header class="border-b-[1px] text-white fixed w-full top-0 z-50">
    <div class="absolute top-0 left-0 w-full h-[70px] md:h-[100px] bg-primary opacity-[.98] -z-10">
    </div>
    <div class="max-w-screen-2xl mx-auto h-[70px] md:h-[100px] p-4 flex items-center gap-2 sm:gap-5 lg:gap-8">
      <router-link to="/">
        <div @click="toggle.hideMenu" class="w-16 md:w-20 cursor-pointer">
          <img src="../../public/assets/logo.png" alt="logo">
        </div>
      </router-link>
      <nav class="flex-1">
        <ul class="flex items-center gap-4 justify-end">
          <li class="hidden md:block flex-1">
            <Categories />
          </li>
          <li>
            <Search class="hidden md:flex" />
          </li>
          <li class="hidden md:flex">
            <Wishlist />
          </li>
          <li class="hidden md:flex">
            <Cart />
          </li>
          <li class="hidden md:flex">
            <Languages />
          </li>
          <li class="md:hidden">
            <HamburgerMenu />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template> 

<style>
</style>