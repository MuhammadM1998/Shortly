<template>
  <button
    class="px-8 py-3 font-bold text-white bg-cyan hover:bg-[#9be3e2]"
    :class="{ 'rounded-lg': roundedLg, 'rounded-full': roundedFull }"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      roundedLg: { type: Boolean, required: false, default: false },
      roundedFull: { type: Boolean, required: false, default: false },
    },
  };
</script>
