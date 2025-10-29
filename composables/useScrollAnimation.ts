export const useScrollAnimation = () => {
  const isVisible = ref(false)
  const elementRef = ref<HTMLElement>()

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })
  }

  onMounted(() => {
    if (import.meta.client && elementRef.value) {
      const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })
      
      observer.observe(elementRef.value)
      
      onUnmounted(() => {
        observer.disconnect()
      })
    }
  })

  return {
    isVisible,
    elementRef
  }
}