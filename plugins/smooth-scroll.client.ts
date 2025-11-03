import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Sync with GSAP ScrollTrigger if available
  lenis.on('scroll', () => {
    const { $ScrollTrigger } = useNuxtApp()
    if ($ScrollTrigger) {
      $ScrollTrigger.update()
    }
  })

  // Make lenis available globally
  return {
    provide: {
      lenis,
    },
  }
})

