<template>
  <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <!-- Gradient glow effect -->
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
    
    <div class="container-custom py-8">
      <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <!-- Copyright -->
        <div 
          class="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-2"
          v-motion-fade-in-up
        >
          <span>© 2025 Parth — Built with</span>
          <Heart class="w-4 h-4 text-primary-500 animate-pulse" />
          <span>using Vue + Nuxt</span>
        </div>

        <!-- Social Links -->
        <div 
          class="flex items-center space-x-4"
          v-motion-fade-in-up
          :delay="200"
        >
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            :aria-label="social.name"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110"
          >
            <component :is="social.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- Back to top button -->
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
          class="fixed bottom-8 right-8 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 hover:shadow-xl transition-all duration-200 hover:scale-110 glow-effect"
          aria-label="Back to top"
        >
          <ChevronUp class="w-5 h-5" />
        </button>
      </Transition>
    </div>
  </footer>
</template>

<script setup>
import { Heart, Github, Linkedin, Mail, ChevronUp } from 'lucide-vue-next'

const showBackToTop = ref(false)

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourgithub',
    icon: Github
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    icon: Linkedin
  },
  {
    name: 'Email',
    href: 'mailto:youremail@example.com',
    icon: Mail
  }
]

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