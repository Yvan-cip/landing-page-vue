<script setup lang="ts">
import { defineProps } from 'vue'
import TextH3 from '../typography/TextH3.vue'
import TextParagraphe from '../typography/TextParagraphe.vue'

defineProps({
  icon: { type: Object, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <div class="flex flex-col gap-y-[10px]">
    <div class="w-full flex justify-center">
      <component :is="icon" />
    </div>
    <div class="w-full flex justify-center">
      <TextH3 :title="title" class="max-w-[251px] text-center" />
    </div>
    <div class="w-full flex justify-center">
      <TextParagraphe :text="text" class="max-w-[251px] text-center" />
    </div>
  </div>
</template>
