<script setup>
import useWindowWidth from '../hooks/useWindowWidth';
import { ref } from 'vue'
const languages = [
  {
    name: 'English',
    logo: '/src/assets/flags/united-kingdom.png',
  },
  {
    name: 'Russian',
    logo: '/src/assets/flags/russia.png',
  },
  {
    name: 'Armenian',
    logo: '/src/assets/flags/armenia.png',
  }
]

const width = useWindowWidth()

const currentLanguage = ref('English')

const isLanguagesOpen = ref(false)

const setLanguage = (lang) => {
  currentLanguage.value = lang
  isLanguagesOpen.value = false
}



const showLanguages = () => {
  if (width.value > 767) {
    isLanguagesOpen.value = true
  }
}

const hideLanguages = () => {
  if (width.value > 767) {
    isLanguagesOpen.value = false

  }
}

const toggleLanguages = () => {
  if (width.value < 768) {
    isLanguagesOpen.value = !isLanguagesOpen.value
  }
}



</script>

<template>
  <div @mouseenter="showLanguages" @mouseleave="hideLanguages" class="relative">
    <div @click="toggleLanguages" v-for="language in languages">
      <div v-if="language.name === currentLanguage"
        class="hover:opacity-80 transition flex gap-1 items-center justify-center  cursor-pointer">
        <img class="w-5 h-5" :src="language.logo" alt="flag">
        <div class="block text-lg">
          {{ language.name }}
        </div>
        <img class="translate-y-[2px]" src="../assets/arrow.svg" alt="arrow down">
      </div>
    </div>
    <div v-if="isLanguagesOpen" class="md:absolute md:bottom-0 md:right-0 md:translate-y-full md:w-32">
      <div class="h-[10px] md:h-[36px]"></div>
      <ul class="w-screen md:w-auto flex flex-col bg-white text-primary shadow-md items-stretch">
        <li v-for="language in languages" @click="setLanguage(language.name)">
          <div v-if="language.name !== currentLanguage"
            class="flex items-center justify-center md:justify-start gap-1 px-2 py-2 border border-b-slate-300 font-semibold hover:opacity-80 transition cursor-pointer">
            <img class="w-5 h-5" :src="language.logo" alt="flag">
            <div>
              {{ language.name }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>