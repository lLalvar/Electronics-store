<script setup>
import useWindowWidth from '../hooks/useWindowWidth'
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'
import { useHamburgerMenu } from '../store';

const toggle = useHamburgerMenu();

const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary')

const width = useWindowWidth()


const categoriesItems = [
  {
    id: uuidv4(),
    name: 'Computers',
    items: ['Workstations', 'Gaming computers', 'Office computers'],
  },
  {
    id: uuidv4(),
    name: 'Laptops',
    items: ['Gaming laptops', 'Office laptops', 'Macbooks'],
  },
  {
    id: uuidv4(),
    name: 'Phones',
  },
  {
    id: uuidv4(),
    name: 'Tablets',
  },
  {
    id: uuidv4(),
    name: 'TVs',
  },
  {
    id: uuidv4(),
    name: 'Monitors',
  }
]

const isCategoriesOpen = ref(false)

const showCategories = () => {
  isCategoriesOpen.value = true
}

const hideCategories = () => {
  isCategoriesOpen.value = false
}

const currentCategory = ref(null)

const toggleNestedCategories = (item, itemIndex) => {
  console.log(item.items);
  if (item.items) {
    if (itemIndex === currentCategory.value) {
      currentCategory.value = null
    } else {
      currentCategory.value = itemIndex
    }
  } else {
    toggle.toggleMenu()
  }
}


</script>

<template>
  <!-- Desktop Categories -->
  <div v-if="width >= 768">
    <div class="flex justify-center md:justify-start">
      <div @mouseenter="showCategories" @mouseleave="hideCategories"
        class="flex gap-1 items-center cursor-pointer hover:opacity-80 transition">
        <div class="text-lg">Categories</div>
        <div><img src="../assets/arrow.svg" alt="arrow down" class="translate-y-[3px]"></div>
      </div>
    </div>
    <!-- Category Dropdown Menu -->
    <div @mouseenter="showCategories" @mouseleave="hideCategories" v-if="isCategoriesOpen" class="md:absolute">
      <div class="h-[10px] md:h-[36px]"></div>
      <ul class=" bg-white text-primary shadow-lg w-screen md:w-40" v-if="isCategoriesOpen">

        <li v-for="(item, index) in categoriesItems" @mouseenter="toggleNestedCategories(item, index)"
          @mouseleave="toggleNestedCategories(item, index)"
          class="relative font-medium px-2 border border-b-slate-300 cursor-pointer">
          <div
            class=" flex gap-1 items-center justify-center md:justify-between md:hover:translate-x-1 transition duration-300">
            <div class="py-2">{{ item.name }}</div>
            <div v-if="item.items" class="md:-rotate-90 translate-y-[2px] md:translate-y-0">
              <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 0.857009C0 0.637688 0.0895118 0.418259 0.268537 0.251116C0.626586 -0.0837054 1.20663 -0.0837054 1.56468 0.251116L5.49964 3.93201L9.43532 0.251116C9.79337 -0.0837054 10.3734 -0.0837054 10.7315 0.251116C11.0895 0.585938 11.0895 1.12835 10.7315 1.46317L6.14843 5.74888C5.79038 6.08371 5.21034 6.08371 4.85229 5.74888L0.269253 1.46317C0.0887958 1.29576 0 1.07638 0 0.857009Z"
                  :fill="primary" />
              </svg>
            </div>
          </div>

          <ul v-if="currentCategory === index"
            class="md:absolute md:right-0 mt-0 md:m-0 md:-top-[1px] md:translate-x-full bg-white text-primary shadow-lg md:w-40">
            <router-link to="/category">
              <li v-for="dropdownItem in item.items" v-if="currentCategory === index" class=" md:relative font-medium px-2 py-2 border border-b-slate-300 cursor-pointer flex items-center
              justify-center md:justify-start gap-2">
                <div class=" flex items-center justify-between md:hover:translate-x-1 transition duration-300">
                  <div>{{ dropdownItem }}</div>
                </div>
              </li>
            </router-link>
          </ul>

        </li>
      </ul>
    </div>
  </div>


  <!-- Mobile Categories -->
  <div v-if="width < 768" class="px-4 w-full">
    <div @mouseenter="showCategories" @mouseleave="hideCategories"
      class="flex justify-center text-xl cursor-pointer hover:opacity-80 transition mb-4">Categories</div>

    <div @mouseenter="showCategories" @mouseleave="hideCategories" class="">
      <ul class="bg-white text-primary shadow-lg max-h-[55vh] overflow-y-auto">

        <li data-toggle="toggle" v-for="(item, index) in categoriesItems" @click="toggleNestedCategories(item, index)"
          class="flex flex-col items-center font-medium px-2 border border-b-slate-300 cursor-pointer">
          <div class=" flex gap-1 items-center justify-center transition duration-300 pointer-events-none">
            <div class="py-2">{{ item.name }}</div>
            <div v-if="item.items" :class="{ 'rotate-180': currentCategory === index }" class="translate-y-[2px]">
              <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 0.857009C0 0.637688 0.0895118 0.418259 0.268537 0.251116C0.626586 -0.0837054 1.20663 -0.0837054 1.56468 0.251116L5.49964 3.93201L9.43532 0.251116C9.79337 -0.0837054 10.3734 -0.0837054 10.7315 0.251116C11.0895 0.585938 11.0895 1.12835 10.7315 1.46317L6.14843 5.74888C5.79038 6.08371 5.21034 6.08371 4.85229 5.74888L0.269253 1.46317C0.0887958 1.29576 0 1.07638 0 0.857009Z"
                  :fill="primary" />
              </svg>
            </div>
          </div>

          <ul v-if="currentCategory === index" class="mt-0 m-4 shadow-md bg-white text-primary w-full max-w-[300px]">
            <router-link to="/category">
              <li @click="toggle.toggleMenu" v-for="dropdownItem in item.items"
                class="font-medium px-2 py-2 border border-b-slate-300 cursor-pointer flex items-center justify-center gap-2">
                <div class="flex items-center justify-between transition duration-300">
                  <div>{{ dropdownItem }}</div>
                </div>
              </li>
            </router-link>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>