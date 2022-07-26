<script setup>
const items = [
  { image: '/public/assets/brands/brand1.png', },
  { image: '/public/assets/brands/brand2.png', },
  { image: '/public/assets/brands/brand3.png', },
  { image: '/public/assets/brands/brand4.png', },
  { image: '/public/assets/brands/brand5.png', },
  { image: '/public/assets/brands/brand6.png', },
  { image: '/public/assets/brands/brand7.png', },
  { image: '/public/assets/brands/brand8.png', },
  { image: '/public/assets/brands/brand9.png', },
  { image: '/public/assets/brands/brand10.png', },
]
</script>

<template>
  <section class=" max-w-[1300px] mx-auto text-primary px-4 pt-10 pb-12">
    <h2 class="text-4xl font-bold text-center mb-8">Brands</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  justify-center gap-4">
      <div v-for="item in items" class="image">
        <img :src="item.image" alt="image" class="w-full">
      </div>
    </div>
  </section>
</template>

<style scoped>
.image {
  position: relative;
}

@media (hover: hover) {
  .image::after {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 300ms ease-in-out;
}

.image:hover.image::after {
  opacity: 0;
  cursor: pointer;
}
</style>
