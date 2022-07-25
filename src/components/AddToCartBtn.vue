<script setup>
defineProps({
  bg: {
    type: String,
    default: 'primary',
  },
  text: {
    type: String,
    default: 'white',
  },
  svgClr: {
    type: String,
    default: '#fff',
  }
})
</script>

<template>
  <div :class="'bg-' + bg + ' text-' + text"
    class="absolute bottom-0 left-0 text-white flex w-full justify-center gap-2 cursor-pointer h-10 transition duration-300">
    <button class="text-sm xs:text-base flex-1 opacity-80 transition duration-300 hover:opacity-100 font-bold">
      Add to Cart
    </button>
    <button class="relative px-2 opacity-80 transition duration-300 hover:opacity-100">
      <div :class="'bg-' + text" class=" w-[2px] h-full absolute top-0 left-0">
      </div>
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.70832 2.875C4.06236 2.875 1.91666 4.99867 1.91666 7.61875C1.91666 9.73379 2.7552 14.7535 11.0093 19.8279C11.1572 19.9179 11.3269 19.9655 11.5 19.9655C11.6731 19.9655 11.8428 19.9179 11.9907 19.8279C20.2448 14.7535 21.0833 9.73379 21.0833 7.61875C21.0833 4.99867 18.9376 2.875 16.2917 2.875C13.6457 2.875 11.5 5.75 11.5 5.75C11.5 5.75 9.35428 2.875 6.70832 2.875Z"
          :stroke="svgClr" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</template>