<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="flex items-center justify-center gap-1 cursor-pointer hover:opacity-80 transition">
    <img src="../../public/assets/heart.svg" alt="heart" class="w-6">
    <div class="text-lg whitespace-nowrap">
      {{ t('wishlist') }}
    </div>
  </div>
</template>