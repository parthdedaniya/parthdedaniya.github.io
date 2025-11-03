<template>
  <section id="about" class="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5 dark:opacity-10">
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl animate-float-smooth"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-primary-500 rounded-full blur-3xl animate-float-smooth" style="animation-delay: 1.5s;"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          v-motion-fade-in-up
          v-motion-visible-once
        >
          About <span class="gradient-text">Me</span>
        </h2>
        
        <!-- Introduction Paragraph -->
        <div 
          class="max-w-4xl mx-auto"
          v-motion-fade-in-up
          v-motion-visible-once
          :delay="200"
        >
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Full Stack Developer with 
            <span class="font-semibold text-primary-600 dark:text-primary-400">3 years of hands-on experience</span> 
            building 
            <span class="font-semibold text-primary-600 dark:text-primary-400">scalable web applications</span>. 
            Currently working at Z Strike, developing a next-gen authorization platform using 
            <span class="font-semibold text-primary-600 dark:text-primary-400">Cedar policy language</span> 
            integrated via WebAssembly.
          </p>
          
          <p class="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Specialized in Vue.js, Nuxt, Express.js, and NestJS, with a focus on integrating AWS services. 
            I've delivered 20+ major features, built 30+ reusable components, and improved UI efficiency by 25% 
            through optimized state management. Passionate about building tools that empower developers and 
            setting technical standards in agile startup environments.
          </p>
        </div>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Skills Badges -->
        <div 
          class="space-y-8"
          v-motion-slide-visible-once-left
          :delay="400"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technologies I Love Working With
          </h3>
          
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div
              v-for="(skill, index) in skills"
              :key="skill.name"
              class="skill-badge group"
              v-motion-fade-in-up
              v-motion-visible-once
              :delay="500 + index * 100"
            >
              <div class="flex items-center space-x-3">
                <div 
                  class="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  :class="skill.bgColor"
                >
                  <component :is="skill.icon" :class="skill.iconColor" class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white text-sm">
                    {{ skill.name }}
                  </h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ skill.category }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Image & Stats -->
        <div 
          class="flex flex-col items-center space-y-8"
          v-motion-slide-visible-once-right
          :delay="600"
        >
          <!-- Profile Image Placeholder with 3D effect -->
          <div class="relative group">
            <div class="w-64 h-64 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-3xl shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-105 hover:rotate-3 glow-on-hover relative overflow-hidden">
              <!-- Animated gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary-300/50 to-primary-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <!-- Shimmer effect -->
              <div class="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <User class="w-32 h-32 text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <!-- Floating decoration -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-primary-300 rounded-full animate-bounce-gentle glow-on-hover"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-float animation-delay-400 glow-on-hover"></div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-3 gap-6 text-center">
            <div 
              v-for="(stat, index) in stats"
              :key="stat.label"
              class="space-y-2"
              v-motion-fade-in-up
              v-motion-visible-once
              :delay="800 + index * 100"
            >
              <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  Code2, 
  Database, 
  Cloud, 
  Palette, 
  Zap, 
  Globe, 
  Server, 
  Smartphone,
  User
} from 'lucide-vue-next'

const skills = [
  {
    name: 'Vue.js',
    category: 'Frontend',
    icon: Code2,
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400'
  },
  {
    name: 'Nuxt',
    category: 'Framework',
    icon: Globe,
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    name: 'NestJS',
    category: 'Backend',
    icon: Server,
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    iconColor: 'text-red-600 dark:text-red-400'
  },
  {
    name: 'Node.js',
    category: 'Runtime',
    icon: Zap,
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    iconColor: 'text-yellow-600 dark:text-yellow-400'
  },
  {
    name: 'AWS',
    category: 'Cloud',
    icon: Cloud,
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400'
  },
  {
    name: 'DynamoDB',
    category: 'Database',
    icon: Database,
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    name: 'MongoDB',
    category: 'Database',
    icon: Database,
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400'
  },
  {
    name: 'TailwindCSS',
    category: 'Styling',
    icon: Palette,
    bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
    iconColor: 'text-cyan-600 dark:text-cyan-400'
  }
]

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Major Features' },
  { value: '1000+', label: 'Users Impacted' }
]
</script>

<style scoped>
.skill-badge {
  @apply p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer hover:border-primary-300 dark:hover:border-primary-600;
}

.skill-badge:hover {
  @apply shadow-primary-500/10;
}

</style>