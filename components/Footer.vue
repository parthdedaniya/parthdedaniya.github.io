<template>
  <footer class="relative overflow-hidden">
    <!-- Animated gradient line at top -->
    <div class="h-0.5 w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
    
    <!-- Content -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col items-center justify-center gap-4">
        <!-- Main footer text -->
        <div class="text-center">
          <p class="text-gray-700 dark:text-gray-300 text-sm font-medium">
            © {{ currentYear }} Parth Dedaniya
          </p>
        </div>

        <!-- Decorative elements -->
        <div class="flex items-center gap-6">
          <!-- Animated dots -->
          <div class="flex gap-2">
            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <div class="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" style="animation-delay: 0.2s;"></div>
            <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse" style="animation-delay: 0.4s;"></div>
          </div>
          
          <!-- Interactive emoji -->
          <span class="text-lg cursor-pointer hover:scale-125 hover:rotate-12 transition-all duration-300">✨</span>
          
          <!-- Animated dots -->
          <div class="flex gap-2">
            <div class="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style="animation-delay: 0.1s;"></div>
            <div class="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style="animation-delay: 0.3s;"></div>
            <div class="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style="animation-delay: 0.5s;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Back to Top Button -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-2 opacity-0"
    >
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-110 z-50 group backdrop-blur-sm"
        aria-label="Back to top"
      >
        <Icon name="mdi:arrow-up" class="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </Transition>
  </footer>
</template>

<script setup>
const showBackToTop = ref(false)
const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  showBackToTop.value = window.pageYOffset > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Clean minimal footer */
</style>
