<template>
  <section id="projects" class="section-padding bg-gray-50 dark:bg-gray-900">
    <div class="container-custom">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          v-motion-fade-in-up
          v-motion-visible-once
        >
          Projects I'm <span class="text-gradient">Proud Of</span> 💻
        </h2>
        
        <p 
          class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          v-motion-fade-in-up
          v-motion-visible-once
          :delay="200"
        >
          Here are some of my recent projects that showcase my skills in full-stack development, 
          real-time systems, and cloud architecture.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-card group"
          v-motion-fade-in-up
          v-motion-visible-once
          :delay="300 + index * 150"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-primary-400 to-primary-600 h-48">
            <div class="absolute inset-0 flex items-center justify-center">
              <component :is="project.icon" class="w-16 h-16 text-white/80" />
            </div>
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="flex space-x-3">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                  @click.stop
                >
                  <ExternalLink class="w-5 h-5 text-white" />
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                  @click.stop
                >
                  <Github class="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6 space-y-4">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {{ project.description }}
              </p>
            </div>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-3 pt-4">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 btn-primary text-center text-sm py-2"
              >
                <ExternalLink class="w-4 h-4 mr-2" />
                View Live
              </a>
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 btn-secondary text-center text-sm py-2"
              >
                <Github class="w-4 h-4 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- View More Projects -->
      <div 
        class="text-center mt-12"
        v-motion-fade-in-up
        v-motion-visible-once
        :delay="800"
      >
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-ghost group"
        >
          <span>View More Projects</span>
          <ArrowRight class="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  MessageSquare, 
  Shield, 
  Users,
  Database,
  Zap,
  Globe
} from 'lucide-vue-next'

const projects = [
  {
    id: 1,
    title: 'SmartChat',
    description: 'Real-time chat application with algorithmic friend discovery and trust-based voice/video unlock system. Features include intelligent matching, secure communication, and progressive relationship building.',
    technologies: ['Nuxt', 'NestJS', 'WebRTC', 'DynamoDB', 'Socket.io'],
    icon: MessageSquare,
    liveUrl: 'https://smartchat-demo.com',
    githubUrl: 'https://github.com/yourgithub/smartchat'
  },
  {
    id: 2,
    title: 'Cedar Authorization Tool',
    description: 'Cedar-based policy engine integrated with Nuxt and Monaco Editor. Provides a visual interface for creating, testing, and managing authorization policies with real-time validation.',
    technologies: ['Vue 3', 'WASM', 'Cedar', 'Monaco Editor', 'TypeScript'],
    icon: Shield,
    liveUrl: 'https://cedar-auth-tool.com',
    githubUrl: 'https://github.com/yourgithub/cedar-auth'
  },
  {
    id: 3,
    title: 'OrgFlow',
    description: 'Role-based organization management system with invite workflows and SQS background task processing. Streamlines team management with automated onboarding and permission handling.',
    technologies: ['NestJS', 'AWS SQS', 'DynamoDB', 'Vue.js', 'Lambda'],
    icon: Users,
    liveUrl: 'https://orgflow-app.com',
    githubUrl: 'https://github.com/yourgithub/orgflow'
  },
  {
    id: 4,
    title: 'DataSync Pro',
    description: 'High-performance data synchronization service with real-time conflict resolution. Handles millions of records with eventual consistency and automated backup strategies.',
    technologies: ['Node.js', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    icon: Database,
    githubUrl: 'https://github.com/yourgithub/datasync-pro'
  },
  {
    id: 5,
    title: 'Lightning Deploy',
    description: 'Serverless deployment platform with zero-downtime deployments and automatic rollbacks. Features include blue-green deployments, health checks, and performance monitoring.',
    technologies: ['AWS Lambda', 'CloudFormation', 'S3', 'CloudFront', 'Node.js'],
    icon: Zap,
    liveUrl: 'https://lightning-deploy.com',
    githubUrl: 'https://github.com/yourgithub/lightning-deploy'
  },
  {
    id: 6,
    title: 'Global Connect',
    description: 'Multi-region content delivery network with edge computing capabilities. Optimizes content delivery with intelligent routing and caching strategies.',
    technologies: ['CDN', 'Edge Computing', 'AWS', 'Terraform', 'Go'],
    icon: Globe,
    liveUrl: 'https://global-connect.com',
    githubUrl: 'https://github.com/yourgithub/global-connect'
  }
]
</script>

<style scoped>
.project-card {
  @apply card card-hover cursor-pointer;
}

.project-card:hover {
  @apply glow-effect;
}

.text-gradient {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>