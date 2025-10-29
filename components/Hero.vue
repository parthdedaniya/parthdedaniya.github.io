<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
    <!-- Animated Background -->
    <div class="absolute inset-0 -z-10">
      <!-- Gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <!-- Floating particles/blobs -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute top-40 right-20 w-96 h-96 bg-primary-400/30 dark:bg-primary-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute bottom-32 left-1/4 w-80 h-80 bg-primary-200/20 dark:bg-primary-300/10 rounded-full blur-3xl animate-float-slow"></div>
    </div>

    <!-- Content -->
    <div class="max-w-5xl mx-auto text-center px-4">
      <!-- Main Heading -->
      <h1 
        class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        v-motion-slide-visible-bottom
        :delay="300"
      >
        Hey, I'm <span class="text-primary-500">Parth</span> 👋
      </h1>
      
      <!-- Intro Text -->
      <p 
        class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
        v-motion-slide-visible-bottom
        :delay="500"
      >
        A full-stack developer who builds high-performance web apps with beautiful UIs and scalable backend systems.
      </p>

      <!-- Tech Stack Quick Summary -->
      <div 
        class="flex flex-wrap items-center justify-center gap-4 mb-12 text-gray-700 dark:text-gray-400"
        v-motion-fade-visible
        :delay="700"
      >
        <div class="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
          <Icon name="logos:vue" class="w-5 h-5" />
          <span class="text-sm font-medium">Vue.js</span>
        </div>
        <div class="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
          <Icon name="logos:nuxt-icon" class="w-5 h-5" />
          <span class="text-sm font-medium">Nuxt</span>
        </div>
        <div class="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
          <Icon name="logos:nestjs" class="w-5 h-5" />
          <span class="text-sm font-medium">NestJS</span>
        </div>
        <div class="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
          <Icon name="logos:aws" class="w-5 h-5" />
          <span class="text-sm font-medium">AWS</span>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div 
        class="flex flex-col sm:flex-row items-center justify-center gap-4"
        v-motion-slide-visible-bottom
        :delay="900"
      >
        <a 
          href="#projects" 
          class="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
        >
          View My Work
          <Icon name="mdi:arrow-down" class="w-5 h-5" />
        </a>
        
        <a 
          href="#contact" 
          class="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2"
        >
          Let's Connect
          <Icon name="mdi:email" class="w-5 h-5" />
        </a>
      </div>

      <!-- Scroll Indicator -->
      <div 
        class="mt-16 flex flex-col items-center"
        v-motion-fade-visible
        :delay="1100"
      >
        <span class="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
        <div class="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center p-2">
          <div class="w-1 h-3 bg-primary-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Smooth scroll behavior for anchor links
onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-30px) translateX(-15px);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-15px) translateX(20px);
  }
}

.animate-float {
  animation: float 10s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 12s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-float-slow {
  animation: float-slow 15s ease-in-out infinite;
  animation-delay: 2s;
}
</style>
