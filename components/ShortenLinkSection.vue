<template>
  <section class="py-8">
    <div class="container">
      <div
        class="px-8 py-12 bg-no-repeat bg-cover rounded-lg bg-shorten-mobile md:bg-shorten-desktop bg-darkViolet bg-[right_bottom_2.5rem] md:bg-center"
      >
        <form onsubmit.prevent="" class="flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            class="px-8 py-3 text-sm rounded-lg md:text-base md:grow"
            placeholder="Shorten a link here..."
          />
          <BaseButton :roundedLg="true" type="submit">Shorten It!</BaseButton>
        </form>
      </div>
    </div>
  </section>
</template>
