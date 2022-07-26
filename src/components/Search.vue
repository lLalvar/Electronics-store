<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="relative bg-white">
    <input
      class="px-2 py-1 text-sm text-primary border-none bg-white focus:outline outline-offset-2 focus:outline-white"
      :placeholder="t('search') + '...'">
    <button class="grid place-items-center absolute top-0 right-0 w-7 h-7 hover:bg-slate-100 transition">
      <img src="../../public/assets/search.svg" alt="">
    </button>
  </div>
</template>