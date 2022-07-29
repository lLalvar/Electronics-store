<script setup>
import { useI18n } from 'vue-i18n'
import useWindowWidth from '../hooks/useWindowWidth'
import { useHamburgerMenu } from '../store';

const toggle = useHamburgerMenu();

const width = useWindowWidth()

const hideMenu = () => {
  if (width.value < 768) {
    toggle.toggleMenu()
  }
}

const { t } = useI18n()
</script>

<template>
  <div @click="hideMenu" class="flex items-center justify-center gap-1 cursor-pointer hover:opacity-80 transition">
    <img src="../../public/assets/heart.svg" alt="heart" class="w-6">
    <div class="text-lg whitespace-nowrap">
      {{ t('wishlist') }}
    </div>
  </div>
</template>