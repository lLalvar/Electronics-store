<script setup>
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper'
import 'swiper/css'
import "swiper/css/pagination";

const items = [
  {
    id: uuidv4(),
    name: 'Computers',
    image: './assets/categoryItems/categoryItem1.png',
  },
  {
    id: uuidv4(),
    name: 'Laptops',
    image: './assets/categoryItems/categoryItem2.png',
  },
  {
    id: uuidv4(),
    name: 'Phones',
    image: './assets/categoryItems/categoryItem3.png',
  },
  {
    id: uuidv4(),
    name: 'Tablets',
    image: './assets/categoryItems/categoryItem4.png',
  },
  {
    id: uuidv4(),
    name: 'TVs',
    image: './assets/categoryItems/categoryItem5.png',
  },
  {
    id: uuidv4(),
    name: 'Monitors',
    image: './assets/categoryItems/categoryItem6.png',
  },
]
</script>

<template>
  <section class="categories-section">
    <swiper class="max-w-screen-xl mx-auto justify-center px-4" :pagination="{
      bulletClass: 'swiper-pagination-bullet categories_section__swiper-pagination-bullet',
      horizontalClass: 'swiper-pagination-horizontal categories_section__swiper-pagination-horizontal',
    }" :slidesPerView="3" :modules="[Pagination]" :breakpoints="{
  420: {
    slidesPerView: 4,
  },
  640: {
    slidesPerView: 5,
  },
  768: {
    slidesPerView: 6,
  },
}">
      <swiper-slide v-for="item in items"
        class="cursor-pointer hover:shadow-md flex items-center flex-col gap-2 p-3 md:mb-0 transition w-auto">
        <div class="w-20 lg::w-28 lg:w-auto">
          <img :src="item.image" :alt="item.name">
        </div>
        <h3 class="text-xl">{{ item.name }}</h3>
      </swiper-slide>
    </swiper>
  </section>
</template>
<style>
.categories_section__swiper-pagination-bullet {
  background: var(--primary);
}

.categories_section__swiper-pagination-horizontal {
  position: initial;
}
</style>