import { ref, onMounted, onUnmounted } from 'vue'

export default function useWindowWidth() {
  const width = ref(window.innerWidth)

  const widthListener = () => {
    width.value = window.innerWidth
  }
  onMounted(() => {
    window.addEventListener('resize', widthListener)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', widthListener)
  })
  return width
}
