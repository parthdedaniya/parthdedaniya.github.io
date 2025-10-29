<template>
  <section id="contact" class="section-padding bg-white dark:bg-gray-800">
    <div class="container-custom">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          v-motion-fade-in-up
          v-motion-visible-once
        >
          Let's <span class="text-gradient">Connect</span> 🚀
        </h2>
        
        <p 
          class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          v-motion-fade-in-up
          v-motion-visible-once
          :delay="200"
        >
          Got a project or idea? Let's build something awesome together! 
          I'm always excited to work on innovative projects and collaborate with fellow developers.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Contact Info & Social Links -->
        <div 
          class="space-y-8"
          v-motion-slide-visible-once-left
          :delay="400"
        >
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities. 
              Whether you have a question, want to collaborate, or just want to say hi, 
              I'd love to hear from you!
            </p>
          </div>

          <!-- Contact Methods -->
          <div class="space-y-4">
            <a
              v-for="(contact, index) in contactMethods"
              :key="contact.type"
              :href="contact.href"
              :target="contact.external ? '_blank' : '_self'"
              :rel="contact.external ? 'noopener noreferrer' : ''"
              class="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 group hover:scale-105"
              v-motion-fade-in-up
              v-motion-visible-once
              :delay="500 + index * 100"
            >
              <div 
                class="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                :class="contact.bgColor"
              >
                <component :is="contact.icon" :class="contact.iconColor" class="w-6 h-6" />
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {{ contact.title }}
                </h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ contact.description }}
                </p>
              </div>
              <ExternalLink 
                v-if="contact.external" 
                class="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors duration-200" 
              />
            </a>
          </div>

          <!-- Social Links -->
          <div class="pt-8 border-t border-gray-200 dark:border-gray-700">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Follow Me
            </h4>
            <div class="flex space-x-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                :aria-label="social.name"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 glow-effect"
                :class="social.bgColor"
                v-motion-fade-in-up
                v-motion-visible-once
                :delay="700"
              >
                <component :is="social.icon" :class="social.iconColor" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div 
          class="card p-8"
          v-motion-slide-visible-once-right
          :delay="600"
        >
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="Let's work together!"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary group"
              :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
              <Send class="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </form>

          <!-- Success Message -->
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div v-if="showSuccess" class="mt-4 p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl">
              <div class="flex items-center space-x-2">
                <CheckCircle class="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <p class="text-sm text-primary-700 dark:text-primary-300">
                  Thanks for your message! I'll get back to you soon.
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter, 
  ExternalLink, 
  Send, 
  CheckCircle,
  MessageCircle,
  Calendar
} from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const contactMethods = [
  {
    type: 'email',
    title: 'Email Me',
    description: 'youremail@example.com',
    href: 'mailto:youremail@example.com',
    icon: Mail,
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    external: false
  },
  {
    type: 'linkedin',
    title: 'LinkedIn',
    description: 'Connect professionally',
    href: 'https://linkedin.com/in/yourprofile',
    icon: Linkedin,
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    external: true
  },
  {
    type: 'calendar',
    title: 'Schedule a Call',
    description: 'Book a 30-min chat',
    href: 'https://calendly.com/yourprofile',
    icon: Calendar,
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
    external: true
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourgithub',
    icon: Github,
    bgColor: 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600',
    iconColor: 'text-gray-700 dark:text-gray-300'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    icon: Linkedin,
    bgColor: 'bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50',
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourhandle',
    icon: Twitter,
    bgColor: 'bg-sky-100 dark:bg-sky-900/30 hover:bg-sky-200 dark:hover:bg-sky-900/50',
    iconColor: 'text-sky-600 dark:text-sky-400'
  }
]

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>