<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Enable smooth scrolling and handle scroll behavior
const handleSmoothScrollClick = (e) => {
  const target = e.target.closest('a[href^="#"]')
  if (target) {
    e.preventDefault()
    const id = target.getAttribute('href')?.substring(1)
    if (id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
}

onMounted(() => {
  // Add smooth scrolling for anchor links
  document.addEventListener('click', handleSmoothScrollClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleSmoothScrollClick)
})
</script>