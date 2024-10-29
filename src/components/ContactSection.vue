<script setup lang="ts">
import TextH2 from './typography/TextH2.vue'
import TextH4 from './typography/TextH4.vue'
import TextH6 from './typography/TextH6.vue'
import ContactForm from './form/ContactForm.vue'
import LocationMap from './svg/LocationMap.vue'
import IconLocationPrimary from './icons/IconLocationPrimary.vue'
import IconPhonePrimary from './icons/IconPhonePrimary.vue'
import IconLinkedinPrimary from './icons/IconLinkedinPrimary.vue'
import IconFacebookPrimary from './icons/IconFacebookPrimary.vue'
import IconTwiterPrimary from './icons/IconTwiterPrimary.vue'
import IconMailPrimary from './icons/IconMailPrimary.vue'
</script>

<template>
  <section id="contact" class="flex w-full justify-center py-[100px]">
    <div class="flex flex-col justify-center gap-y-[28px] sm:gap-y-[50px]">
      <div class="text-texte flex w-full flex-col jusitify-center gap-y-[80px]">
        <div
          class="flex flex-col w-full jusitify-center text-center gap-y-[7px]"
        >
          <TextH2 title="Contact Us" />
          <div class="text-center w-full flex justify-center">
            <TextH4
              title="Most calendars are designed for teams. Slate is designed for freelancers"
              color="text-second_text max-w-[532px] "
            />
          </div>
        </div>
      </div>
      <div class="flex gap-x-[50px]">
        <ContactForm />
        <div class="flex flex-col gap-y-[50px] text-second_text">
          <div class="flex gap-x-[52px]">
            <div
              class="flex flex-col justify-center text-center gap-y-[10px] w-fit"
            >
              <div class="w-full flex justify-center">
                <IconLocationPrimary />
              </div>
              <TextH6
                title="6386 Spring St undefined Anchorage, Georgia 12473 United States"
                specialClass="text-second_text max-w-[313px]"
              />
            </div>
            <div class="flex flex-col justify-center text-center gap-y-[10px]">
              <div class="w-full flex justify-center"><IconPhonePrimary /></div>
              <TextH6
                title="(843) 555-0130"
                specialClass="text-second_text max-w-[313px]"
              />
            </div>
            <div class="flex flex-col justify-center text-center gap-y-[10px]">
              <div class="w-full flex justify-center"><IconMailPrimary /></div>
              <TextH6
                title="willie.jennings@example.com"
                specialClass="text-second_text max-w-[313px]"
              />
            </div>
          </div>
          <div class="flex justify-center">
            <LocationMap />
          </div>
          <div
            class="flex max-md:justify-center items-center gap-x-[24px] py-[20px] text-primary"
          >
            <IconTwiterPrimary />
            <IconFacebookPrimary />
            <IconLinkedinPrimary />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
