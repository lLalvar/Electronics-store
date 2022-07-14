<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";

</script>

<template>
  <section class="mx-auto max-w-screen-2xl">
    <swiper :modules="[Pagination, Navigation, Autoplay]" :pagination="{
      bulletClass: 'swiper-pagination-bullet hero_section__swiper-pagination-bullet',
    }" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :loop="true" :autoplay="{
  delay: 3000,
  disableOnInteraction: true,
}">
      <swiper-slide>
        <img class="w-full select-none scale-y-105" src="../assets/Hero/hero1.png" alt="hero1">
      </swiper-slide>
      <swiper-slide>
        <img class="w-full select-none scale-y-105" src="../assets/Hero/hero2.png" alt="hero2">
      </swiper-slide>
      <swiper-slide>
        <img class="w-full select-none scale-y-105" src="../assets/Hero/hero3.png" alt="hero3">
      </swiper-slide>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper>
  </section>
</template>
 
<style>
.hero_section__swiper-pagination-bullet {
  background: var(--primary);
}
</style>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  color: var(--primary);
}
</style>