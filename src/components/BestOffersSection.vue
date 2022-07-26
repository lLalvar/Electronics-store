<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, } from 'swiper'
import 'swiper/css'
import "swiper/css/pagination";
import AddToCartBtn from './AddToCartBtn.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const items = [
  {
    image: './assets/bestOffers/bestOffer1.png',
    alt: 'best offer 1',
  }
  ,
  {
    image: './assets/bestOffers/bestOffer2.png',
    alt: 'best offer 2',
  }
  ,
  {
    image: './assets/bestOffers/bestOffer3.png',
    alt: 'best offer 3',
  }
  ,
  {
    image: './assets/bestOffers/bestOffer4.png',
    alt: 'best offer 4',
  }
]
</script>

<template>
  <section class="max-w-screen-2xl mx-auto px-4 pt-10 pb-12 text-primary">
    <h2 class="text-2xl sm:text-4xl font-bold text-center mb-8">{{ t('bestOffers') }}</h2>
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
      <swiper-slide v-for="item in items">
        <div class="img-container cursor-pointer grid place-items-center overflow-hidden relative">
          <div class="best-offer-image w-full transition duration-700"><img :src="item.image" :alt="item.alt"
              class="w-full"></div>
          <AddToCartBtn class="add-to-card-btn" />
        </div>
      </swiper-slide>
    </swiper>

  </section>
</template>

<style>
.best-offers_section__swiper-pagination-bullet {
  background-color: var(--primary);
}

.best-offers_section__swiper-pagination-horizontal {
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

.best-offer-image {
  transform: scale(1.01);
}

.img-container:hover .best-offer-image {
  transform: scale(1.05);
}
</style>