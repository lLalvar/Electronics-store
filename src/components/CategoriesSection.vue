<script setup>
import { v4 as uuidv4 } from 'uuid';
import { computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper'
import 'swiper/css'
import "swiper/css/pagination";
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const router = useRouter()


const items = computed(() => {
  return [
    {
      id: uuidv4(),
      name: t('computers'),
      image: './assets/categoryItems/categoryItem1.png',
    },
    {
      id: uuidv4(),
      name: t('laptops'),
      image: './assets/categoryItems/categoryItem2.png',
    },
    {
      id: uuidv4(),
      name: t('phones'),
      image: './assets/categoryItems/categoryItem3.png',
    },
    {
      id: uuidv4(),
      name: t('tablets'),
      image: './assets/categoryItems/categoryItem4.png',
    },
    {
      id: uuidv4(),
      name: t('tvs'),
      image: './assets/categoryItems/categoryItem5.png',
    },
    {
      id: uuidv4(),
      name: t('monitors'),
      image: './assets/categoryItems/categoryItem6.png',
    },
  ]
})

const fontSize = computed(() => {
  if (locale.value === 'en') {
    return 'text-xl'
  } else if (locale.value === 'ru') {
    return 'text-lg'
  } else {
    return 'text-sm'
  }
})

const goTo = () => {
  router.push('/category')
}

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

      <swiper-slide @click="goTo" v-for="item in items" :key="item.id"
        class="cursor-pointer hover:shadow-md flex items-center flex-col gap-2 p-3 md:mb-0 transition w-auto">

        <div class="w-20 lg::w-28 lg:w-auto">
          <img :src="item.image" :alt="item.name">
        </div>
        <h3 :class="fontSize">{{ item.name }}</h3>
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