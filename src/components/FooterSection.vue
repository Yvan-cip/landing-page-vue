<script setup lang="ts">
import FooterItem from './items/FooterItem.vue'
import TextH3 from './typography/TextH3.vue'
import TextLink from './typography/TextLink.vue'
import IconLocation from './icons/IconLocation.vue'
import IconPhone from './icons/IconPhone.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconFacebook from './icons/IconFacebook.vue'
import IconTwiter from './icons/IconTwiter.vue'
</script>

<template>
  <section
    class="w-full h-fit py-[107px] sm:py-[150px] flex justify-center items-center bg-dark_background"
  >
    <div
      class="grid px-4 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-y-[73px]"
    >
      <FooterItem>
        <template #title>
          <TextH3 title="Pages" />
        </template>
        <template #list>
          <TextLink text="Home" link="/#" />
          <TextLink text="Product" link="/#product" />
          <TextLink text="Pricing" link="/#pricing" />
          <TextLink text="About" link="/#about" />
          <TextLink text="Contact" link="/#contact" />
        </template>
      </FooterItem>
      <FooterItem>
        <template #title>
          <TextH3 title="Tomothy" />
        </template>
        <template #list>
          <TextLink text="Eleanor Edwards" link="/" />
          <TextLink text="Ted Robetson" link="/" />
          <TextLink text="Annette Russell" link="/" />
          <TextLink text="Jennie McKinney" link="/" />
          <TextLink text="Gloria Richards" link="/" />
        </template>
      </FooterItem>
      <FooterItem>
        <template #title>
          <TextH3 title="Jane Black" />
        </template>
        <template #list>
          <TextLink text="Philip Jones" link="/" />
          <TextLink text="Product" link="/" />
          <TextLink text="Colleen Russell" link="/" />
          <TextLink text="Marvin Hawkins" link="/" />
          <TextLink text="Bruce Simmons" link="/" />
        </template>
      </FooterItem>
      <div class="text-light_text gap-y-[10px]">
        <div class="flex items-center gap-x-2 py-2">
          <IconLocation />
          <span class="text-[15px]">7480 Mockingbird Hill undefined</span>
        </div>
        <div class="flex items-center gap-x-2 py-[10px]">
          <IconPhone />
          <span class="text-[15px]">(239) 555-0108</span>
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
  </section>
</template>
