# Parth's Portfolio Website
----------
A visually stunning, animated, and responsive developer portfolio website built with modern web technologies.

## 🚀 Tech Stack

- **Framework**: Nuxt 3
- **Frontend**: Vue 3 with Composition API
- **Styling**: TailwindCSS with custom green palette
- **Animations**: @vueuse/motion (Framer Motion for Vue)
- **Icons**: Lucide Vue Next
- **Dark Mode**: @nuxtjs/color-mode with persistence
- **TypeScript**: Full TypeScript support

## ✨ Features

- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Dark/Light Mode**: Toggle with system preference detection and localStorage persistence
- **Smooth Animations**: Entrance animations, hover effects, and scroll-triggered animations
- **SEO Optimized**: Meta tags, structured data, and social media optimization
- **Performance**: Optimized for Core Web Vitals and fast loading
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🎨 Design Features

- **Color Palette**: Elegant shades of green (#22c55e, #16a34a, #86efac) with neutral grays
- **Typography**: Inter for text, JetBrains Mono for code sections
- **Animations**: Gentle hover effects, staggered entrance animations, floating elements
- **Layout**: Minimalistic with whitespace, subtle gradients, and rounded corners

## 📱 Sections

1. **Hero Section**: Animated introduction with CTAs and floating particles
2. **About Section**: Personal intro with animated skill badges and stats
3. **Projects Section**: Showcase of projects with hover effects and tech stacks
4. **Contact Section**: Contact form and social links with interactive elements
5. **Navigation**: Sticky navbar with scroll progress indicator
6. **Footer**: Social links and back-to-top functionality

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
├── assets/
│   └── css/
│       └── main.css          # Global styles and Tailwind imports
├── components/
│   ├── About.vue             # About section with skills
│   ├── Contact.vue           # Contact form and social links
│   ├── Footer.vue            # Footer with back-to-top
│   ├── Hero.vue              # Hero section with animations
│   ├── Navbar.vue            # Navigation with scroll progress
│   └── Projects.vue          # Projects showcase
├── composables/
│   └── useScrollAnimation.ts # Scroll animation utilities
├── layouts/
│   └── default.vue           # Default layout wrapper
├── pages/
│   └── index.vue             # Main page
├── plugins/
│   └── motion.client.ts      # Motion plugin configuration
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.js        # Tailwind configuration
└── app.vue                   # Root app component
```

## 🎯 Customization

### Personal Information

Update the following files with your information:

1. **Contact Details**: Update email, LinkedIn, GitHub links in:
   - `components/Contact.vue`
   - `components/Footer.vue`
   - `components/Navbar.vue`

2. **Projects**: Modify the projects array in `components/Projects.vue`

3. **Skills**: Update the skills array in `components/About.vue`

4. **Meta Tags**: Update SEO information in:
   - `nuxt.config.ts`
   - `pages/index.vue`

### Styling

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font imports in `nuxt.config.ts`
- **Animations**: Customize animations in `assets/css/main.css`

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build the project
npm run build

# Deploy the .output/public directory
```

### Static Hosting

```bash
# Generate static files
npm run generate

# Deploy the .output/public directory to any static host
```

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with tree-shaking and code splitting
- **Images**: Optimized with proper sizing and lazy loading

## 🎨 Animation Details

- **Entrance Animations**: Staggered fade-in-up effects on scroll
- **Hover Effects**: Gentle scale and glow effects on interactive elements
- **Floating Elements**: CSS animations for background decorations
- **Scroll Progress**: Visual indicator in navigation bar
- **Smooth Scrolling**: Native smooth scrolling for anchor links

## 🔧 Configuration

The website is highly configurable through:

- `nuxt.config.ts`: Core Nuxt settings, modules, and meta tags
- `tailwind.config.js`: Design system, colors, and animations
- `assets/css/main.css`: Custom CSS utilities and components

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
