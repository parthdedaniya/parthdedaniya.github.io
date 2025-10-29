<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
    <!-- Progress bar -->
    <div 
      class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 ease-out"
      :style="{ width: `${scrollProgress}%` }"
    ></div>
    
    <div class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink 
          to="#hero" 
          class="text-xl font-bold text-gray-900 dark:text-white hover:text-primary-500 transition-colors duration-200"
          v-motion-fade-in-left
        >
          Parth<span class="text-primary-500">.</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8" v-motion-fade-in-down>
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.href"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 relative group"
          >
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </div>

        <!-- Theme Toggle & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <!-- Theme Toggle -->
          <button
            @click="toggleColorMode"
            class="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            v-motion-fade-in-right
          >
            <Sun v-if="$colorMode.value === 'dark'" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            v-motion-fade-in-right
          >
            <Menu v-if="!isMobileMenuOpen" class="w-5 h-5" />
            <X v-else class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="item in navItems"
              :key="item.name"
              :to="item.href"
              @click="closeMobileMenu"
              class="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { Sun, Moon, Menu, X } from 'lucide-vue-next'

const colorMode = useColorMode()
const isMobileMenuOpen = ref(false)
const scrollProgress = ref(0)

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Calculate scroll progress
const updateScrollProgress = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (scrollTop / scrollHeight) * 100
}

// Close mobile menu when clicking outside
const handleDocumentClick = (e) => {
  if (!e.target.closest('nav') && isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  document.addEventListener('click', handleDocumentClick)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
  document.removeEventListener('click', handleDocumentClick)
})
</script>