<script setup>
import { v4 as uuidv4 } from 'uuid';
import { ref, watch } from 'vue';
import AddToCartBtn from '../components/AddToCartBtn.vue';
import useWindowWidth from '../hooks/useWindowWidth';
const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary');
const width = useWindowWidth()

watch(width, () => {
  if (width.value >= 768) {
    isFilterOpen.value = true;
  } else {
    isFilterOpen.value = false;
  }
})

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-filter')) {
    isFilterOpen.value = false;
  }
})

const isFilterOpen = width.value >= 768 ? ref(true) : ref(false);
const toggleFilter = () => {
  if (width.value < 768) {
    isFilterOpen.value = !isFilterOpen.value;
  }
}

const items = [
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max',
    brand: 'iPhone',
    memory: 128,
    ram: 6,
    price: 1250,
    image: './assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max',
    brand: 'iPhone',
    memory: 256,
    ram: 6,
    price: 1050,
    image: './assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max',
    brand: 'iPhone',
    memory: 256,
    ram: 6,
    price: 1050,
    image: './assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max',
    brand: 'iPhone',
    memory: 512,
    ram: 6,
    price: 1150,
    image: './assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max',
    brand: 'iPhone',
    memory: 1024,
    ram: 6,
    price: 1250,
    image: './assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Samsung Galaxy A12',
    brand: 'Samsung',
    memory: 32,
    ram: 2,
    price: 130,
    image: './assets/samsung.jpg'
  },
  {
    id: uuidv4(),
    name: 'Samsung Galaxy A12',
    brand: 'Samsung',
    memory: 64,
    ram: 4,
    price: 160,
    image: './assets/samsung.jpg'
  },
  {
    id: uuidv4(),
    name: 'Samsung Galaxy A12',
    brand: 'Samsung',
    memory: 128,
    ram: 6,
    price: 200,
    image: './assets/samsung.jpg'
  },
]

const filteredItems = ref(items);

const lowestPrice = Math.min(...items.map(item => item.price))
const highestPrice = Math.max(...items.map(item => item.price))

const filters = ref({
  price: [lowestPrice, highestPrice],
  brands: createFilterItems('brand', 'brand'),
  memories: createFilterItems('memory', 'memory'),
  rams: createFilterItems('ram', 'ram'),
})

function createFilterItems(filterItem1, filterItem2) {
  return [... new Set(items.map(item => {
    return item[filterItem1];
  }))].map(filterItem1 => ({ [filterItem2]: filterItem1, checked: false, blocked: false })).sort((a, b) => a[filterItem1] - b[filterItem1])
}

const isFilterApplied = ref(false)

const filter = (filterItem) => {
  filterItem.checked = !filterItem.checked;

  const checkedBrands = filters.value.brands.filter(brand => brand.checked).map(brand => brand.brand)
  const checkedMemories = filters.value.memories.filter(memory => memory.checked).map(memory => memory.memory)
  const checkedRams = filters.value.rams.filter(ram => ram.checked).map(ram => ram.ram)
  const mergedFilters = [...checkedBrands, ...checkedMemories, ...checkedRams];

  if (mergedFilters.length > 0 || filters.value.price[0] !== lowestPrice || filters.value.price[1] !== highestPrice) {
    isFilterApplied.value = true
  } else {
    isFilterApplied.value = false
  }

  if (filters.value.price[0] === '') {
    filters.value.price[0] === 130
  }

  const dataFilters = { price: filters.value.price, brand: checkedBrands, memory: checkedMemories, ram: checkedRams };

  const filteredData = items.filter(i =>
    Object.entries(dataFilters).every(([k, v], index) => {
      if (v.length === 0) return true;
      if (index === 0) {
        return v[0] <= i[k] && i[k] <= v[1];
      }
      return v.includes(i[k])
    })
  )

  filteredItems.value = filteredData;

  if (filteredItems.value.length > 0) {
    return
  } else if (mergedFilters.length > 0 || items.filter(i => i.price >= filters.value.price[0] && i.price <= filters.value.price[1])) {
    filteredItems.value = [];
  } else {
    filteredItems.value = items;
  }

}

const clearFilters = () => {
  filters.value = {
    price: [lowestPrice, highestPrice],
    brands: createFilterItems('brand', 'brand'),
    memories: createFilterItems('memory', 'memory'),
    rams: createFilterItems('ram', 'ram'),
  }
  filteredItems.value = items
  isFilterApplied.value = false
}

</script>

<template>
  <div class="relative max-w-screen-2xl mx-auto p-4 flex flex-col md:flex-row gap-4 text-primary">
    <div>
      <h2 class="text-2xl font-bold mb-8">Smartphones</h2>
      <div v-if="isFilterOpen && width < 768"
        class="close-filter fixed top-0 right-0 bg-black w-screen h-screen z-10 opacity-10">
      </div>
      <div
        :class="{ 'fixed top-[71px] left-0 z-20 px-8 pt-4 pb-[calc(101px+1rem)] h-full shadow-2xl overflow-auto': isFilterOpen && width < 768 }"
        class="filter-container bg-white">

        <div class="flex w-[250px] mb-4">
          <div class="flex justify-between items-center w-full">
            <div @click="toggleFilter" class="flex items-center gap-1 cursor-pointer md:cursor-auto">
              <h4 class="text-xl font-semibold">Filter</h4>
              <svg v-if="!isFilterOpen" :class="{ 'rotate-180': isFilterOpen }" class="md:hidden translate-y-[3px]"
                width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 0.857009C0 0.637688 0.0895118 0.418259 0.268537 0.251116C0.626586 -0.0837054 1.20663 -0.0837054 1.56468 0.251116L5.49964 3.93201L9.43532 0.251116C9.79337 -0.0837054 10.3734 -0.0837054 10.7315 0.251116C11.0895 0.585938 11.0895 1.12835 10.7315 1.46317L6.14843 5.74888C5.79038 6.08371 5.21034 6.08371 4.85229 5.74888L0.269253 1.46317C0.0887958 1.29576 0 1.07638 0 0.857009Z"
                  :fill="primary" />
              </svg>
            </div>
            <button @click="clearFilters" v-if="isFilterOpen && isFilterApplied"
              class="bg-primary text-white py-[2px] px-2 hover:opacity-90 transition">Clear
              All</button>
            <button @click="toggleFilter" v-if="isFilterOpen && width < 768">
              <svg :fill="primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                <path
                  d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
              </svg>
            </button>
          </div>
        </div>
        <div v-if="isFilterOpen" class="flex flex-col gap-1 w-[250px]">

          <div class="bg-slate-50 px-4 py-2">
            <h5 class="text-base font-semibold pb-2">PRICE</h5>
            <div class="flex gap-1 justify-center items-center">
              <input v-model="filters.price[0]" @input="filter" type="number"
                class="flex w-full border border-slate-400 ">
              <span class="whitespace-nowrap">$ to</span>
              <input v-model="filters.price[1]" @input="filter" type="number" class="w-full border border-slate-400">
              $
            </div>
          </div>

          <div class="bg-slate-50 px-4 py-2">
            <h5 class="text-base font-semibold pb-2">BRAND</h5>
            <div class="flex flex-wrap gap-2">
              <h5 v-for="brand in filters.brands" @click="filter(brand)"
                :class="brand.checked ? 'bg-primary text-white' : 'bg-white text-primary', brand.blocked ? 'opacity-30 pointer-events-none ' : ''"
                class="py-1 px-2 cursor-pointer hover:shadow-sm transition font-semibold">{{ brand.brand
                }}
              </h5>
            </div>
          </div>

          <div class="bg-slate-50 px-4 py-2">
            <h5 class="text-base font-semibold pb-2">MEMORY</h5>
            <div class="flex flex-wrap gap-2">
              <h5 v-for="memory in filters.memories" @click="filter(memory)"
                :class="memory.checked ? 'bg-primary text-white' : 'bg-white text-primary', memory.blocked ? 'opacity-30 pointer-events-none ' : ''"
                class="py-1 px-2 cursor-pointer hover:shadow-sm transition font-semibold">{{
                    memory.memory > 1000 ? memory.memory / 1024 + ' TB' : memory.memory + ' GB'
                }} </h5>
            </div>
          </div>

          <div class="bg-slate-50 px-4 py-2">
            <h5 class="text-base font-semibold pb-2">RAM</h5>
            <div class="flex flex-wrap gap-2">
              <h5 v-for="ram in filters.rams" @click="filter(ram)"
                :class="ram.checked ? 'bg-primary text-white' : 'bg-white text-primary', ram.blocked ? 'opacity-30 pointer-events-none ' : ''"
                class="py-1 px-2 cursor-pointer hover:shadow-sm transition font-semibold">{{
                    `${ram.ram}
                                ${ram.ram >= 8
                      ? 'GB and more' : 'GB'}`
                }}
              </h5>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="article-container">
      <h2 v-if="filteredItems.length === 0" class="text-2xl font-bold">No items found</h2>
      <article v-else v-for="item in filteredItems"
        class="add-to-cart-btn-container relative overflow-hidden max-w-[400px] w-full border border-slate-300 p-4 pb-12 cursor-pointer hover:shadow-lg transition">
        <router-link to="/item">
          <div class="grid place-items-center"><img :src="item.image" alt="iphone"></div>
          <div>
            <h5 class="text-center text-base font-semibold mb-2">{{ `${item.name} ${item.memory} ${item.memory < 10
                ? 'TB' : 'GB'}`
            }} </h5>
                <h5 class="text-center text-base font-semibold">{{ '$' + item.price }}</h5>
          </div>
          <AddToCartBtn class="add-to-card-btn" />
        </router-link>
      </article>
    </div>

  </div>
</template>

<style scoped>
.article-container {
  flex: 1;
  display: grid;
  gap: 1rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: 1fr 1fr;
}

@media (min-width: 900px) {
  .article-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (hover: hover) {
  .add-to-card-btn {
    transform: translateY(110%);
  }
}

.add-to-cart-btn-container:hover .add-to-card-btn {
  transform: translateY(0);
}
</style>

