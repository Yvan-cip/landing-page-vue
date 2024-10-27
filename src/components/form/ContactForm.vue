<script setup lang="ts">
import TextH3 from '../typography/TextH3.vue'
import InputText from '../ui/InputText.vue'
import InputTextarea from '../ui/InputTextarea.vue'
</script>

<template>
  <div
    class="min-w-[450px] rounded-[20px] bg-light_background shadow flex flex-col text-center justify-center gap-y-[45px] py-[52px] px-[50px]"
  >
    <TextH3 title="Contact Us" />
    <InputText label="Your Name" />
    <InputText label="Your Email" />
    <InputTextarea label="Your Message" />
  </div>
</template>
