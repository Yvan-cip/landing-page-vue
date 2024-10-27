<script setup lang="ts">
import TextH2 from './typography/TextH2.vue'
import TextH4 from './typography/TextH4.vue'
import ButtonPrimary from './ui/ButtonPrimary.vue'
import BrandPartner from './svg/BrandPartner.vue'
</script>

<template>
  <section class="flex w-full justify-center py-[100px]">
    <div class="flex flex-col justify-center gap-y-[28px] sm:gap-y-[80px]">
      <div
        class="flex flex-col w-full jusitify-center text-center text-texte gap-y-[7px]"
      >
        <TextH2 title="Partners" />
        <div class="text-center w-full flex justify-center">
          <TextH4
            title="Most calendars are designed for teams. Slate is designed for freelancers"
            color="text-second_text max-w-[532px] "
          />
        </div>
      </div>
      <div class="flex flex-col gap-y-[21px] justify-center">
        <div class="w-full flex justify-center">
          <BrandPartner />
        </div>
      </div>
      <div class="w-full flex justify-center">
        <div class="w-1/4">
          <ButtonPrimary text="Try for free" />
        </div>
      </div>
    </div>
  </section>
</template>
