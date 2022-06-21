<template>
  <div class="flex flex-col items-center px-6 pb-8 bg-white rounded-md">
    <div
      id="nuxt-icon-wrapper"
      class="p-5 -translate-y-8 rounded-full bg-darkViolet w-fit"
    >
      <slot name="icon"></slot>
    </div>

    <h3 class="font-bold">{{ title }}</h3>

    <p class="mt-4 text-base text-grayishViolet">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  });
</script>
