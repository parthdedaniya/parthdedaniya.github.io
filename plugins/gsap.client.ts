import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  gsap.registerPlugin(ScrollTrigger)

  // Sync ScrollTrigger with Lenis smooth scroll if available
  const lenis = useNuxtApp().$lenis
  if (lenis) {
    lenis.on('scroll', ScrollTrigger.update)
  }

  // Make GSAP available globally
  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  }
})

