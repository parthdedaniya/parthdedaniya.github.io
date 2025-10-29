<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          v-motion-slide-visible-bottom
          :delay="200"
        >
          Featured Projects
        </h2>
        <p 
          class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
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
          class="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          v-motion-slide-visible-bottom
          :delay="600 + index * 150"
        >
          <!-- Project Image/Placeholder -->
          <div class="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <Icon :name="project.icon" class="w-20 h-20 text-white opacity-80" />
            </div>
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200 hover:scale-110"
                title="View Live Demo"
              >
                <Icon name="mdi:web" class="w-6 h-6 text-white" />
              </a>
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200 hover:scale-110"
                title="View GitHub Repo"
              >
                <Icon name="mdi:github" class="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors duration-200">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Contribution/Role -->
            <p class="text-gray-700 dark:text-gray-300 text-sm mb-4 italic">
              {{ project.contribution }}
            </p>

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
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
        >
          <span>View More on GitHub</span>
          <Icon name="mdi:arrow-right" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'SmartChat App',
    description: 'Real-time chat platform like Snapchat with advanced features.',
    contribution: 'Built with Nuxt + NestJS. Includes friend discovery algorithm, trust-based voice/video unlock, and real-time messaging with WebRTC.',
    technologies: ['Vue 3', 'NestJS', 'WebRTC', 'DynamoDB', 'Socket.io'],
    icon: 'mdi:message-text',
    liveUrl: 'https://smartchat-demo.com',
    githubUrl: 'https://github.com/yourgithub/smartchat'
  },
  {
    id: 2,
    title: 'Cedar Authorization Tool',
    description: 'Visual policy editor for Cedar authorization engine.',
    contribution: 'Integrated Cedar WASM with Monaco Editor in Vue. Provides real-time policy validation and testing interface.',
    technologies: ['Vue 3', 'WASM', 'Cedar', 'Monaco Editor', 'TypeScript'],
    icon: 'mdi:shield-lock',
    liveUrl: 'https://cedar-auth-tool.com',
    githubUrl: 'https://github.com/yourgithub/cedar-auth'
  },
  {
    id: 3,
    title: 'OrgFlow',
    description: 'Role-based organization management system.',
    contribution: 'Built invite workflows with SQS background task processing. Automated team onboarding and permission handling.',
    technologies: ['NestJS', 'AWS SQS', 'DynamoDB', 'Vue.js', 'Lambda'],
    icon: 'mdi:account-group',
    liveUrl: 'https://orgflow-app.com',
    githubUrl: 'https://github.com/yourgithub/orgflow'
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    description: 'Full-featured online shopping platform with payment integration.',
    contribution: 'Developed the entire frontend and integrated Stripe for payments. Implemented cart management and order tracking.',
    technologies: ['Nuxt 3', 'Stripe', 'PostgreSQL', 'Prisma'],
    icon: 'mdi:shopping',
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/yourgithub/ecommerce'
  }
]
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
