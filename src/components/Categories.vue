<script setup>
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'
const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary')


const categoriesItems = [
  {
    id: uuidv4(),
    name: 'Computers',
    items: ['Workstations', 'Gaming computers', 'Office computers'],
    hasDropdown: true,
  },
  {
    id: uuidv4(),
    name: 'Laptops',
    items: ['Gaming laptops', 'Office laptops', 'Macbooks'],
    hasDropdown: true,
  },
  {
    id: uuidv4(),
    name: 'Phones',
    hasDropdown: false,
  },
  {
    id: uuidv4(),
    name: 'Tablets',
    hasDropdown: false,
  },
  {
    id: uuidv4(),
    name: 'TVs',
    hasDropdown: false,
  },
  {
    id: uuidv4(),
    name: 'Monitors',
    hasDropdown: false,
  }
]


const isCategoriesOpen = ref(false)

const showCategories = () => {
  isCategoriesOpen.value = true
}

const hideCategories = () => {
  isCategoriesOpen.value = false
}

const nestedCategories = ref(false)
const activeCategory = ref(null)

const showNestedComputers = (item) => {
  nestedCategories.value = true
  activeCategory.value = item.name
}
const hideNestedCategories = () => {
  nestedCategories.value = false
}
</script>

<template>
  <div class="relative">
    <div class="flex">
      <div @mouseenter="showCategories" @mouseleave="hideCategories"
        class="flex gap-1 items-center cursor-pointer hover:opacity-80 transition">
        <div class="text-lg">Categories</div>
        <div><img src="../assets/arrow.svg" alt="arrow down" class="translate-y-[3px]"></div>
      </div>
    </div>
    <!-- Category Dropdown Menu -->
    <div @mouseenter="showCategories" @mouseleave="hideCategories" v-if="isCategoriesOpen" class="absolute">
      <div class="h-[36px]"></div>
      <ul class=" bg-white text-primary shadow-lg w-40" v-if="isCategoriesOpen">
        <li v-for="item in categoriesItems" @mouseenter="showNestedComputers(item)" @mouseleave="hideNestedCategories"
          class="relative font-medium px-2 py-2 border border-b-slate-300 cursor-pointer">
          <div class=" flex items-center justify-between hover:translate-x-1 transition duration-300">
            <div class="">{{ item.name }}</div>
            <div v-if="item.hasDropdown" class="-rotate-90">
              <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 0.857009C0 0.637688 0.0895118 0.418259 0.268537 0.251116C0.626586 -0.0837054 1.20663 -0.0837054 1.56468 0.251116L5.49964 3.93201L9.43532 0.251116C9.79337 -0.0837054 10.3734 -0.0837054 10.7315 0.251116C11.0895 0.585938 11.0895 1.12835 10.7315 1.46317L6.14843 5.74888C5.79038 6.08371 5.21034 6.08371 4.85229 5.74888L0.269253 1.46317C0.0887958 1.29576 0 1.07638 0 0.857009Z"
                  :fill="primary" />
              </svg>
            </div>
          </div>
          <ul v-if="nestedCategories"
            class="absolute right-0 -top-[1px] translate-x-full bg-white text-primary shadow-lg w-40">
            <li v-for="dropdownItem in item.items" v-if="activeCategory === item.name"
              class="relative font-medium px-2 py-2 border border-b-slate-300 cursor-pointer flex items-center justify-between">
              <div class=" flex items-center justify-between hover:translate-x-1 transition duration-300">
                <div class="">{{ dropdownItem }}</div>

              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>