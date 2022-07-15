<template>
  <footer class="bg-primary  text-white overflow-hidden">
    <div
      class="max-w-screen-2xl mx-auto p-4 pt-10 pb-[16rem] sm:pb-[15rem] md:pb-[14rem] lg:pb-[6rem] flex flex-col sm:flex-row gap-8 justify-between relative">

      <div class="flex gap-6 xs:gap-10 sm:gap-6 xl:gap-16">
        <ul class="flex flex-col gap-1">
          <li class="text-2xl mb-4 cursor-pointer">About</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">About us</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">Blog</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">Careers</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">Jobs</li>
        </ul>
        <ul class="flex flex-col gap-1">
          <li class="text-2xl mb-4">Support</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">Contact us</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">Online Chat</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">Messenger</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">Telegram</li>
        </ul>
        <ul class="flex flex-col gap-1">
          <li class="text-2xl mb-4">FAQ</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">Account</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">Orders</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">Payments</li>
          <li class="text-slate-300 cursor-pointer hover:text-white transition">Returns</li>
        </ul>
      </div>

      <div
        class="absolute left-1/2 bottom-4 lg:bottom-8 flex flex-col gap-4 items-center justify-between -translate-x-1/2 ">
        <div class="mb-4 lg:mb-10 cursor-pointer">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="flex gap-3 xl:gap-8">
          <div class="hover:scale-110 transition duration-300 cursor-pointer">
            <img src="../assets/socialMedia/facebook.svg" alt="">
          </div>
          <div class="hover:scale-110 transition duration-300 cursor-pointer">
            <img src="../assets/socialMedia/telegram.svg" alt="">
          </div>
          <div class="scale-105 hover:scale-[1.15] transition duration-300 cursor-pointer">
            <img src="../assets/socialMedia/messenger.svg" alt="">
          </div>
        </div>
        <div>
          <p class="text-slate-400 text-xs whitespace-nowrap">© 2018-2022, Company name</p>
        </div>
      </div>

      <div class="flex flex-col gap-8">
        <div class="group relative flex flex-row-reverse sm:flex-row gap-2 justify-end cursor-pointer">
          <div class="sm:text-end">
            <p class="text-slate-400">Have a question</p>
            <h3 class="text-slate-300">(+374) 9999-9999-9999</h3>
          </div>
          <div>
            <img src="../assets/socialMedia/phone.svg" alt="">
          </div>
          <div class="absolute -bottom-3 w-0 h-1 bg-slate-300 group-hover:w-full transition-all duration-300"></div>
        </div>
        <div class="group relative flex flex-row-reverse sm:flex-row gap-2 justify-end cursor-pointer">
          <div class="sm:text-end">
            <p class="text-slate-400">Contact us at</p>
            <h3 class="text-slate-300">company.@example.com</h3>
          </div>
          <div>
            <img src="../assets/socialMedia/message.svg" alt="">
          </div>
          <div class="absolute -bottom-3 w-0 h-1 bg-slate-300 group-hover:w-full transition-all duration-300"></div>
        </div>

      </div>
    </div>
  </footer>
</template>