<script setup lang="ts">
import HeaderSection from './components/HeaderSection.vue'
import FeatureSection from './components/FeatureSection.vue'
import HeroLight from './components/HeroLight.vue'
import CtaSection from './components/CtaSection.vue'
import PartnerSection from './components/PartnerSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import PricingSection from './components/PricingSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <main class="bg-light_gradient w-full h-screen">
    <HeaderSection />
    <FeatureSection />
    <HeroLight />
    <CtaSection />
    <PartnerSection />
    <TestimonialSection />
    <PricingSection />
    <ContactSection />
    <FooterSection />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
