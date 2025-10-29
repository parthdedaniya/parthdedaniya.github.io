<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          v-motion-slide-visible-bottom
          :delay="200"
        >
          Let's Connect
        </h2>
        <p 
          class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          v-motion-fade-visible
          :delay="400"
        >
          Got a project or idea? Let's build something awesome together! 
          I'm always excited to work on innovative projects.
        </p>
      </div>

      <!-- Contact Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Methods & Info -->
        <div 
          class="space-y-8"
          v-motion-slide-visible-left
          :delay="600"
        >
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities. 
              Whether you have a question or want to collaborate, I'd love to hear from you!
            </p>
          </div>

          <!-- Contact Cards -->
          <div class="space-y-4">
            <!-- Email -->
            <a
              href="mailto:youremail@example.com"
              class="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              v-motion-slide-visible-left
              :delay="800"
            >
              <div class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Icon name="mdi:email" class="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Email Me</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">youremail@example.com</p>
              </div>
              <Icon name="mdi:arrow-right" class="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors duration-200" />
            </a>

            <!-- LinkedIn -->
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              v-motion-slide-visible-left
              :delay="900"
            >
              <div class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Icon name="mdi:linkedin" class="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-1">LinkedIn</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">Connect professionally</p>
              </div>
              <Icon name="mdi:arrow-right" class="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors duration-200" />
            </a>

            <!-- GitHub -->
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              v-motion-slide-visible-left
              :delay="1000"
            >
              <div class="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Icon name="mdi:github" class="w-7 h-7 text-gray-700 dark:text-gray-300" />
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-1">GitHub</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">Check out my code</p>
              </div>
              <Icon name="mdi:arrow-right" class="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors duration-200" />
            </a>
          </div>

          <!-- Download Resume Button -->
          <div 
            class="pt-8"
            v-motion-fade-visible
            :delay="1100"
          >
            <a
              href="/resume.pdf"
              download
              class="flex items-center justify-center gap-2 w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Icon name="mdi:download" class="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div 
          class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl"
          v-motion-slide-visible-right
          :delay="700"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send a Message
          </h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="John Doe"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="john@example.com"
              />
            </div>

            <!-- Subject -->
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="Let's work together!"
              />
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
              <Icon name="mdi:send" class="w-5 h-5" />
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
            <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <div class="flex items-center gap-2">
                <Icon name="mdi:check-circle" class="w-6 h-6 text-green-600 dark:text-green-400" />
                <p class="text-sm text-green-700 dark:text-green-300 font-medium">
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
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission - Replace with actual API call
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
/* Additional styles can be added here if needed */
</style>
