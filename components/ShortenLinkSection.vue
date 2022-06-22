<template>
  <section class="pt-8">
    <!-- Links Shortening Form -->
    <section class="bg-shorten-section">
      <div class="container">
        <div class="form-wrapper">
          <form @submit.prevent="handleShortenClicked">
            <div class="flex flex-col gap-2 md:grow">
              <input
                type="text"
                :class="{ 'input--error': errorMessage }"
                placeholder="Shorten a link here..."
                v-model="originalLink"
              />

              <p
                class="error-message"
                :class="{ 'error-message--shown': errorMessage }"
              >
                {{ errorMessage }}
              </p>
            </div>

            <BaseButton :roundedLg="true" type="submit">
              Shorten It!
            </BaseButton>
          </form>
        </div>
      </div>
    </section>

    <!-- Links Results -->
    <section class="bg-[#eff0f5] pt-4">
      <div class="container flex flex-col gap-2">
        <LinkRow
          v-for="link in shortenUrlStore.getLastinks"
          :key="link.shortenedLink"
          :link="link"
        />
      </div>
    </section>
  </section>
</template>

<script setup>
  import { useShortenUrl } from '~/store/shortenUrls';

  // Shortening a Link
  const shortenUrlStore = useShortenUrl();
  const originalLink = ref('');
  const shortenedLink = ref('');
  const errorMessage = ref('');

  async function handleShortenClicked() {
    errorMessage.value = undefined;

    const response = await shortenUrlStore.shortenLink(originalLink.value);
    if (!response.ok) {
      errorMessage.value = 'Please add a valid link';
      return;
    }

    shortenedLink.value = response.result.short_link;
    const addLinkResponse = shortenUrlStore.addLink(
      originalLink.value,
      shortenedLink.value
    );
    if (!addLinkResponse) {
      errorMessage.value = 'This link already exists!';
      return;
    }
  }

  // Fetch Links from local Storage on mounted
  onMounted(() => {
    shortenUrlStore.fetchLinks();
  });
</script>

<style scoped lang="scss">
  .form-wrapper {
    @apply px-8 py-12 bg-no-repeat bg-cover rounded-lg bg-shorten-mobile md:bg-shorten-desktop bg-darkViolet bg-[right_bottom_2.5rem] md:bg-center;

    form {
      @apply flex flex-col gap-4 md:flex-row md:items-start;

      input {
        @apply px-8 py-3 text-sm border rounded-lg md:text-base transition-colors;

        &.input--error {
          @apply border-red;
        }
      }

      .error-message {
        @apply text-base italic transition-opacity opacity-0 text-red;

        &--shown {
          @apply opacity-100;
        }
      }
    }
  }
</style>
