<script setup lang="ts">
import { ref } from 'vue'

const isFocused = ref(false)
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="relative">
    <label
      :class="[
        'absolute left-[35px] transition-all duration-200 text-[15px]',
        isFocused
          ? 'top-[-10px] bg-light_background pb-1 px-1 pt-0'
          : 'top-[20px]',
      ]"
      >{{ label }}
    </label>
    <textarea
      type="text"
      @focus="isFocused = true"
      @blur="isFocused = false"
      class="border border-[#E8E8E8] w-full min-h-[193px] bg-[#F5F5F5] px-[35px] py-[19px]"
    />
  </div>
</template>
