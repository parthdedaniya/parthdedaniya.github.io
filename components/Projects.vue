<template>
  <section id="projects" class="py-20 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 gradient-text"
          v-motion-slide-visible-bottom
          :delay="200"
        >
          Projects
        </h2>
        <p 
          class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          v-motion-fade-visible
          :delay="400"
        >
          Here are some projects that showcase my skills in full-stack development
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-card group"
          :ref="el => projectCardRefs[index] = el"
          v-motion-slide-visible-bottom
          :delay="600 + index * 150"
        >
          <!-- Project Content -->
          <div class="p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black relative flex flex-col h-full border-l-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl" :style="{ borderColor: project.color }">
            <!-- Project Icon with colored background -->
            <div class="mb-6">
              <div class="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" :style="{ backgroundColor: project.color + '20' }">
                <Icon :name="project.icon" class="w-8 h-8 transition-all duration-300" :style="{ color: project.color }" />
              </div>
            </div>
            
            <!-- Title -->
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-200 leading-tight">
              {{ project.title }}
            </h3>

            <!-- Description - flex-grow to push content below -->
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
              {{ project.description }}
            </p>

            <!-- Bottom section - stays at bottom -->
            <div class="mt-auto">
              <!-- Tech Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Links -->
              <div class="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <template v-if="project.liveUrl || project.githubUrl">
                  <a
                    v-if="project.liveUrl"
                    :href="project.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                  >
                    <Icon name="mdi:web" class="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                  >
                    <Icon name="mdi:github" class="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </template>
                <div
                  v-else
                  class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg text-sm font-medium cursor-not-allowed"
                >
                  <Icon name="mdi:lock" class="w-4 h-4" />
                  <span>Private Project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View More Projects Button -->
      <div 
        class="text-center mt-12"
        v-motion-fade-visible
        :delay="1200"
      >
        <a
          href="https://github.com/parthdedaniya"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 rounded-lg font-semibold transition-all duration-200 hover:scale-105 no-underline"
        >
          <span>View More on GitHub</span>
          <Icon name="mdi:arrow-right" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const projectCardRefs = ref([])

const projects = [
  {
    id: 1,
    title: 'Cedar Authorization Tool',
    description: 'Comprehensive authorization management system inspired by AWS Cedar, featuring centralized policy and entity management, real-time access evaluation, and fine-grained control for modern applications.',
    technologies: ['Nuxt.js', 'Express', 'DynamoDB', 'AWS', 'Cedar'],
    icon: 'mdi:shield-check-outline',
    color: '#22c55e', // Green
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 2,
    title: 'Cedar Policy Playground',
    description: 'Interactive playground to visualize and test Cedar authorization policies against entities and schemas with live validation and syntax highlighting.',
    technologies: ['Nuxt.js', 'WebAssembly', 'Cedar', 'DynamoDB', 'Analytics'],
    icon: 'mdi:code-braces',
    color: '#3b82f6', // Blue
    liveUrl: 'https://playground.openparc.dev/',
    githubUrl: null
  },
  {
    id: 3,
    title: 'HR Management System',
    description: 'Comprehensive HRMS application supporting employee registration, profile management, leave requests, and department management with secure authentication and drag-and-drop functionality.',
    technologies: ['Vue.js', 'Firebase'],
    icon: 'mdi:account-group-outline',
    color: '#f59e0b', // Amber
    liveUrl: null,
    githubUrl: 'https://github.com/parthatsimform/HR-Management-Final-Project/tree/development'
  }
]

// 3D card tilt effect on mouse move (subtle)
onMounted(() => {
  projectCardRefs.value.forEach((card) => {
    if (!card) return
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    })
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
    })
  })
})
</script>

<style scoped>
.project-card {
  border-radius: 1rem;
  overflow: visible;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  display: flex;
  flex-direction: column;
  background: transparent;
  position: relative;
  z-index: 1;
}

.project-card:hover {
  transform: translateY(-8px);
  z-index: 10;
}
</style>
