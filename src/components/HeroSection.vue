<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";

</script>

<template>
  <div class="mx-auto max-w-screen-2xl">
    <swiper :modules="[Pagination, Navigation, Autoplay]" :pagination="{
      bulletClass: 'swiper-pagination-bullet categories-section__swiper-pagination-bullet',
    }" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :loop="true" :autoplay="{
  delay: 3000,
  disableOnInteraction: false,
}">
      <swiper-slide>
        <img class="w-full select-none" src="../assets/Hero/hero1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-full select-none" src="../assets/Hero/hero2.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-full select-none" src="../assets/Hero/hero3.png" alt="">
      </swiper-slide>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper>
  </div>
</template>

<style scoped>
.hero-section__swiper-pagination-bullet {
  background: var(--primary);
}

.swiper-button-next,
.swiper-button-prev {
  color: white;
}
</style>