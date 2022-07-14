<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, } from 'swiper'
import 'swiper/css'
import "swiper/css/pagination";
</script>

<template>
  <section class="bg-primary text-white">
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-4xl font-bold text-center mb-8">Best offers</h2>
      <swiper :modules="[Pagination]" :space-between="30" :pagination="{
        bulletClass: 'swiper-pagination-bullet best-offers_section__swiper-pagination-bullet',
        horizontalClass: 'swiper-pagination-horizontal best-offers_section__swiper-pagination-horizontal',
      }" :slides-per-view="1" :breakpoints="{
  '420': {
    slidesPerView: 2,
  },
  '768': {
    slidesPerView: 3,
  }
}">
        <swiper-slide>
          <div class="img-container cursor-pointer grid place-items-center overflow-hidden mb-10">
            <img class="w-full transition duration-500" src="../assets/bestOffers/bestOffer1.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-container cursor-pointer grid place-items-center overflow-hidden mb-10">
            <img class="w-full transition duration-500" src="../assets/bestOffers/bestOffer2.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-container cursor-pointer grid place-items-center overflow-hidden mb-10">
            <img class="w-full transition duration-500" src="../assets/bestOffers/bestOffer3.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-container cursor-pointer grid place-items-center overflow-hidden mb-10">
            <img class="w-full transition duration-500" src="../assets/bestOffers/bestOffer4.png" alt="">
          </div>
        </swiper-slide>
      </swiper>
    </div>

  </section>
</template>

<style>
.best-offers_section__swiper-pagination-bullet {
  background-color: #fff;
}

.best-offers_section__swiper-pagination-horizontal {
  /* background-color: #fff; */
  /* transform: translateY(20px); */
}
</style>

<style scoped>
.img-container:hover img {
  transform: scale(1.05);
}
</style>