<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="text-left p-[10px] w-full">
    <a class="text-texte dark:text-light_text text-[15px] leading-[28px]">{{
      text
    }}</a>
  </div>
</template>
