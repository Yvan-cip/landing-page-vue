<script setup lang="ts">
import TextH2 from './typography/TextH2.vue'
import TextH4 from './typography/TextH4.vue'
import PricingCard from './PricingCard.vue'

const pricingOptions = [
  {
    title: 'FREE',
    description: 'Organize across all apps by hand',
    price: '0',
    bgColor: 'bg-light_background',
    textColor: 'text-texte',
    subTextColor: 'text-second_text',
    buttonComponent: 'ButtonPrimary',
    buttonText: 'Order Now',
    paddingClass: 'p-10',
    features: [
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
    ],
    featureColor: 'text-texte',
  },
  {
    title: 'STANDARD',
    description: 'Organize across all apps by hand',
    price: '10',
    bgColor: 'bg-primary',
    textColor: 'text-light_text',
    subTextColor: '',
    buttonComponent: 'ButtonLight',
    buttonText: 'Order Now',
    paddingClass: 'px-10 py-[83px]',
    features: [
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
    ],
    featureColor: 'text-light_text',
  },
  {
    title: 'BUSINESS',
    description: 'Organize across all apps by hand',
    price: '99',
    bgColor: 'bg-light_background',
    textColor: 'text-texte',
    subTextColor: 'text-second_text',
    buttonComponent: 'ButtonPrimary',
    buttonText: 'Order Now',
    paddingClass: 'p-10',
    features: [
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
    ],
    featureColor: 'text-texte',
  },
]
</script>

<template>
  <section class="flex w-full justify-center py-[100px] bg-dark_background">
    <div class="flex flex-col justify-center gap-x-[28px] sm:gap-x-[50px]">
      <div class="text-texte max-w-[532px] flex flex-col gap-y-[80px]">
        <div
          class="text-light_text flex flex-col jusitify-center text-center gap-y-[7px]"
        >
          <TextH2 title="Pricing" />
          <TextH4
            title="Most calendars are designed for teams. Slate is designed for freelancers"
          />
        </div>

        <div
          class="flex flex-col justify-center items-center sm:flex-row gap-x-[50px] gap-y-[10px] text-center"
        >
          <PricingCard
            v-for="(option, index) in pricingOptions"
            :key="index"
            :title="option.title"
            :description="option.description"
            :price="option.price"
            :bgColor="option.bgColor"
            :textColor="option.textColor"
            :subTextColor="option.subTextColor"
            :buttonComponent="option.buttonComponent"
            :buttonText="option.buttonText"
            :paddingClass="option.paddingClass"
            :featureColor="option.featureColor"
            :features="option.features"
          />
        </div>
      </div>
    </div>
  </section>
</template>
