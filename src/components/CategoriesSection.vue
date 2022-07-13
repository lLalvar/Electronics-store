<script setup>
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import "swiper/css/pagination";

const items = [
  {
    id: uuidv4(),
    name: 'Computers',
    image: '/src/assets/categoryItem/categoryItem1.png',
  },
  {
    id: uuidv4(),
    name: 'Laptops',
    image: '/src/assets/categoryItem/categoryItem2.png',
  },
  {
    id: uuidv4(),
    name: 'Phones',
    image: '/src/assets/categoryItem/categoryItem3.png',
  },
  {
    id: uuidv4(),
    name: 'Tablets',
    image: '/src/assets/categoryItem/categoryItem4.png',
  },
  {
    id: uuidv4(),
    name: 'TVs',
    image: '/src/assets/categoryItem/categoryItem5.png',
  },
  {
    id: uuidv4(),
    name: 'Monitors',
    image: '/src/assets/categoryItem/categoryItem6.png',
  },
]
</script>

<template>
  <section class="categories-section">
    <swiper class="container mx-auto flex justify-center py-2 p-4" :pagination="{
      bulletClass: 'swiper-pagination-bullet categories-section__swiper-pagination-bullet',
    }" :slidesPerView="3" :modules="[Pagination]" :breakpoints="{
  '420': {
    slidesPerView: 4,
  },
  '640': {
    slidesPerView: 5,
  },
  '768': {
    slidesPerView: 6,
  },
}">
      <swiper-slide v-for="item in items"
        class="cursor-pointer hover:shadow-md flex items-center flex-col gap-2 p-3 mb-6 transition w-auto">
        <div class="w-20 md:w-28 lg:w-auto ">
          <img :src="item.image" :alt="item.name">
        </div>
        <h3 class="text-xl">{{ item.name }}</h3>
      </swiper-slide>
    </swiper>
  </section>
</template>
<style>
.categories-section__swiper-pagination-bullet {
  background: var(--primary);
}
</style>