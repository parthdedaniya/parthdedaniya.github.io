# Development Guide

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`

## Customization Checklist

### 1. Personal Information
- [ ] Update name and title in `components/Hero.vue`
- [ ] Update bio in `components/About.vue`
- [ ] Update contact information in `components/Contact.vue` and `components/Footer.vue`
- [ ] Update social media links throughout the components

### 2. Projects
- [ ] Replace example projects in `components/Projects.vue`
- [ ] Add project screenshots/images to `public/` directory
- [ ] Update project URLs and GitHub links

### 3. Skills & Technologies
- [ ] Update skills array in `components/About.vue`
- [ ] Modify skill categories and icons as needed
- [ ] Update stats (years of experience, projects, etc.)

### 4. SEO & Meta Tags
- [ ] Update meta tags in `nuxt.config.ts`
- [ ] Update structured data in `pages/index.vue`
- [ ] Add og-image.jpg to `public/` directory
- [ ] Update favicon.ico in `public/` directory

### 5. Styling (Optional)
- [ ] Modify color palette in `tailwind.config.js`
- [ ] Adjust animations in `assets/css/main.css`
- [ ] Update fonts in `nuxt.config.ts`

## File Structure

```
├── components/           # Vue components
│   ├── About.vue        # About section
│   ├── Contact.vue      # Contact form & links
│   ├── Footer.vue       # Footer with social links
│   ├── Hero.vue         # Hero section
│   ├── Navbar.vue       # Navigation bar
│   └── Projects.vue     # Projects showcase
├── layouts/
│   └── default.vue      # Default layout
├── pages/
│   └── index.vue        # Main page
├── assets/css/
│   └── main.css         # Global styles
├── public/              # Static assets
├── nuxt.config.ts       # Nuxt configuration
└── tailwind.config.js   # Tailwind configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run generate` - Generate static site

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Deploy `.output/public` directory

### Static Hosting
1. Run `npm run generate`
2. Deploy `.output/public` directory

## Tips

- Use the browser dev tools to test responsiveness
- Check dark/light mode toggle functionality
- Test all animations and hover effects
- Verify all links work correctly
- Test contact form submission
- Validate SEO with Lighthouse

## Troubleshooting

### Common Issues

1. **Animations not working**: Check that `@formkit/auto-animate` is properly installed
2. **Dark mode not persisting**: Verify `@nuxtjs/color-mode` configuration
3. **Styles not applying**: Check Tailwind CSS configuration and imports
4. **Build errors**: Ensure all dependencies are installed with `npm install`

### Performance Tips

- Optimize images before adding to `public/` directory
- Use WebP format for better compression
- Keep bundle size minimal by importing only needed icons
- Test with Lighthouse for performance metrics