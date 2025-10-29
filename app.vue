<template>
  <div>
    <Navbar />
    <main class="container mx-auto px-4">
      <Hero id="hero" />
      <TechStack id="tech" />
      <Projects id="projects" />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Global app configuration
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'antialiased bg-white dark:bg-gray-900'
  }
})
</script>