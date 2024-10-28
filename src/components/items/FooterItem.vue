<template>
  <div
    class="flex flex-col text-center sm:text-left justify-center sm:justify-normal gap-y-[15px] text-light_text pl-2"
  >
    <div>
      <slot name="title"></slot>
    </div>
    <div class="flex flex-col gap-y-4">
      <slot name="list"></slot>
    </div>
  </div>
</template>
