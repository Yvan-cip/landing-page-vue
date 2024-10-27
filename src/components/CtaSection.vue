<script setup lang="ts">
import NewsLetter from './svg/NewsLetter.vue'
import TextH3 from './typography/TextH3.vue'
import TextH2 from './typography/TextH2.vue'
import TextParagraphe from './typography/TextParagraphe.vue'
import ButtonPrimary from './ui/ButtonPrimary.vue'
import InputText from './ui/InputText.vue'
</script>

<template>
  <section class="flex w-full justify-center py-[43px]">
    <div
      class="flex flex-col justify-center sm:grid sm:grid-cols-2 gap-x-[50px]"
    >
      <div class="max-sm:hidden">
        <NewsLetter />
      </div>
      <div class="pt-[106px] text-texte">
        <div class="hidden sm:flex flex-col">
          <TextH3 title="At Your fingertips" />
          <div class="max-w-[326px]">
            <TextH2 title="Lightning fast prototyping" />
          </div>
        </div>
        <div>
          <TextH3 title="Subscribe to our Newsletter" />
          <TextParagraphe text="Available exclusivery on Figmaland" />
          <div class="flex flex-col gap-y-3 sm:flex-row py-[34px] gap-x-3">
            <InputText label="Your Email" />
            <ButtonPrimary text="Subscribe" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
