<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Grid } from 'swiper'
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/grid";
import AddToCartBtn from './AddToCartBtn.vue';

const primary = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary');

const items = [
  {
    image: '/src/assets/newItems/newItem1.png',
    alt: 'new item 1',
  },
  {
    image: '/src/assets/newItems/newItem2.png',
    alt: 'new item 2',
  },
  {
    image: '/src/assets/newItems/newItem3.png',
    alt: 'new item 3',
  },
  {
    image: '/src/assets/newItems/newItem4.png',
    alt: 'new item 4',
  },
  {
    image: '/src/assets/newItems/newItem5.png',
    alt: 'new item 5',
  },
  {
    image: '/src/assets/newItems/newItem6.png',
    alt: 'new item 6',
  },
  {
    image: '/src/assets/newItems/newItem7.png',
    alt: 'new item 7',
  },
]

</script>

<template>
  <section class="bg-primary text-white">
    <div class="max-w-screen-2xl mx-auto px-4 py-8">
      <h2 class="text-4xl font-bold text-center mb-8">New</h2>
      <swiper :modules="[Pagination, Grid]" :slides-per-view="2" :grid="{
        fill: 'row',
        rows: 2,
      }" :space-between="15" :pagination="{
  clickable: true,
  bulletClass: 'swiper-pagination-bullet new_section__swiper-pagination-bullet',
  horizontalClass: 'swiper-pagination-horizontal new_section__swiper-pagination-horizontal',

}" :breakpoints="{
  678: {
    slidesPerView: 4,

    grid: {
      rows: 1,
    },

    spaceBetween: 30,
  }
}">
        <swiper-slide v-for="item in items">
          <div class="img-container cursor-pointer grid place-items-center overflow-hidden">
            <div class="new-section-img w-full overflow-hidden">
              <img class="transition duration-500" :src="item.image" :alt="item.alt">
              <AddToCartBtn class="add-to-card-btn" bg="white" text="primary" :svgClr="primary" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

  </section>
</template>

<style>
.new_section__swiper-pagination-bullet {
  background-color: #fff;
}

.new_section__swiper-pagination-horizontal {
  position: initial;
}
</style>

<style scoped>
@media (hover: hover) {
  .add-to-card-btn {
    transform: translateY(110%);
  }
}

.img-container:hover .add-to-card-btn {
  transform: translateY(0);
}

.new-section-img {
  transform: scale(1.01);
}

.img-container:hover .new-section-img img {
  transform: scale(1.05);
}
</style>