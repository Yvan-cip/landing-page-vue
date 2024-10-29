<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="text-left px-[10px] w-full">
    <p class="text-second_text text-[18px] leading-[25px]">
      {{ text }}
    </p>
  </div>
</template>
