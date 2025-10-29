<template>
  <div>
    <Hero />
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
// SEO and meta tags
useSeoMeta({
  title: 'Parth - Full-Stack Developer',
  ogTitle: 'Parth - Full-Stack Developer',
  description: 'Full-Stack Developer specializing in Vue.js, Nuxt, NestJS, and AWS. Building elegant UIs and scalable backend systems.',
  ogDescription: 'Full-Stack Developer specializing in Vue.js, Nuxt, NestJS, and AWS. Building elegant UIs and scalable backend systems.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterImage: '/og-image.jpg'
})

// Structured data for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Parth',
        jobTitle: 'Full-Stack Developer',
        description: 'Full-Stack Developer specializing in Vue.js, Nuxt, NestJS, and AWS',
        url: 'https://yourwebsite.com',
        sameAs: [
          'https://github.com/yourgithub',
          'https://linkedin.com/in/yourprofile',
          'https://twitter.com/yourhandle'
        ],
        knowsAbout: [
          'Vue.js',
          'Nuxt',
          'NestJS',
          'Node.js',
          'AWS',
          'DynamoDB',
          'MongoDB',
          'TailwindCSS',
          'Full-Stack Development',
          'Frontend Development',
          'Backend Development'
        ]
      })
    }
  ]
})
</script>