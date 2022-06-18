<template>
  <section
    class="py-8 min-h-[calc(100vh-5rem)] overflow-hidden flex items-center"
  >
    <div class="container flex flex-col gap-8 md:flex-row-reverse">
      <div class="flex items-center">
        <img
          src="~/assets/images/illustration-working.svg"
          alt="Illustration"
          class="max-w-[140%] sm:translate-x-8"
        />
      </div>

      <div
        class="flex flex-col items-center gap-4 text-center md:text-left md:items-start md:justify-center"
      >
        <h1
          class="text-4xl font-bold text-veryDarkBlue md:text-5xl lg:text-6xl"
        >
          More than just shorter links
        </h1>

        <p class="text-gray">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>

        <BaseButton :roundedFull="true"> Get Started</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
