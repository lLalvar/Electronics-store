<script setup>
import useWindowWidth from '../hooks/useWindowWidth'
import { useHamburgerMenu } from '../store';
import { useI18n } from 'vue-i18n'

const toggle = useHamburgerMenu();

const width = useWindowWidth()

const { t } = useI18n()

const hideMenu = () => {
  if (width.value < 768) {
    toggle.toggleMenu()
  }
}
</script>

<template>
  <router-link to="/cart">
    <div @click="hideMenu" class="flex items-center justify-center gap-1 cursor-pointer hover:opacity-80 transition">
      <img src="../../public/assets/cart.svg" alt="cart" class="w-6">
      <div class="text-lg">
        {{ t('cart') }}
      </div>
    </div>
  </router-link>
</template>