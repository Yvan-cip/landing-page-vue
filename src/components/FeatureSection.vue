<script setup lang="ts">
import TextH2 from './typography/TextH2.vue'
import TextH4 from './typography/TextH4.vue'
import VideoScreen from './svg/VideoScreen.vue'
import FeatureItem from './items/FeatureItem.vue'
import IconBrushPrimary from './icons/IconBrushPrimary.vue'
import IconDrawPrimary from './icons/IconDrawPrimary.vue'
import IconDrawingPrimary from './icons/IconDrawingPrimary.vue'

const features = [
  {
    icon: IconDrawingPrimary,
    title: 'OpenType features Variable fonts',
    text: 'Slate helps you see how many more days you need to work to reach your financial goal.',
  },
  {
    icon: IconDrawPrimary,
    title: 'Design with real data',
    text: 'Slate helps you see how many more days you need to work to reach your financial goal.',
  },
  {
    icon: IconBrushPrimary,
    title: 'Fastest way to take action',
    text: 'Slate helps you see how many more days you need to work to reach your financial goal.',
  },
]
</script>

<template>
  <section class="flex w-full justify-center">
    <div class="flex flex-col justify-center gap-y-[28px] sm:gap-y-[80px]">
      <div
        class="flex flex-col w-full jusitify-center text-center text-texte gap-y-[7px]"
      >
        <TextH2 title="Features" />
        <div class="text-center w-full flex justify-center">
          <TextH4
            title="Most calendars are designed for teams. Slate is designed for freelancers"
            color="text-second_text max-w-[532px]"
          />
        </div>
      </div>
      <div class="flex flex-col gap-y-[21px] justify-center">
        <div class="grid grid-cols-3 gap-x-[52px]">
          <FeatureItem
            v-for="(feature, index) in features"
            :key="index"
            :icon="feature.icon"
            :title="feature.title"
            :text="feature.text"
          />
        </div>
      </div>
      <div class="w-full flex justify-center">
        <VideoScreen />
      </div>
    </div>
  </section>
</template>
