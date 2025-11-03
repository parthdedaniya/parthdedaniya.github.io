<template>
  <section class="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5 dark:opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="stat.id"
          class="text-center group"
          v-motion-pop-visible
          :delay="index * 150"
        >
          <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
            <!-- Icon -->
            <div class="mb-4 flex justify-center">
              <div class="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                <Icon :name="stat.icon" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            
            <!-- Number -->
            <div class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              <span ref="counterRef" :data-target="stat.value" class="counter-number">
                {{ animatedValue[index] }}{{ stat.suffix }}
              </span>
            </div>
            
            <!-- Label -->
            <div class="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const stats = [
  { id: 1, value: 50, suffix: '+', label: 'Projects Completed', icon: 'mdi:code-tags' },
  { id: 2, value: 30, suffix: '+', label: 'Happy Clients', icon: 'mdi:account-heart' },
  { id: 3, value: 5, suffix: '+', label: 'Years Experience', icon: 'mdi:calendar-clock' },
  { id: 4, value: 100, suffix: '%', label: 'Client Satisfaction', icon: 'mdi:star-check' }
]

const animatedValue = ref(stats.map(() => 0))
const counterRef = ref([])

const animateCounter = (index, target, duration = 2000) => {
  const start = 0
  const startTime = performance.now()
  
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    
    animatedValue.value[index] = Math.floor(easeOut * target)
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      animatedValue.value[index] = target
    }
  }
  
  requestAnimationFrame(animate)
}

onMounted(() => {
  // Use IntersectionObserver to trigger animation when in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting && animatedValue.value[index] === 0) {
          const target = parseInt(entry.target.getAttribute('data-target') || '0')
          animateCounter(index, target)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  // Observe all counter elements
  nextTick(() => {
    const elements = document.querySelectorAll('.counter-number')
    elements.forEach((el) => observer.observe(el))
  })
})
</script>

<style scoped>
.counter-number {
  display: inline-block;
  transition: transform 0.2s ease;
}
</style>

