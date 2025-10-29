<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 relative">
    <!-- Gradient glow effect -->
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
    
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Brand & Description -->
        <div 
          class="space-y-4"
          v-motion-fade-visible
          :delay="200"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
            <span class="text-primary-500">&lt;</span>Parth<span class="text-primary-500">/&gt;</span>
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Full-stack developer specializing in Vue.js, Nuxt, NestJS, and AWS. 
            Building elegant UIs and scalable backend systems.
          </p>
        </div>

        <!-- Quick Links -->
        <div 
          class="space-y-4"
          v-motion-fade-visible
          :delay="400"
        >
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h4>
          <nav class="flex flex-col space-y-2">
            <a href="#hero" class="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200">
              Home
            </a>
            <a href="#tech" class="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200">
              Tech Stack
            </a>
            <a href="#projects" class="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200">
              Projects
            </a>
            <a href="#testimonials" class="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200">
              Testimonials
            </a>
            <a href="#contact" class="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200">
              Contact
            </a>
          </nav>
        </div>

        <!-- Social Links -->
        <div 
          class="space-y-4"
          v-motion-fade-visible
          :delay="600"
        >
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Connect With Me
          </h4>
          <div class="flex space-x-4">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <Icon name="mdi:github" class="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <Icon name="mdi:linkedin" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </a>
            <a
              href="mailto:youremail@example.com"
              aria-label="Email"
              class="w-12 h-12 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <Icon name="mdi:email" class="w-6 h-6 text-red-600 dark:text-red-400" />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              class="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 hover:bg-sky-200 dark:hover:bg-sky-900/50 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <Icon name="mdi:twitter" class="w-6 h-6 text-sky-600 dark:text-sky-400" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div 
        class="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        v-motion-fade-visible
        :delay="800"
      >
        <!-- Copyright -->
        <div class="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
          <span>© {{ currentYear }} Parth. All rights reserved.</span>
        </div>

        <!-- Built With -->
        <div class="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
          <span>Built with</span>
          <Icon name="mdi:heart" class="w-4 h-4 text-red-500 animate-pulse" />
          <span>using Nuxt.js & TailwindCSS</span>
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
        class="fixed bottom-8 right-8 p-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <Icon name="mdi:arrow-up" class="w-6 h-6" />
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
/* Additional styles can be added here if needed */
</style>
