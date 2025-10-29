<template>
  <section id="tech" class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-6xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          v-motion-slide-visible-bottom
          :delay="200"
        >
          My Tech Stack
        </h2>
        <p 
          class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          v-motion-fade-visible
          :delay="400"
        >
          Technologies I work with to build modern, scalable applications
        </p>
      </div>

      <!-- Tech Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(tech, index) in technologies"
          :key="tech.name"
          class="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-750 transition-all duration-300 hover:scale-110 hover:shadow-xl group cursor-pointer"
          v-motion-pop-visible
          :delay="600 + index * 100"
        >
          <Icon 
            :name="tech.icon" 
            class="w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-125"
          />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {{ tech.name }}
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
            {{ tech.category }}
          </p>
        </div>
      </div>

      <!-- Additional Skills -->
      <div 
        class="mt-16 text-center"
        v-motion-fade-visible
        :delay="1400"
      >
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Additional Skills & Tools
        </h3>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <span
            v-for="(skill, index) in additionalSkills"
            :key="skill"
            class="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
            v-motion-fade-visible
            :delay="1600 + index * 50"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = [
  {
    name: 'Vue.js',
    icon: 'logos:vue',
    category: 'Frontend Framework'
  },
  {
    name: 'Nuxt.js',
    icon: 'logos:nuxt-icon',
    category: 'Full-stack Framework'
  },
  {
    name: 'NestJS',
    icon: 'logos:nestjs',
    category: 'Backend Framework'
  },
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon',
    category: 'JavaScript Runtime'
  },
  {
    name: 'DynamoDB',
    icon: 'logos:aws-dynamodb',
    category: 'NoSQL Database'
  },
  {
    name: 'MongoDB',
    icon: 'logos:mongodb-icon',
    category: 'NoSQL Database'
  },
  {
    name: 'AWS',
    icon: 'logos:aws',
    category: 'Cloud Platform'
  },
  {
    name: 'TailwindCSS',
    icon: 'logos:tailwindcss-icon',
    category: 'CSS Framework'
  }
]

const additionalSkills = [
  'TypeScript',
  'GraphQL',
  'REST APIs',
  'WebRTC',
  'Socket.io',
  'Redis',
  'Docker',
  'Git',
  'CI/CD',
  'Lambda',
  'S3',
  'CloudFront',
  'PostgreSQL',
  'Microservices',
  'Serverless'
]
</script>

<style scoped>
/* Additional hover effects can be added here */
</style>
