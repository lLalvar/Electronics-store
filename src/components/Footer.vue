<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="bg-primary  text-white overflow-hidden">
    <div
      class="max-w-screen-2xl mx-auto p-4 pt-10 pb-[16rem] md:pb-[15rem] md:pb-[14rem] lg:pb-[6rem] flex flex-col md:flex-row gap-8 justify-between relative">

      <div class="flex gap-4 md:gap-10 xl:gap-16">
        <ul class="flex flex-col gap-1">
          <li class="text-xl sm:text-2xl mb-4">{{ t('about') }}</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">{{ t('aboutUs') }}</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">{{ t('blog') }}</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">{{ t('careers') }}</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">{{ t('jobs') }}</li>
        </ul>
        <ul class="flex flex-col gap-1">
          <li class="text-xl sm:text-2xl mb-4">{{ t('support') }}</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">{{ t('contactUs') }}</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">{{ t('onlineChat') }}</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">{{ t('messenger') }}</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">{{ t('telegram') }}</li>
        </ul>
        <ul class="flex flex-col gap-1">
          <li class="text-xl sm:text-2xl mb-4">FAQ</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">{{ t('account') }}</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">{{ t('orders') }}</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">{{ t('payments') }}</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">{{ t('returns') }}</li>
        </ul>
      </div>

      <div
        class="absolute left-1/2 bottom-4 lg:bottom-8 flex flex-col gap-4 items-center justify-between -translate-x-1/2 ">
        <div class="mb-4 lg:mb-10 cursor-pointer">
          <img src="../../public/assets/logo.png" alt="logo">
        </div>
        <div class="flex gap-3 xl:gap-8">
          <div class="hover:scale-110 transition duration-300 cursor-pointer">
            <img src="../../public/assets/socialMedia/facebook.svg" alt="facebook">
          </div>
          <div class="hover:scale-110 transition duration-300 cursor-pointer">
            <img src="../../public/assets/socialMedia/telegram.svg" alt="telegram">
          </div>
          <div class="scale-105 hover:scale-[1.15] transition duration-300 cursor-pointer">
            <img src="../../public/assets/socialMedia/messenger.svg" alt="messenger">
          </div>
        </div>
        <div>
          <p class="text-slate-400 text-xs whitespace-nowrap">© 2018-2022, {{ t('companyName') }}</p>
        </div>
      </div>

      <div class="flex flex-col gap-8">
        <div class="group relative flex flex-row-reverse md:flex-row gap-2 justify-end cursor-pointer">
          <div class="md:text-end">
            <p class="text-slate-400">{{ t('haveAQuestion') }}</p>
            <h3 class="text-slate-300">(+374) 9999-9999-9999</h3>
          </div>
          <div>
            <img src="../../public/assets/socialMedia/phone.svg" alt="phone">
          </div>
          <div class="absolute -bottom-3 w-0 h-1 bg-slate-300 group-hover:w-full transition-all duration-300"></div>
        </div>
        <div class="group relative flex flex-row-reverse md:flex-row gap-2 justify-end cursor-pointer">
          <div class="md:text-end">
            <p class="text-slate-400">{{ t('contactUsAt') }}</p>
            <h3 class="text-slate-300">company.@example.com</h3>
          </div>
          <div>
            <img src="../../public/assets/socialMedia/message.svg" alt="message">
          </div>
          <div class="absolute -bottom-3 w-0 h-1 bg-slate-300 group-hover:w-full transition-all duration-300"></div>
        </div>

      </div>
    </div>
  </footer>
</template>