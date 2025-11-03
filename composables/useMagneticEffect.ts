export const useMagneticEffect = () => {
  const addMagneticEffect = (element: HTMLElement) => {
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      const strength = 0.3
      element.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(1.05)`
    }

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px) scale(1)'
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }

  onMounted(() => {
    const magneticButtons = document.querySelectorAll('.magnetic-button')
    const cleanupFunctions: (() => void)[] = []

    magneticButtons.forEach((button) => {
      const cleanup = addMagneticEffect(button as HTMLElement)
      if (cleanup) cleanupFunctions.push(cleanup)
    })

    onUnmounted(() => {
      cleanupFunctions.forEach(cleanup => cleanup())
    })
  })
}

