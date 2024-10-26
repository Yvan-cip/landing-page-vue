<script setup lang="ts">
defineProps<{
  text: string
  link: string
}>()
</script>

<template>
  <div class="p-[10px] w-full">
    <a class="text-[15px] leading-[28px]" href="{{ link }}">{{ text }}</a>
  </div>
</template>
