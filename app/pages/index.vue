<script setup lang="ts">
useSeoMeta({
  title: "Sales & Communications Manager",

  description:
    "Portfolio of Syed Ali bin Syed Hashim, a Sales & Communications Manager with experience in sales, business development, digital marketing, customer engagement and communications.",

  ogTitle: "Syed Ali | Sales & Communications Manager",

  ogDescription:
    "Sales, marketing, communications and business development professional focused on customer engagement and business growth.",

  ogType: "website",

  ogImage: "public/images/social/syed-ali-og.jpg",

  twitterCard: "summary_large_image",

  twitterTitle: "Syed Ali | Sales & Communications Manager",

  twitterDescription:
    "Sales, marketing, communications and business development professional.",

  twitterImage: "/og-image.jpg",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Syed Ali bin Syed Hashim",
        jobTitle: "Sales & Communications Manager",
        email: "mailto:syedali.syedhashim@gmail.com",
        sameAs: ["https://linkedin.com/in/syedalisyedhashim"],
      }),
    },
  ],
});
</script>

<template>
  <div>
    <AppNavbar />

    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ToolsSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>
