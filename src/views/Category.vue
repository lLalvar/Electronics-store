<script setup>
import { v4 as uuidv4 } from 'uuid';
import useWindowWidth from '../hooks/useWindowWidth';
import { ref, watch } from 'vue';
import AddToCartBtn from '../components/AddToCartBtn.vue';
const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary');


const items = [
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max (256 GB, Alpine Green)',
    price: '$1,250.00',
    image: '/src/assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max (256 GB, Alpine Green)',
    price: '$1,250.00',
    image: '/src/assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max (256 GB, Alpine Green)',
    price: '$1,250.00',
    image: '/src/assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max (256 GB, Alpine Green)',
    price: '$1,250.00',
    image: '/src/assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max (256 GB, Alpine Green)',
    price: '$1,250.00',
    image: '/src/assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max (256 GB, Alpine Green)',
    price: '$1,250.00',
    image: '/src/assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max (256 GB, Alpine Green)',
    price: '$1,250.00',
    image: '/src/assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max (256 GB, Alpine Green)',
    price: '$1,250.00',
    image: '/src/assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max (256 GB, Alpine Green)',
    price: '$1,250.00',
    image: '/src/assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max (256 GB, Alpine Green)',
    price: '$1,250.00',
    image: '/src/assets/iphone.png'
  },
  {
    id: uuidv4(),
    name: 'Apple iPhone 13 Pro Max (256 GB, Alpine Green)',
    price: '$1,250.00',
    image: '/src/assets/iphone.png'
  },


]

const width = useWindowWidth()

const brands = ['iPhone', 'Samsung', 'Xiaomi', 'Lenovo', 'Nokia', 'Realme', 'Tcl']

const memories = ['32GB', '64GB', '128GB', '256GB', '512GB', '1TB']

const rams = ['2GB', '4GB', '6GB', '8GB and more']


const isFilterOpen = width.value >= 768 ? ref(true) : ref(false);
const toggleFilter = () => {
  if (width.value < 768) {
    isFilterOpen.value = !isFilterOpen.value;
  }
}

watch(width, () => {
  if (width.value >= 768) {
    isFilterOpen.value = true;
  } else {
    isFilterOpen.value = false;
  }
})

screen.orientation.addEventListener('change', () => {
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

</script>

<template>
  <div class="relative max-w-screen-2xl mx-auto p-4 flex flex-col md:flex-row gap-4 text-primary">
    <div>
      <h2 class="text-2xl font-bold mb-8" :class="{ 'mt-11': isFilterOpen }">Smartphones</h2>
      <div v-if="isFilterOpen && width < 768"
        class="close-filter fixed top-0 right-0 bg-black w-screen h-screen z-10 opacity-0">
      </div>
      <div
        :class="{ 'fixed top-[101px] left-0 z-20 px-8 pt-4 pb-[calc(101px+1rem)] h-full shadow-2xl overflow-auto': isFilterOpen && width < 768 }"
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
              <input class="text-end w-full border border-slate-400" type="number" value="0" min="0" step="50"> <span
                class="whitespace-nowrap">$ to</span>
              <input class="text-end w-full border border-slate-400" type="number" value="1500" min="0" max="1500"
                step="50">
              $
            </div>
          </div>

          <div class="bg-slate-50 px-4 py-2">
            <h5 class="text-base font-semibold pb-2">BRAND</h5>
            <div class="flex flex-wrap gap-2">
              <h5 v-for="brand in brands"
                class="bg-white py-1 px-2 cursor-pointer hover:shadow-sm transition font-semibold">{{ brand
                }}
              </h5>
            </div>
          </div>

          <div class="bg-slate-50 px-4 py-2">
            <h5 class="text-base font-semibold pb-2">MEMORY</h5>
            <div class="flex flex-wrap gap-2">
              <h5 v-for="memory in memories"
                class="bg-white py-1 px-2 cursor-pointer hover:shadow-sm transition font-semibold">{{
                    memory
                }}
              </h5>
            </div>
          </div>

          <div class="bg-slate-50 px-4 py-2">
            <h5 class="text-base font-semibold pb-2">RAM</h5>
            <div class="flex flex-wrap gap-2">
              <h5 v-for="ram in rams"
                class="bg-white py-1 px-2 cursor-pointer hover:shadow-sm transition font-semibold">{{ ram
                }}
              </h5>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="article-container">
      <article v-for="item in items"
        class="add-to-cart-btn-container relative overflow-hidden border border-slate-300 p-4 pb-12 cursor-pointer hover:shadow-lg transition">
        <div class="grid place-items-center"><img :src="item.image" alt="iphone"></div>
        <div>
          <h5 class="text-center text-base font-semibold mb-2">{{ item.name }}</h5>
          <h5 class="text-center text-base font-semibold">{{ item.price }}</h5>
        </div>
        <AddToCartBtn class="add-to-card-btn" />
      </article>
    </div>

  </div>
</template>

<style scoped>
.article-container {
  flex: 1;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
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

