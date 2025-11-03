import { ref } from 'vue'

// Use a simple ref for client-side theme state
const theme = ref<'light' | 'dark'>('light')
const isTransitioning = ref<boolean>(false)

export const useTheme = () => {
  const toggleTheme = () => {
    isTransitioning.value = true
    const newTheme = theme.value === 'light' ? 'dark' : 'light'
    
    if (process.client) {
      // Apply theme change quickly at 50% (350ms) for snappier feel
      setTimeout(() => {
        requestAnimationFrame(() => {
          theme.value = newTheme
          document.documentElement.classList.toggle('dark')
          localStorage.setItem('theme', newTheme)
        })
      }, 350) // 50% of 0.7s animation - fast switch
      
      // Reset transition state after animation completes
      setTimeout(() => {
        requestAnimationFrame(() => {
          isTransitioning.value = false
        })
      }, 800) // Cleanup after animation
    }
  }

  const initTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light'
      theme.value = savedTheme
      
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  return {
    theme,
    isTransitioning,
    toggleTheme,
    initTheme
  }
}

