<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="text-left p-[10px] w-full">
    <p class="text-second_text dark:text-light_text text-[18px] leading-[25px]">
      {{ text }}
    </p>
  </div>
</template>
