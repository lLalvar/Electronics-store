<script setup>
import Header from './components/Header.vue';
import Home from './views/Home.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <Header />
  <div class="w-full h-[101px] bg-primary -z-10"></div>
  <router-view></router-view>
  <Footer />
</template>

<style>
</style>
