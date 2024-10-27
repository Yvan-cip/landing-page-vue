<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="p-[10px] w-full">
    <h5 class="text-[16px] leading-[23px]">
      {{ title }}
    </h5>
  </div>
</template>
