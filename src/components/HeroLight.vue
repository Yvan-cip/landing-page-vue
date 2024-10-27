<script setup lang="ts">
import MacBook from './svg/MacBook.vue'
import TextH4 from './typography/TextH4.vue'
import TextH2 from './typography/TextH2.vue'
import ButtonPrimary from './ui/ButtonPrimary.vue'
</script>

<template>
  <section class="flex w-full justify-center py-[226px] px-[82px]">
    <div
      class="flex flex-col justify-center sm:grid sm:grid-cols-2 gap-x-[50px]"
    >
      <div class="text-texte max-w-[532px] flex flex-col gap-y-[60px]">
        <div>
          <TextH2 title="Fastest way to organize" />
          <TextH4
            title="Most calendars are designed for teams. Slate is designed for freelancers"
          />
        </div>

        <div>
          <ButtonPrimary text="Try for free" />
        </div>
      </div>
      <div class="max-sm:hidden">
        <MacBook />
      </div>
    </div>
  </section>
</template>
