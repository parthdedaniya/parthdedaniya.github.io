<template>
  <section id="about" class="section-padding bg-white dark:bg-gray-800">
    <div class="container-custom">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          v-motion-fade-in-up
          v-motion-visible-once
        >
          About <span class="text-gradient">Me</span>
        </h2>
        
        <!-- Introduction Paragraph -->
        <div 
          class="max-w-4xl mx-auto"
          v-motion-fade-in-up
          v-motion-visible-once
          :delay="200"
        >
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            I'm a full-stack developer who loves crafting 
            <span class="font-semibold text-primary-600 dark:text-primary-400">elegant UIs</span> 
            and 
            <span class="font-semibold text-primary-600 dark:text-primary-400">scalable backend systems</span>. 
            My current stack includes Vue.js, Nuxt, and NestJS — with a focus on real-time features 
            and cloud-native deployments (AWS).
          </p>
          
          <p class="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
            or building side projects that solve real-world problems. I believe in writing clean, 
            maintainable code and creating delightful user experiences.
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
          <!-- Profile Image Placeholder -->
          <div class="relative">
            <div class="w-64 h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl shadow-2xl flex items-center justify-center">
              <User class="w-32 h-32 text-white/80" />
            </div>
            <!-- Floating decoration -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-primary-300 rounded-full animate-bounce-gentle"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-float animation-delay-400"></div>
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
  { value: '50+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' }
]
</script>

<style scoped>
.skill-badge {
  @apply p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer hover:border-primary-300 dark:hover:border-primary-600;
}

.skill-badge:hover {
  @apply shadow-primary-500/10;
}

.text-gradient {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>