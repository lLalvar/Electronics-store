<script setup>
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

const currentLanguage = ref('English')

const setLanguage = (lang) => {
  currentLanguage.value = lang
}

const isLanguagesOpen = ref(false)

const showLanguages = () => {
  isLanguagesOpen.value = true
}

const hideLanguages = () => {
  isLanguagesOpen.value = false
}

</script>

<template>
  <div @mouseenter="showLanguages" @mouseleave="hideLanguages" class="relative">
    <div v-for="language1 in languages">
      <div v-if="language1.name === currentLanguage"
        class="hover:opacity-80 transition hidden md:flex gap-1 items-center  cursor-pointer">
        <img class="w-5 h-5" :src="language1.logo" alt="flag">
        <div class="hidden md:block text-lg">
          {{ language1.name }}
        </div>
        <img class="translate-y-[2px]" src="../assets/arrow.svg" alt="arrow down">
      </div>
    </div>
    <div v-if="isLanguagesOpen" class="absolute bottom-0 right-0 translate-y-full w-32">
      <div class="h-[36px]"></div>
      <ul class=" flex flex-col bg-white text-primary shadow-md">
        <li v-for="language in languages" @click="setLanguage(language.name)">
          <div v-if="language.name !== currentLanguage"
            class="flex items-center gap-1 px-2 py-2 border border-b-slate-300 font-semibold hover:opacity-80 transition cursor-pointer">
            <img class="w-5 h-5" :src="language.logo" alt="flag">
            <div class="hidden md:block">
              {{ language.name }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>