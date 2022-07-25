import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHamburgerMenu = defineStore('hamburgerMenu', () => {
  const isHamburgerMenuOpen = ref(false)
  const toggleMenu = () => {
    isHamburgerMenuOpen.value = !isHamburgerMenuOpen.value
    if (isHamburgerMenuOpen.value) {
      document.querySelector('body').style.overflow = 'hidden'
    } else {
      document.querySelector('body').style.overflow = 'visible'
    }
  }
  const hideMenu = () => {
    isHamburgerMenuOpen.value = false
    document.querySelector('body').style.overflow = 'visible'
  }
  return { isHamburgerMenuOpen, toggleMenu, hideMenu }
})
