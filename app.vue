<template>
  <div class="w-full overflow-x-hidden bg-white dark:bg-[#121212] transition-colors duration-300">
    <CustomCursor />
    <Navbar />
    <main class="w-full">
      <Hero id="hero" />
      <TechStack id="tech" />
      <Projects id="projects" />
      <Contact id="contact" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
const { initTheme } = useTheme()

// Initialize theme on mount
onMounted(() => {
  initTheme()
})

// Global app configuration
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'antialiased'
  }
})
</script>