<template>
  <div class="link-row">
    <p>{{ link.originalLink }}</p>

    <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
      <a class="text-cyan" :href="link.shortenedLink">
        {{ link.shortenedLink }}
      </a>

      <BaseButton
        :roundedLg="true"
        :isCopied="isCopied"
        @click="handleCopyClicked"
      >
        {{ isCopied ? 'Copied!' : 'Copy' }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({ link: { type: Object, required: true } });

  // Copying a Link
  const isCopied = ref(false);
  const handleCopyClicked = () => {
    navigator.clipboard.writeText(props.link.shortenedLink);

    isCopied.value = true;
    setInterval(() => {
      isCopied.value = false;
    }, 1500);
  };
</script>

<style scoped>
  .link-row {
    @apply bg-white rounded p-4 flex justify-between items-center gap-4 flex-col md:flex-row;
  }
</style>
