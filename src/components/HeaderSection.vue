<script setup lang="ts">
import TextH1 from './typography/TextH1.vue'
import TextH4 from './typography/TextH4.vue'
import TextLink from './typography/TextLink.vue'
import ButtonPrimary from './ui/ButtonPrimary.vue'
import IconLogo from './icons/IconLogo.vue'
import IconTwiter from './icons/IconTwiter.vue'
import IconFacebook from './icons/IconFacebook.vue'
import IconLinkedin from './icons/IconLinkedin.vue'

const links = [
  { text: 'Home', link: '#home' },
  { text: 'Product', link: '#product' },
  { text: 'Pricing', link: '#pricing' },
  { text: 'About', link: '#about' },
  { text: 'Contact', link: '#contact' },
]
</script>

<template>
  <section id="home" class="w-full h-fit pb-[80px]">
    <div class="background-image flex flex-col">
      <div class="h-[156px] w-full flex justify-center">
        <div class="w-[1210px] flex justify-between items-center">
          <div class="text-light_text flex-row flex gap-x-[21px] items-center">
            <TextLink
              v-for="(item, index) in links"
              :key="index"
              :text="item.text"
              :link="item.link"
            />
          </div>
          <div class="translate-x-[-70%]">
            <IconLogo />
          </div>
          <div
            class="flex max-md:justify-center items-center gap-x-[24px] py-[20px]"
          >
            <IconTwiter />
            <IconFacebook />
            <IconLinkedin />
          </div>
        </div>
      </div>
      <div class="py-[80px] flex flex-col gap-y-10">
        <div
          class="flex flex-col w-full jusitify-center text-center text-light_text gap-y-[7px]"
        >
          <div class="w-full flex justify-center p-[10px]">
            <TextH1
              title="The best products start with Figma"
              class="max-w-[692px]"
            />
          </div>

          <div class="text-center w-full flex justify-center p-[10px]">
            <TextH4
              title="Most calendars are designed for teams. Slate is designed for freelancers"
              color="text-light_text max-w-[786px] "
            />
          </div>
        </div>
        <div class="w-full flex justify-center">
          <div class="w-1/4 p-5">
            <ButtonPrimary text="Try for free" />
          </div>
        </div>
        <div class="min-h-[218px]"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.background-image {
  @apply bg-cover bg-center;
  background-image: url('@/assets/image/backgroundheader.png');
  height: 120vh;
  width: 100%;
}
</style>
