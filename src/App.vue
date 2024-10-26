<script setup lang="ts">
import TextH1 from './components/typography/TextH1.vue'
import TextH2 from './components/typography/TextH2.vue'
</script>

<template>
  <main class="bg-light_gradient dark:bg-dark_background w-full h-screen">
    <TextH1 title="Lightning fast prototyping" />
    <TextH2 title="Available exclusively on the Mac for just $99." />
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
