<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 w-full">
    <!-- Animated Matrix Background -->
    <div class="absolute inset-0 -z-10">
      <!-- Animated Grid -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
        <div class="absolute inset-0" style="background-image: linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>
      
      <!-- Floating Code Particles -->
      <div class="absolute inset-0 overflow-hidden">
        <div v-for="i in 15" :key="i" class="code-particle" :style="getParticleStyle(i)">
          {{ getCodeSymbol(i) }}
        </div>
      </div>

      <!-- Gradient Orbs -->
      <div class="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float-smooth"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-float-smooth" style="animation-delay: 2s;"></div>
    </div>

    <!-- Split Layout Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
        
        <!-- Left Side: Content -->
        <div class="text-left space-y-6 py-8">
          <!-- Main Heading -->
          <div class="space-y-4">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold hero-title leading-tight">
              <span class="text-gray-800 dark:text-white block mb-3">Hi, I'm</span>
              <span class="block">
                <span class="text-gradient-animated bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">Parth Dedaniya</span> <span class="text-4xl md:text-6xl -ml-5 inline-block animate-wave">👋</span>
              </span>
            </h1>
          </div>
          
          <!-- Dynamic Role Text with Typewriter -->
          <div class="text-2xl md:text-3xl lg:text-4xl font-bold h-14 md:h-16 flex items-center mt-6">
            <span class="text-gray-700 dark:text-gray-300 mr-3">I</span>
            <span class="relative inline-flex items-center">
              <span class="text-primary-600 dark:text-primary-400 typing-text">{{ currentRole }}</span>
              <span class="typing-cursor-modern"></span>
            </span>
          </div>

          <!-- Animated Description -->
          <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed fade-in-up max-w-xl mt-6">
            <span class="highlight-text">{{ currentYears }}+ years</span> of experience crafting modern web applications from elegant interfaces to robust backend systems
          </p>

          <!-- Tech Stack Badges -->
          <div class="flex flex-wrap gap-3 mt-8">
            <div 
              v-for="(tech, index) in techStack" 
              :key="tech.name"
              class="tech-badge group cursor-pointer"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <div class="relative flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110 hover:border-primary-400 dark:hover:border-primary-600">
                <Icon :name="tech.icon" class="w-5 h-5 transition-all duration-300 group-hover:scale-125" />
                <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">{{ tech.name }}</span>
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="#projects" 
              class="group relative px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary-500/30 flex items-center justify-center gap-2 overflow-hidden no-underline"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <span class="relative z-10 flex items-center gap-2">
                View My Work
                <Icon name="mdi:arrow-right" class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
            
            <a 
              href="#contact" 
              class="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-900 dark:border-gray-100 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 no-underline"
            >
              Let's Connect
              <Icon name="mdi:arrow-right" class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <!-- Right Side: Animated Code Editor (Always Dark) -->
        <div class="hidden lg:block relative py-8">
          <div class="code-editor-container">
            <!-- Editor Window with Green Neon Glow - Shiki handles background -->
            <div class="rounded-2xl shadow-2xl overflow-hidden border-2 border-primary-500 editor-glow editor-wrapper">
              <!-- Editor Header -->
              <div class="flex items-center justify-between px-5 py-3.5 border-b bg-[#0f111a] border-primary-500/30">
                <div class="flex gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors"></div>
                </div>
                <span class="text-xs font-mono text-gray-400">portfolio.vue</span>
                <div class="w-12"></div>
              </div>
              
              <!-- Code Content -->
              <div class="shiki-container overflow-hidden h-[400px]" v-html="highlightedCode"></div>
            </div>
            
            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 dark:bg-primary-500/10 rounded-lg rotate-12 animate-float-smooth"></div>
            <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-400/20 dark:bg-primary-400/10 rounded-full animate-pulse-slow"></div>
          </div>
        </div>

      </div>
      
      <!-- Scroll Indicator -->
      <div 
        class="mt-16 flex flex-col items-center scroll-indicator cursor-pointer"
        @click="scrollToNext"
      >
        <span class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3 animate-pulse">Scroll to explore</span>
        <div class="w-8 h-12 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-2 hover:border-primary-500 transition-all duration-300 hover:scale-110">
          <div class="w-1.5 h-4 bg-primary-500 rounded-full animate-scroll-indicator"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted, watch, computed } from 'vue'

const isDark = ref(false)

// Add magnetic effect to buttons
useMagneticEffect()

// Shiki syntax highlighter
const { highlightCode } = useShiki()
const highlightedCode = ref('')

// Get theme from composable
const { theme } = useTheme()

// Original code
const codeString = `const developer = {
  name: "Parth Dedaniya",
  role: "Full Stack Developer",
  experience: 3,
  skills: {
    frontend: ["Vue.js", "Nuxt.js", "TypeScript"],
    backend: ["Node.js", "NestJS", "Express"],
    database: ["DynamoDB", "MongoDB", "PostgreSQL"],
    cloud: ["AWS Lambda", "S3", "CloudFront"],
    tools: ["Docker", "Git", "Vite", "WebAssembly"]
  },
  buildAmazingApps() {
    return "scalable & elegant";
  }
};
// Ready to build amazing things! 🚀`

// Dynamic roles that rotate
const roles = [
  'build scalable apps',
  'craft elegant UIs',
  'design APIs',
  'optimize performance',
  'ship products'
]
const currentRole = ref('')
const currentRoleIndex = ref(0)
const isDeleting = ref(false)
const typingSpeed = ref(100)

// Dynamic years counter
const currentYears = ref(3)

// Code symbols for particles
const codeSymbols = ['{', '}', '<', '>', '/', '(', ')', '[', ']', ';', '=', '+', '-', '*', '→', '←', '↑', '↓', '∞', 'λ', 'π']

const getCodeSymbol = (index) => {
  return codeSymbols[index % codeSymbols.length]
}

const getParticleStyle = (index) => {
  const randomX = Math.random() * 100
  const randomDelay = Math.random() * 5
  const randomDuration = 15 + Math.random() * 10
  
  return {
    left: `${randomX}%`,
    animationDelay: `${randomDelay}s`,
    animationDuration: `${randomDuration}s`
  }
}

const techStack = [
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon' },
  { name: 'NestJS', icon: 'logos:nestjs' },
  { name: 'AWS', icon: 'logos:aws' }
]

const scrollToNext = () => {
  const techSection = document.querySelector('#tech')
  if (techSection) {
    techSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Role typing animation
const typeRole = () => {
  const currentText = roles[currentRoleIndex.value]
  
  if (isDeleting.value) {
    currentRole.value = currentText.substring(0, currentRole.value.length - 1)
    typingSpeed.value = 50
    
    if (currentRole.value === '') {
      isDeleting.value = false
      currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
      setTimeout(() => typeRole(), 500)
      return
    }
  } else {
    currentRole.value = currentText.substring(0, currentRole.value.length + 1)
    typingSpeed.value = 100
    
    if (currentRole.value === currentText) {
      setTimeout(() => {
        isDeleting.value = true
        typeRole()
      }, 2000)
      return
    }
  }
  
  setTimeout(() => typeRole(), typingSpeed.value)
}

// Function to update code highlighting based on theme
const updateCodeHighlighting = async () => {
  try {
    const isDarkMode = theme.value === 'dark'
    highlightedCode.value = await highlightCode(codeString, isDarkMode)
  } catch (error) {
    console.error('Failed to highlight code:', error)
  }
}

// Watch theme changes and update highlighting
watch(theme, () => {
  updateCodeHighlighting()
})

// Initialize animations and code highlighting
onMounted(async () => {
  // Check dark mode
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
  isDark.value = darkModeQuery.matches || document.documentElement.classList.contains('dark')
  
  // Initialize Shiki and highlight code
  await updateCodeHighlighting()
  
  // Start role animation
  setTimeout(() => typeRole(), 500)
  
  // Smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        const { $lenis } = useNuxtApp()
        if ($lenis) {
          $lenis.scrollTo(target, { offset: -80 })
        } else {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    })
  })

})

// GSAP animations for hero elements
onMounted(() => {
  nextTick(() => {
    const { $gsap } = useNuxtApp()
    if ($gsap && typeof window !== 'undefined') {
      // Set initial state to visible first
      const heroTitle = document.querySelector('.hero-title')
      const heroSubtitle = document.querySelector('.hero-subtitle')
      if (heroTitle) heroTitle.style.opacity = '1'
      if (heroSubtitle) heroSubtitle.style.opacity = '1'
      
      // Then animate with GSAP
      $gsap.fromTo('.hero-title', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', immediateRender: false }
      )
      
      // Animate subtitle
      $gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out', immediateRender: false }
      )
      
      // Stagger tech badges
      $gsap.fromTo('.tech-badge',
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.6, ease: 'back.out(1.7)' }
      )
    }
  })
})
</script>

<style scoped>
/* Code Particles Animation */
.code-particle {
  position: absolute;
  font-family: 'Fira Code', monospace;
  font-size: 1.5rem;
  color: rgba(34, 197, 94, 0.15);
  pointer-events: none;
  animation: float-particle linear infinite;
  top: -50px;
}

.dark .code-particle {
  color: rgba(34, 197, 94, 0.25);
}

@keyframes float-particle {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

/* Cursor Blink */
.cursor-blink {
  animation: blink 1s step-end infinite;
}

/* Modern typing cursor with smooth fade */
.typing-cursor-modern {
  display: inline-block;
  width: 3px;
  height: 1em;
  background: linear-gradient(180deg, #22c55e 0%, #16a34a 100%);
  margin-left: 4px;
  border-radius: 1px;
  animation: cursorFade 1.2s ease-in-out infinite;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
}

@keyframes cursorFade {
  0%, 100% { 
    opacity: 1;
    transform: scaleY(1);
  }
  50% { 
    opacity: 0.3;
    transform: scaleY(0.95);
  }
}

/* Wave Animation */
.animate-wave {
  animation: wave 2s ease-in-out infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  40%, 100% { transform: rotate(0deg); }
}

/* Glitch Effect */
.glitch-text {
  position: relative;
  animation: glitch 3s infinite;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -2px 0 #22c55e;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch-text::after {
  left: -2px;
  text-shadow: -2px 0 #16a34a;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(31px, 9999px, 94px, 0); }
  20% { clip: rect(85px, 9999px, 72px, 0); }
  40% { clip: rect(44px, 9999px, 28px, 0); }
  60% { clip: rect(91px, 9999px, 64px, 0); }
  80% { clip: rect(56px, 9999px, 13px, 0); }
  100% { clip: rect(76px, 9999px, 34px, 0); }
}

@keyframes glitch-anim2 {
  0% { clip: rect(65px, 9999px, 43px, 0); }
  20% { clip: rect(17px, 9999px, 86px, 0); }
  40% { clip: rect(98px, 9999px, 51px, 0); }
  60% { clip: rect(27px, 9999px, 79px, 0); }
  80% { clip: rect(83px, 9999px, 92px, 0); }
  100% { clip: rect(46px, 9999px, 25px, 0); }
}

/* Highlight Text Effect */
.highlight-text {
  font-weight: 600;
  color: #22c55e;
  padding: 0 4px;
}

.dark .highlight-text {
  color: #4ade80;
}

/* Fade In Up */
.fade-in-up {
  animation: fadeInUp 1s ease-out 0.5s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Typewriter styles */
.typewriter {
  overflow: hidden;
  white-space: nowrap;
}

.typing-text {
  display: inline-block;
  min-width: 20px;
}

/* Code Editor Animations */
.code-editor-container {
  animation: slideInRight 1s ease-out;
}

.code-line {
  opacity: 0;
  animation: fadeInCode 0.5s ease-out forwards;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInCode {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scroll Indicator */
@keyframes scroll-indicator {
  0% {
    opacity: 0;
    transform: translateY(-8px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(8px);
  }
}

.animate-scroll-indicator {
  animation: scroll-indicator 2s ease-in-out infinite;
}

/* Pulse Slow */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* Line Numbers */
.code-line-number {
  color: #858585;
}

.dark .code-line-number {
  color: #858585;
}

/* Syntax Highlighting - Bright colors visible on dark background */
.code-keyword {
  color: #c586c0; /* Purple - keywords like const, return */
  font-weight: 600;
}

.code-variable {
  color: #9cdcfe; /* Light blue - variable names */
  font-weight: 600;
}

.code-property {
  color: #9cdcfe; /* Light blue - object properties */
}

.code-string {
  color: #ce9178; /* Orange/tan - strings */
}

.code-number {
  color: #b5cea8; /* Light green - numbers */
  font-weight: 600;
}

.code-function {
  color: #dcdcaa; /* Yellow - function names */
  font-weight: 600;
}

.code-comment {
  color: #6a9955; /* Green - comments */
  font-style: italic;
}

/* Dark mode - same colors work well */
.dark .code-keyword {
  color: #c586c0;
}

.dark .code-variable {
  color: #9cdcfe;
}

.dark .code-property {
  color: #9cdcfe;
}

.dark .code-string {
  color: #ce9178;
}

.dark .code-number {
  color: #b5cea8;
}

.dark .code-function {
  color: #dcdcaa;
}

.dark .code-comment {
  color: #6a9955;
}

/* Green Neon Editor Glow Effect - Subtle for both modes */
.editor-glow {
  box-shadow: 
    0 0 15px rgba(34, 197, 94, 0.25),
    0 0 30px rgba(34, 197, 94, 0.15),
    0 0 45px rgba(34, 197, 94, 0.1);
  animation: green-neon-pulse 2s ease-in-out infinite;
}

@keyframes green-neon-pulse {
  0%, 100% {
    box-shadow: 
      0 0 15px rgba(34, 197, 94, 0.25),
      0 0 30px rgba(34, 197, 94, 0.15),
      0 0 45px rgba(34, 197, 94, 0.1);
  }
  50% {
    box-shadow: 
      0 0 20px rgba(34, 197, 94, 0.3),
      0 0 40px rgba(34, 197, 94, 0.2),
      0 0 60px rgba(34, 197, 94, 0.15);
  }
}

/* Editor Wrapper - Let Shiki control background */
.editor-wrapper {
  background: #0f111a; /* Material Theme Ocean background - deep ocean blue */
}

/* Shiki Container Styling */
.shiki-container {
  padding: 0;
}

.shiki-container :deep(pre) {
  margin: 0;
  padding: 2rem !important;
  overflow: visible;
  /* Let Shiki's theme background show through - don't override */
}

.shiki-container :deep(code) {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  display: block;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.1);
}

.shiki-container :deep(.line-number) {
  color: #546e7a; /* Muted blue-gray that suits Material Ocean theme */
  user-select: none;
  margin-right: 1.5rem;
  display: inline-block;
  width: 1.5rem;
  text-align: right;
  font-weight: 400;
  opacity: 0.6;
}
</style>

