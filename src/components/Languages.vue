<script setup>
import useWindowWidth from '../hooks/useWindowWidth';
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n';
import { useHamburgerMenu } from '../store';

const { t, locale } = useI18n()

const toggle = useHamburgerMenu();

const languages = computed(() => {
  return [
    {
      lang: 'en',
      name: t('english'),
      logo: './assets/flags/united-kingdom.png',
    },
    {
      lang: 'ru',
      name: t('russian'),
      logo: './assets/flags/russia.png',
    },
    {
      lang: 'am',
      name: t('armenian'),
      logo: './assets/flags/armenia.png',
    }
  ]
})

const width = useWindowWidth()

const currentLanguage = ref('en')

const isLanguagesOpen = ref(false)

const setLanguage = (lang) => {
  currentLanguage.value = lang
  isLanguagesOpen.value = false
  if (lang === 'en') {
    locale.value = 'en'
  } else if (lang === 'ru') {
    locale.value = 'ru'
  } else if (lang === 'am') {
    locale.value = 'am'
  }
  if (width.value < 768) {
    toggle.toggleMenu()
  }
}



const showLanguages = () => {
  if (width.value >= 768) {
    isLanguagesOpen.value = true
  }
}

const hideLanguages = () => {
  if (width.value >= 768) {
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
      <div v-if="language.lang === currentLanguage"
        class="hover:opacity-80 transition flex gap-1 items-center justify-center  cursor-pointer">
        <img class="w-5 h-5" :src="language.logo" alt="flag">
        <div class="block text-lg">
          {{ language.name }}
        </div>
        <img class="translate-y-[2px]" src="../../public/assets/arrow.svg" alt="arrow down">
      </div>
    </div>
    <div v-if="isLanguagesOpen" class="md:absolute md:bottom-0 md:right-0 md:translate-y-full md:w-32">
      <div class="h-[10px] md:h-[36px]"></div>
      <ul class="w-screen md:w-auto flex flex-col bg-white text-primary shadow-md items-stretch">
        <li v-for="language in languages" @click="setLanguage(language.lang)">
          <div v-if="language.lang !== currentLanguage"
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