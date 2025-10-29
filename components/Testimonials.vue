<template>
  <section id="testimonials" class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-6xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          v-motion-slide-visible-bottom
          :delay="200"
        >
          What Clients Say
        </h2>
        <p 
          class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          v-motion-fade-visible
          :delay="400"
        >
          Trusted by clients worldwide to deliver exceptional results
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 relative hover:shadow-xl transition-all duration-300 hover:scale-105"
          v-motion-slide-visible-bottom
          :delay="600 + index * 150"
        >
          <!-- Quote Icon -->
          <div class="absolute top-6 right-6 opacity-10">
            <Icon name="mdi:format-quote-close" class="w-16 h-16 text-primary-500" />
          </div>

          <!-- Rating Stars -->
          <div class="flex gap-1 mb-4">
            <Icon 
              v-for="i in 5" 
              :key="i" 
              name="mdi:star" 
              class="w-5 h-5 text-yellow-400"
            />
          </div>

          <!-- Quote -->
          <p class="text-gray-700 dark:text-gray-300 mb-6 relative z-10 italic leading-relaxed">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author Info -->
          <div class="flex items-center gap-4">
            <!-- Avatar -->
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
              {{ testimonial.initials }}
            </div>
            
            <!-- Name & Role -->
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                {{ testimonial.name }}
              </h4>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ testimonial.role }}, {{ testimonial.company }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Stats/Trust Indicators -->
      <div 
        class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        v-motion-fade-visible
        :delay="1200"
      >
        <div class="p-6">
          <div class="text-4xl font-bold text-primary-500 mb-2">50+</div>
          <div class="text-gray-600 dark:text-gray-400">Projects Completed</div>
        </div>
        <div class="p-6">
          <div class="text-4xl font-bold text-primary-500 mb-2">30+</div>
          <div class="text-gray-600 dark:text-gray-400">Happy Clients</div>
        </div>
        <div class="p-6">
          <div class="text-4xl font-bold text-primary-500 mb-2">5+</div>
          <div class="text-gray-600 dark:text-gray-400">Years Experience</div>
        </div>
        <div class="p-6">
          <div class="text-4xl font-bold text-primary-500 mb-2">100%</div>
          <div class="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    quote: "Parth delivered the project ahead of schedule. Clean code, scalable architecture, and excellent communication throughout. Highly recommended!",
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechStart Inc",
    initials: "SJ"
  },
  {
    id: 2,
    quote: "Working with Parth was a game-changer for our product. His expertise in Vue.js and NestJS helped us build a robust platform that scales beautifully.",
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateCo",
    initials: "MC"
  },
  {
    id: 3,
    quote: "Exceptional developer with deep knowledge of modern web technologies. Parth transformed our outdated system into a sleek, performant application.",
    name: "Emily Rodriguez",
    role: "Founder",
    company: "StartupHub",
    initials: "ER"
  },
  {
    id: 4,
    quote: "Parth's attention to detail and problem-solving skills are outstanding. He delivered a complex real-time chat system that exceeded our expectations.",
    name: "David Kim",
    role: "Engineering Lead",
    company: "ChatFlow",
    initials: "DK"
  },
  {
    id: 5,
    quote: "Professional, reliable, and incredibly skilled. Parth built our e-commerce platform with seamless payment integration and beautiful UI/UX.",
    name: "Lisa Anderson",
    role: "CEO",
    company: "ShopSmart",
    initials: "LA"
  },
  {
    id: 6,
    quote: "I've worked with many developers, but Parth stands out with his technical expertise and ability to deliver high-quality work on tight deadlines.",
    name: "James Wilson",
    role: "Tech Director",
    company: "DigitalWorks",
    initials: "JW"
  }
]
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>
