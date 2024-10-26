<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="text-left p-[10px] w-full">
    <h4
      class="text-second_text dark:text-light_text text-[28px] leading-[40px]"
    >
      {{ title }}
    </h4>
  </div>
</template>
