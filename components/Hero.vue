<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-primary-50/30 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <!-- Floating particles/blobs -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-primary-300/20 rounded-full blur-xl animate-float"></div>
      <div class="absolute top-40 right-20 w-24 h-24 bg-primary-400/30 rounded-full blur-lg animate-float animation-delay-400"></div>
      <div class="absolute bottom-32 left-1/4 w-40 h-40 bg-primary-200/20 rounded-full blur-2xl animate-float animation-delay-800"></div>
      <div class="absolute bottom-20 right-1/3 w-28 h-28 bg-primary-500/20 rounded-full blur-xl animate-float animation-delay-600"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container-custom text-center">
      <!-- Main Heading -->
      <div class="space-y-6 mb-12">
        <h1 
          class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
          v-motion-fade-in-up
        >
          Hey, I'm 
          <span class="text-gradient">Parth</span>
          <span 
            class="inline-block animate-bounce-gentle ml-2"
            v-motion-fade-in-up
            :delay="300"
          >
            👋
          </span>
        </h1>
        
        <p 
          class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          v-motion-fade-in-up
          :delay="400"
        >
          <span class="font-semibold text-primary-600 dark:text-primary-400">Frontend + Backend Developer</span>
          <br class="hidden sm:block">
          <span class="text-gray-500 dark:text-gray-400">|</span>
          Vue, Nuxt, NestJS, AWS
        </p>
      </div>

      <!-- CTA Buttons -->
      <div 
        class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        v-motion-fade-in-up
        :delay="600"
      >
        <NuxtLink 
          to="#projects" 
          class="btn-primary group"
        >
          <span>View My Work</span>
          <ArrowDown class="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-y-1" />
        </NuxtLink>
        
        <NuxtLink 
          to="#contact" 
          class="btn-secondary group"
        >
          <span>Contact Me</span>
          <Mail class="w-4 h-4 ml-2 transition-transform duration-200 group-hover:scale-110" />
        </NuxtLink>
      </div>

      <!-- Scroll Indicator -->
      <div 
        class="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-500"
        v-motion-fade-in-up
        :delay="800"
      >
        <span class="text-sm font-medium">Scroll to explore</span>
        <div class="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-primary-500 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
  </section>
</template>

<script setup>
import { ArrowDown, Mail } from 'lucide-vue-next'

// Add some interactive mouse effects
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
/* Additional custom styles for hero section */
.text-gradient {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>