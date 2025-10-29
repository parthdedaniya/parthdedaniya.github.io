<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a 
          href="#hero" 
          class="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary-500 transition-colors duration-200"
          v-motion-slide-visible-left
        >
          <span class="text-primary-500">&lt;</span>Parth<span class="text-primary-500">/&gt;</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8" v-motion-fade-visible>
          <a 
            href="#hero"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#tech"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
          >
            Tech Stack
          </a>
          <a 
            href="#projects"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
          >
            Projects
          </a>
          <a 
            href="#testimonials"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
          >
            Testimonials
          </a>
          <a 
            href="#contact"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
          >
            Contact
          </a>
          
          <!-- Download Resume Button -->
          <a
            href="/resume.pdf"
            download
            class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Download Resume
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200"
          v-motion-fade-visible
        >
          <Icon v-if="!isMobileMenuOpen" name="mdi:menu" class="w-6 h-6" />
          <Icon v-else name="mdi:close" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700 mt-2">
          <div class="flex flex-col space-y-2 pt-4">
            <a
              href="#hero"
              @click="closeMobileMenu"
              class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#tech"
              @click="closeMobileMenu"
              class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              Tech Stack
            </a>
            <a
              href="#projects"
              @click="closeMobileMenu"
              class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#testimonials"
              @click="closeMobileMenu"
              class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              @click="closeMobileMenu"
              class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              download
              class="mx-4 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium text-center transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
