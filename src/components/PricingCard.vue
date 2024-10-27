<script setup lang="ts">
import TextH3 from './typography/TextH3.vue'
import TextH1 from './typography/TextH1.vue'
import TextH6 from './typography/TextH6.vue'
import TextLink from './typography/TextLink.vue'
import ButtonPrimary from './ui/ButtonPrimary.vue'
import ButtonLight from './ui/ButtonLight.vue'

defineProps<{
  title: string
  description: string
  price: string
  bgColor: string
  textColor: string
  subTextColor: string
  buttonComponent: string
  buttonText: string
  paddingClass: string
  features: string[]
  featureColor: string
}>()
</script>

<template>
  <div
    :class="[
      'flex flex-col gap-y-[30px] w-fit h-fit min-w-[335px] rounded-[10px]',
      bgColor,
      paddingClass,
    ]"
  >
    <div :class="textColor">
      <TextH3 :title="title" />
      <div class="w-full flex justify-center">
        <div :class="['max-w-[160px] text-center', subTextColor]">
          <TextH6 :title="description" />
        </div>
      </div>
    </div>
    <div
      class="flex flex-row justify-center gap-x-0 items-center"
      :class="textColor"
    >
      <div class="text-center">
        <TextH1 :title="price" />
      </div>
      <div class="flex flex-col text-left">
        <TextH3 title="$" />
        <div class="mt-[-21px]" :class="subTextColor">
          <TextH6 title="Per Month" />
        </div>
      </div>
    </div>

    <div :class="['flex flex-col justify-center items-center', featureColor]">
      <TextLink
        v-for="(feature, index) in features"
        :key="index"
        :text="feature"
      />
    </div>

    <ButtonPrimary
      v-if="buttonComponent === 'ButtonPrimary'"
      :text="buttonText"
    />
    <ButtonLight
      v-else-if="buttonComponent === 'ButtonLight'"
      :text="buttonText"
    />
  </div>
</template>
