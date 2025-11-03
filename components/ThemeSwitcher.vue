<template>
  <!-- Toggle Switch with Custom CSS -->
  <label class="relative inline-block w-16 h-8 cursor-pointer">
    <input 
      type="checkbox" 
      :checked="theme === 'dark'"
      @change="handleToggle"
      class="sr-only"
    />
    
    <!-- Track -->
    <span 
      class="absolute inset-0 rounded-full transition-all duration-400"
      :style="{
        background: theme === 'dark' 
          ? 'linear-gradient(180deg, #312e81 0%, #1e1b4b 100%)'
          : 'linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)',
        boxShadow: theme === 'dark'
          ? 'inset 0 2px 6px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(99, 102, 241, 0.2)'
          : 'inset 0 2px 6px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(255, 255, 255, 0.8)'
      }"
    >
      <!-- Slider Button -->
      <span 
        class="absolute top-0.5 w-7 h-7 rounded-full transition-all duration-400 flex items-center justify-center"
        :style="{
          left: theme === 'dark' ? 'calc(100% - 30px)' : '2px',
          background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
          boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1), inset 0 -1px 2px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.9)'
        }"
      >
        <!-- Icon Transition -->
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="scale-0 rotate-90 opacity-0"
          enter-to-class="scale-100 rotate-0 opacity-100"
          leave-active-class="transition-all duration-200"
          leave-from-class="scale-100"
          leave-to-class="scale-0 -rotate-90 opacity-0"
          mode="out-in"
        >
          <Icon
            v-if="theme === 'light'"
            key="sun"
            name="mdi:white-balance-sunny"
            class="w-4 h-4 text-yellow-500"
          />
          <Icon
            v-else
            key="moon"
            name="mdi:moon-waning-crescent"
            class="w-4 h-4 text-indigo-300"
          />
        </Transition>
      </span>
    </span>
  </label>

  <!-- Full Screen Transition Overlay -->
  <Teleport to="body">
    <div
      v-if="isTransitioning"
      class="fixed inset-0 pointer-events-none"
      style="z-index: 45;"
    >
      <!-- OUTGOING Celestial Body (fades out while moving) -->
      <div class="celestial-container exit">
        <!-- Sun exiting (Light → Dark) -->
        <div v-if="animatingTheme === 'light'" class="celestial-body sun-body">
          <div class="sun-core"></div>
          <div class="sun-corona"></div>
          <div class="rays-wrapper">
            <div v-for="i in 16" :key="`exit-${i}`" class="sun-ray" :style="{ '--ray-index': i }"></div>
          </div>
        </div>

        <!-- Moon exiting (Dark → Light) -->
        <div v-else class="celestial-body moon-body">
          <div class="moon-surface">
            <div class="crater crater-1"></div>
            <div class="crater crater-2"></div>
            <div class="crater crater-3"></div>
            <div class="crater crater-4"></div>
            <div class="crater crater-5"></div>
          </div>
          <div class="moon-glow"></div>
          <div class="rays-wrapper moon-rays">
            <div v-for="i in 8" :key="`exit-${i}`" class="moon-ray" :style="{ '--ray-index': i }"></div>
          </div>
        </div>
      </div>

      <!-- INCOMING Celestial Body (fades in while moving) -->
      <div class="celestial-container enter">
        <!-- Moon entering (Light → Dark) -->
        <div v-if="animatingTheme === 'light'" class="celestial-body moon-body">
          <div class="moon-surface">
            <div class="crater crater-1"></div>
            <div class="crater crater-2"></div>
            <div class="crater crater-3"></div>
            <div class="crater crater-4"></div>
            <div class="crater crater-5"></div>
          </div>
          <div class="moon-glow"></div>
          <div class="rays-wrapper moon-rays">
            <div v-for="i in 8" :key="`enter-${i}`" class="moon-ray" :style="{ '--ray-index': i }"></div>
          </div>
        </div>

        <!-- Sun entering (Dark → Light) -->
        <div v-else class="celestial-body sun-body">
          <div class="sun-core"></div>
          <div class="sun-corona"></div>
          <div class="rays-wrapper">
            <div v-for="i in 16" :key="`enter-${i}`" class="sun-ray" :style="{ '--ray-index': i }"></div>
          </div>
        </div>
      </div>

      <!-- Ambient light particles -->
      <div class="particles-container">
        <div v-for="i in 20" :key="i" class="light-particle" :style="{ '--particle-index': i }"></div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'

const { theme, isTransitioning, toggleTheme } = useTheme()
const showRipple = ref(false)
const animatingTheme = ref(theme.value) // Track which celestial body to show during animation

// Generate random stars for night sky
const stars = computed(() => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 40 + 10, // Top half of screen
    size: Math.random() * 2 + 1,
    delay: Math.random() * 0.3
  }))
})

// Generate clouds
const clouds = computed(() => {
  return Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: Math.random() * 80,
    y: Math.random() * 30 + 10,
    size: Math.random() * 80 + 60,
    delay: Math.random() * 0.2
  }))
})

const handleToggle = () => {
  showRipple.value = true
  // Capture current theme for animation
  animatingTheme.value = theme.value
  toggleTheme()
  
  setTimeout(() => {
    showRipple.value = false
  }, 1000)
}
</script>

<style scoped>
/* ===================================
   TOGGLE SWITCH - Inline Styles
   =================================== */

/* Hide checkbox */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border-width: 0;
}

/* ===================================
   OLD STYLES TO REMOVE
   =================================== */

/* Hide default checkbox */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Switch Container */
.toggle-switch-container {
  position: relative;
  display: inline-block;
}

/* Switch Track (the background rail) */
.toggle-switch-track {
  position: relative;
  width: 64px;
  height: 32px;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.track-off {
  background: linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%);
  box-shadow: 
    inset 0 3px 8px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(255, 255, 255, 0.8);
}

.track-on {
  background: linear-gradient(180deg, #312e81 0%, #1e1b4b 100%);
  box-shadow: 
    inset 0 3px 8px rgba(0, 0, 0, 0.4),
    0 1px 2px rgba(99, 102, 241, 0.2);
}

/* Inner track glow */
.track-inner-glow {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  transition: all 0.4s ease;
  pointer-events: none;
}

.glow-off {
  background: linear-gradient(90deg, rgba(251, 191, 36, 0.15), transparent 60%);
}

.glow-on {
  background: linear-gradient(-90deg, rgba(139, 92, 246, 0.25), transparent 60%);
}

/* Toggle Slider (the circular moving part) */
.toggle-slider {
  position: absolute;
  top: 2px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(145deg, #ffffff, #f1f5f9);
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
  box-shadow: 
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 1px 2px rgba(0, 0, 0, 0.08),
    inset 0 -1px 2px rgba(0, 0, 0, 0.05),
    inset 0 1px 2px rgba(255, 255, 255, 0.8);
}

.slider-off {
  left: 2px;
  transform: translateX(0);
}

.slider-on {
  left: 2px;
  transform: translateX(32px);
}

/* Icon wrapper inside slider */
.slider-icon-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

/* Sun Icon */
.sun-icon-style {
  width: 18px;
  height: 18px;
}

.sun-center {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fef08a, #fbbf24);
  box-shadow: 
    0 0 8px rgba(251, 191, 36, 0.6),
    inset 0 -1px 2px rgba(245, 158, 11, 0.3);
  animation: sun-pulse 2s ease-in-out infinite;
}

.sun-rays-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: sun-spin 10s linear infinite;
}

.sun-ray-line {
  position: absolute;
  width: 1.5px;
  height: 5px;
  background: linear-gradient(to bottom, #f59e0b, transparent);
  border-radius: 1px;
  left: 50%;
  top: 1px;
  margin-left: -0.75px;
  transform-origin: 50% 8px;
}

@keyframes sun-pulse {
  0%, 100% { 
    transform: scale(1);
  }
  50% { 
    transform: scale(1.1);
  }

}

@keyframes sun-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Moon Icon */
.moon-icon-style {
  width: 16px;
  height: 16px;
}

.moon-shape {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #e5e7eb, #cbd5e1);
  box-shadow: 
    0 0 6px rgba(203, 213, 225, 0.5),
    inset -2px -2px 4px rgba(0, 0, 0, 0.15),
    inset 1px 1px 3px rgba(255, 255, 255, 0.2);
  animation: moon-spin 15s linear infinite;
  overflow: hidden;
}

.moon-spot {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.2), transparent 70%);
  box-shadow: inset 0.5px 0.5px 1px rgba(0, 0, 0, 0.25);
}

.spot-1 {
  width: 4px;
  height: 4px;
  top: 3px;
  left: 6px;
}

.spot-2 {
  width: 2.5px;
  height: 2.5px;
  top: 9px;
  left: 10px;
}

.spot-3 {
  width: 3px;
  height: 3px;
  top: 7px;
  left: 3px;
}

@keyframes moon-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Hover ring effect */
.switch-hover-ring {
  position: absolute;
  inset: -4px;
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: -1;
  filter: blur(6px);
}

.group:hover .switch-hover-ring {
  opacity: 1;
}

.ring-yellow {
  background: radial-gradient(ellipse, rgba(251, 191, 36, 0.3), transparent 70%);
}

.ring-purple {
  background: radial-gradient(ellipse, rgba(139, 92, 246, 0.3), transparent 70%);
}

/* ===================================
   CELESTIAL BODY CONTAINER - Two-Body Crossfade
   =================================== */
.celestial-container {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(-50%);
  will-change: transform, opacity;
}

/* EXITING body - fast diagonal motion, fades out quickly */
.celestial-container.exit {
  animation: diagonal-exit 0.7s ease-out forwards;
}

@keyframes diagonal-exit {
  0% {
    transform: translate3d(-10vw, 10vh, 0) scale3d(0.8, 0.8, 1);
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  35% {
    transform: translate3d(35vw, -10vh, 0) scale3d(1.05, 1.05, 1);
    opacity: 1;
  }
  50% {
    transform: translate3d(50vw, -20vh, 0) scale3d(1.05, 1.05, 1);
    opacity: 0;
  }
  100% {
    transform: translate3d(110vw, -60vh, 0) scale3d(0.7, 0.7, 1);
    opacity: 0;
  }
}

/* ENTERING body - fast diagonal motion, fades in quickly */
.celestial-container.enter {
  animation: diagonal-enter 0.7s ease-out forwards;
}

@keyframes diagonal-enter {
  0% {
    transform: translate3d(-10vw, 10vh, 0) scale3d(0.8, 0.8, 1);
    opacity: 0;
  }
  35% {
    transform: translate3d(35vw, -10vh, 0) scale3d(1.05, 1.05, 1);
    opacity: 0;
  }
  50% {
    transform: translate3d(50vw, -20vh, 0) scale3d(1.05, 1.05, 1);
    opacity: 1;
  }
  92% {
    opacity: 1;
  }
  100% {
    transform: translate3d(110vw, -60vh, 0) scale3d(0.7, 0.7, 1);
    opacity: 0;
  }
}

/* ===================================
   SUN STYLING
   =================================== */
.celestial-body {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
}

.sun-body {
  filter: drop-shadow(0 0 40px rgba(251, 191, 36, 0.8));
}

.sun-core {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, 
    #fef3c7 0%, 
    #fde047 30%, 
    #facc15 60%, 
    #f59e0b 100%
  );
  box-shadow: 
    0 0 30px rgba(251, 191, 36, 0.9),
    0 0 60px rgba(251, 191, 36, 0.6),
    inset 0 -10px 30px rgba(245, 158, 11, 0.5);
  animation: sun-pulse 1.3s ease-in-out;
}

@keyframes sun-pulse {
  0%, 100% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.05);
    filter: brightness(1.3);
  }
}

/* Animated corona effect */
.sun-corona {
  position: absolute;
  top: -10px;
  left: -10px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, 
    rgba(254, 243, 199, 0.4) 0%, 
    rgba(252, 211, 77, 0.2) 50%, 
    transparent 70%
  );
  animation: corona-pulse 1.3s ease-in-out infinite;
}

@keyframes corona-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.3;
  }
}

/* Sun rays */
.rays-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
}

.sun-ray {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 60px;
  margin-left: -2px;
  margin-top: -80px;
  background: linear-gradient(to bottom, 
    rgba(254, 243, 199, 0.9), 
    rgba(252, 211, 77, 0.4),
    transparent
  );
  border-radius: 2px;
  transform-origin: 50% 80px;
  transform: rotate(calc(var(--ray-index) * 22.5deg));
  animation: ray-shimmer 1.3s ease-in-out;
}

@keyframes ray-shimmer {
  0%, 100% {
    opacity: 0;
    transform: rotate(calc(var(--ray-index) * 22.5deg)) scaleY(0.4);
  }
  50% {
    opacity: 1;
    transform: rotate(calc(var(--ray-index) * 22.5deg)) scaleY(1);
  }
}

/* ===================================
   MOON STYLING
   =================================== */
.moon-body {
  filter: drop-shadow(0 0 30px rgba(156, 163, 175, 0.6));
}

.moon-surface {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, 
    #e5e7eb 0%, 
    #d1d5db 30%, 
    #9ca3af 70%, 
    #6b7280 100%
  );
  box-shadow: 
    inset -12px -12px 25px rgba(0, 0, 0, 0.35),
    inset 5px 5px 15px rgba(255, 255, 255, 0.15),
    0 0 40px rgba(156, 163, 175, 0.5);
  overflow: hidden;
  animation: moon-glow-pulse 1.3s ease-in-out;
}

@keyframes moon-glow-pulse {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
}

/* Moon craters */
.crater {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, 
    rgba(0, 0, 0, 0.25) 0%, 
    rgba(0, 0, 0, 0.15) 50%, 
    transparent 100%
  );
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.crater-1 { width: 18px; height: 18px; top: 20%; left: 30%; }
.crater-2 { width: 24px; height: 24px; top: 45%; left: 55%; }
.crater-3 { width: 12px; height: 12px; top: 65%; left: 35%; }
.crater-4 { width: 16px; height: 16px; top: 30%; left: 65%; }
.crater-5 { width: 10px; height: 10px; top: 55%; left: 20%; }

/* Soft moonlight glow */
.moon-glow {
  position: absolute;
  top: -15px;
  left: -15px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: radial-gradient(circle, 
    rgba(229, 231, 235, 0.3) 0%, 
    rgba(209, 213, 219, 0.15) 50%, 
    transparent 70%
  );
  animation: moon-glow-expand 1.3s ease-in-out;
}

@keyframes moon-glow-expand {
  0%, 100% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.25;
  }
}

/* Subtle moon rays */
.moon-rays {
  opacity: 0.4;
}

.moon-ray {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 50px;
  margin-left: -1px;
  margin-top: -75px;
  background: linear-gradient(to bottom, 
    rgba(229, 231, 235, 0.6), 
    rgba(209, 213, 219, 0.3),
    transparent
  );
  border-radius: 1px;
  transform-origin: 50% 75px;
  transform: rotate(calc(var(--ray-index) * 45deg));
  animation: moon-ray-fade 1.3s ease-in-out;
}

@keyframes moon-ray-fade {
  0%, 100% {
    opacity: 0;
    transform: rotate(calc(var(--ray-index) * 45deg)) scaleY(0.5);
  }
  50% {
    opacity: 0.6;
    transform: rotate(calc(var(--ray-index) * 45deg)) scaleY(1);
  }
}

/* ===================================
   AMBIENT PARTICLES
   =================================== */
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.light-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: radial-gradient(circle, 
    rgba(251, 191, 36, 0.8), 
    rgba(251, 191, 36, 0) 70%
  );
  border-radius: 50%;
  left: calc(var(--particle-index) * 5%);
  top: calc(var(--particle-index) * 5%);
  animation: particle-float 1.3s ease-in-out forwards;
  animation-delay: calc(var(--particle-index) * 0.05s);
}

@keyframes particle-float {
  0% {
    transform: translateY(0) translateX(0) scale(0);
    opacity: 0;
  }
  25% {
    opacity: 0.8;
    transform: translateY(-30px) translateX(calc(var(--particle-index) * 8px - 80px)) scale(1);
  }
  75% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-100px) translateX(calc(var(--particle-index) * 12px - 120px)) scale(0);
    opacity: 0;
  }
}
</style>





