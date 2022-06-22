<template>
  <button
    class="px-8 py-3 font-bold text-white min-w-fit"
    :class="{
      'rounded-lg': roundedLg,
      'rounded-full': roundedFull,
      'bg-darkViolet hover:bg-[#4b406b]': isCopied,
      'bg-cyan hover:bg-[#9be3e2]': !isCopied,
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      roundedLg: { type: Boolean, required: false, default: false },
      roundedFull: { type: Boolean, required: false, default: false },
      isCopied: { type: Boolean, required: false, default: false },
    },
  };
</script>
