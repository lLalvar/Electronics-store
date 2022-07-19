<script setup>
import Search from './Search.vue'
import HamburgerMenu from './HamburgerMenu.vue'
import Languages from './Languages.vue'
import Categories from './Categories.vue'




</script>

<template>
  <header class="border-b-[1px] text-white fixed w-full top-0 z-10  backdrop-blur-md">
    <div class="absolute top-0 left-0 w-full h-[100px] bg-primary opacity-90 -z-10">
    </div>
    <div class="max-w-screen-2xl mx-auto  h-[100px] p-4 flex items-center gap-2 sm:gap-5 lg:gap-8">
      <div class="w-20 cursor-pointer">
        <img src="../assets/logo.png" alt="logo">
      </div>
      <nav class="flex-1">
        <ul class="flex items-center gap-4 justify-end">
          <li class="hidden md:block flex-1">
            <Categories />
          </li>
          <li>
            <Search />
          </li>
          <li class="hidden md:flex gap-1 cursor-pointer hover:opacity-80 transition">
            <img src="../assets/heart.svg" alt="heart" class="w-6">
            <div class="text-lg">
              Wishlist
            </div>
          </li>
          <li class="hidden md:flex gap-1 cursor-pointer hover:opacity-80 transition">
            <img src="../assets/cart.svg" alt="cart" class="w-6">
            <div class="text-lg">
              Cart
            </div>
          </li>
          <li>
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