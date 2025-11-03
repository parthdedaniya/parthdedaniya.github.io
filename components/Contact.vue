<template>
  <section id="contact" class="py-20 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 
          class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
          v-motion-slide-visible-bottom
          :delay="200"
        >
          Let's Work Together
        </h2>
        <p 
          class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          v-motion-fade-visible
          :delay="400"
        >
          Have an exciting project or idea? I'd love to hear about it!
        </p>
      </div>

      <!-- Contact Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <!-- Email Card -->
        <a
          href="mailto:parthdedaniya45@gmail.com"
          class="contact-card-modern group"
          v-motion-slide-visible-bottom
          :delay="600"
        >
          <div class="relative h-full">
            <!-- Icon Container -->
            <div class="mb-6 relative">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-blue-500/50">
                <Icon name="mdi:email-outline" class="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <!-- Subtle pulse effect on hover -->
              <div class="absolute inset-0 w-20 h-20 bg-blue-500/30 rounded-2xl pulse-once"></div>
            </div>

            <!-- Content -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Email
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Drop me an email and I'll get back to you within 24 hours
              </p>
              <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                <span>Send Email</span>
                <Icon name="mdi:arrow-right" class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </a>

        <!-- LinkedIn Card -->
        <a
          href="https://linkedin.com/in/parth-dedaniya"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card-modern group"
          v-motion-slide-visible-bottom
          :delay="700"
        >
          <div class="relative h-full">
            <!-- Icon Container -->
            <div class="mb-6 relative">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-blue-700/50">
                <Icon name="mdi:linkedin" class="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <!-- Subtle pulse effect on hover -->
              <div class="absolute inset-0 w-20 h-20 bg-blue-700/30 rounded-2xl pulse-once"></div>
            </div>

            <!-- Content -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                LinkedIn
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Let's connect professionally and grow our network together
              </p>
              <div class="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-medium">
                <span>Connect</span>
                <Icon name="mdi:arrow-right" class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </a>

        <!-- GitHub Card -->
        <a
          href="https://github.com/parthdedaniya"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card-modern group"
          v-motion-slide-visible-bottom
          :delay="800"
        >
          <div class="relative h-full">
            <!-- Icon Container -->
            <div class="mb-6 relative">
              <div class="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-gray-700/50">
                <Icon name="mdi:github" class="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <!-- Subtle pulse effect on hover -->
              <div class="absolute inset-0 w-20 h-20 bg-gray-700/30 rounded-2xl pulse-once"></div>
            </div>

            <!-- Content -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                GitHub
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Check out my code, contribute, or collaborate on projects
              </p>
              <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
                <span>View Profile</span>
                <Icon name="mdi:arrow-right" class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No form logic needed
</script>

<style scoped>
.contact-card-modern {
  @apply relative p-8 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-3;
  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
  border: 1px solid rgba(229, 231, 235, 0.8);
}

.dark .contact-card-modern {
  background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
  border: 1px solid rgba(55, 65, 81, 0.3);
}

.contact-card-modern::after {
  display: none !important;
}

.contact-card-modern:hover {
  @apply shadow-2xl;
  background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(249, 250, 251, 1) 100%);
  border-color: rgba(34, 197, 94, 0.3);
  transform: translateY(-12px) scale(1.02);
}

.dark .contact-card-modern:hover {
  background: linear-gradient(135deg, rgba(26, 26, 26, 1) 0%, rgba(0, 0, 0, 1) 100%);
  border-color: rgba(34, 197, 94, 0.5);
}

/* Pulse effect that runs only once on hover */
.pulse-once {
  opacity: 0;
  animation: none;
}

.group:hover .pulse-once {
  animation: pulse-bloom 0.6s ease-out;
}

@keyframes pulse-bloom {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>
