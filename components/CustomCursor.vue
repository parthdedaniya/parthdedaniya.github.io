<template>
  <ClientOnly>
    <div v-if="!isMobile" class="cursor-wrapper">
      <!-- Custom Arrow Cursor -->
      <svg
        class="cursor-arrow"
        :class="{ 
          'arrow-hover': cursorState === 'hover', 
          'arrow-click': cursorState === 'click'
        }"
        :style="{ 
          left: cursorPos.x + 'px', 
          top: cursorPos.y + 'px',
        }"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path 
          d="M5 3L19 12L12 13L9 20L5 3Z" 
          :fill="isDark ? '#ffffff' : '#000000'"
          :stroke="isDark ? '#000000' : '#ffffff'"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursorPos = ref({ x: -100, y: -100 })
const cursorState = ref('default') // default, hover, click
const isMobile = ref(false)
const isDark = ref(false)

// Handle mouse move
const handleMouseMove = (e) => {
  cursorPos.value = { x: e.clientX, y: e.clientY }
}

// Update theme detection
const updateTheme = () => {
  isDark.value = document.documentElement.classList.contains('dark')
}

// Handle hover states - more precise detection
const handleMouseOver = (e) => {
  const target = e.target
  
  // Check if element is truly interactive
  const isLink = target.tagName === 'A' && target.hasAttribute('href')
  const isButton = target.tagName === 'BUTTON' && !target.disabled
  const isInput = (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') && !target.disabled
  const hasClickHandler = target.onclick || target.getAttribute('v-on:click') || target.getAttribute('@click')
  const hasPointerCursor = window.getComputedStyle(target).cursor === 'pointer'
  const isInLink = target.closest('a[href]')
  const isInButton = target.closest('button:not([disabled])')
  
  // Only show hover state for truly clickable elements
  if (isLink || isButton || isInput || hasClickHandler || hasPointerCursor || isInLink || isInButton) {
    cursorState.value = 'hover'
    
    // Set appropriate text
    if (isLink || isInLink) {
      hoverText.value = 'VIEW'
    } else if (isInput) {
      hoverText.value = 'TYPE'
    } else {
      hoverText.value = 'CLICK'
    }
  } else {
    cursorState.value = 'default'
  }
}

const handleMouseOut = () => {
  cursorState.value = 'default'
}

// Handle click
const handleMouseDown = () => {
  cursorState.value = 'click'
}

const handleMouseUp = () => {
  if (cursorState.value === 'click') {
    cursorState.value = 'default'
  }
}

// Detect mobile
const checkMobile = () => {
  isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  updateTheme()
  
  if (!isMobile.value) {
    document.body.style.cursor = 'none'
    document.documentElement.style.cursor = 'none'
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver, true)
    document.addEventListener('mouseout', handleMouseOut, true)

    // Watch for theme changes
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    const style = document.createElement('style')
    style.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)
  }
})

onUnmounted(() => {
  if (!isMobile.value) {
    document.body.style.cursor = ''
    document.documentElement.style.cursor = ''
    
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mousedown', handleMouseDown)
    window.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('mouseover', handleMouseOver, true)
    document.removeEventListener('mouseout', handleMouseOut, true)
  }
})
</script>

<style scoped>
.cursor-wrapper {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}

/* Custom Arrow Cursor */
.cursor-arrow {
  position: fixed;
  pointer-events: none;
  z-index: 99999;
  transition: transform 0.15s ease-out;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

/* Hover State - Pulsing animation */
.cursor-arrow.arrow-hover {
  animation: cursor-pulse 1s ease-in-out infinite;
}

@keyframes cursor-pulse {
  0%, 100% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.25);
  }
}

/* Click State - Quick compress */
.cursor-arrow.arrow-click {
  transform: scale(0.9);
  transition: transform 0.1s ease-out;
}

/* Hide on mobile */
@media (max-width: 768px) {
  .cursor-wrapper {
    display: none;
  }
}
</style>

