<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="text-left p-[10px] w-full">
    <h5
      class="text-second_text dark:text-light_text text-[16px] leading-[23px]"
    >
      {{ title }}
    </h5>
  </div>
</template>
