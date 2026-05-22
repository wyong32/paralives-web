import { ref } from 'vue'

export function useSimulatorCopy() {
  const copied = ref(false)
  let timer

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      clearTimeout(timer)
      timer = setTimeout(() => {
        copied.value = false
      }, 2000)
      return true
    } catch {
      copied.value = false
      return false
    }
  }

  return { copied, copyText }
}
