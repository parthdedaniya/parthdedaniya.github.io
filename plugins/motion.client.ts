import autoAnimate from '@formkit/auto-animate'

export default defineNuxtPlugin((nuxtApp) => {
  // Create custom directives for animations using IntersectionObserver
  const createAnimationDirective = (animationClass: string) => {
    return {
      mounted(el: HTMLElement) {
        // Add the base animation class
        el.classList.add('animate-on-scroll')
        el.classList.add(animationClass)
        
        // Create observer
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                el.classList.add('is-visible')
                // Apply auto-animate for smooth transitions
                autoAnimate(el)
              }
            })
          },
          {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
          }
        )
        
        observer.observe(el)
        
        // Store observer for cleanup
        ;(el as any)._observer = observer
      },
      unmounted(el: HTMLElement) {
        if ((el as any)._observer) {
          ;(el as any)._observer.disconnect()
        }
      }
    }
  }
  
  // Register all the motion directives used in the app
  nuxtApp.vueApp.directive('motion-slide-visible-bottom', createAnimationDirective('slide-bottom'))
  nuxtApp.vueApp.directive('motion-slide-visible-left', createAnimationDirective('slide-left'))
  nuxtApp.vueApp.directive('motion-slide-visible-right', createAnimationDirective('slide-right'))
  nuxtApp.vueApp.directive('motion-slide-visible-once-left', createAnimationDirective('slide-left'))
  nuxtApp.vueApp.directive('motion-slide-visible-once-right', createAnimationDirective('slide-right'))
  nuxtApp.vueApp.directive('motion-fade-visible', createAnimationDirective('fade-in'))
  nuxtApp.vueApp.directive('motion-fade-in-up', createAnimationDirective('fade-in-up'))
  nuxtApp.vueApp.directive('motion-visible-once', createAnimationDirective('fade-in'))
  nuxtApp.vueApp.directive('motion-pop-visible', createAnimationDirective('pop'))
})