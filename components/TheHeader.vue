<template>
  <header
    class="container relative flex items-center justify-between gap-4 py-4"
  >
    <SVGLogo class="w-32 fill-veryDarkViolet md:w-40" />

    <button @click="isNavVisible = !isNavVisible" aria-label="Hamburger Menu">
      <SVGHamburgerMenu class="block lg:hidden" />
    </button>

    <nav :class="{ 'nav--visible': isNavVisible }" class="nav">
      <ul class="flex flex-col items-center gap-6 lg:flex-row">
        <li class="transition-colors md:hover:text-black">
          <a href="#">Features</a>
        </li>

        <li class="transition-colors md:hover:text-black">
          <a href="#">Pricing</a>
        </li>

        <li class="transition-colors md:hover:text-black">
          <a href="#">Resources</a>
        </li>
      </ul>

      <hr class="lg:hidden text-gray" />

      <div class="flex flex-col gap-6 font-bold lg:flex-row">
        <button class="md:hover:text-black">Login</button>
        <BaseButton :roundedFull="true">Sign Up</BaseButton>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isNavVisible: false,
      };
    },
  };
</script>

<style scoped lang="scss">
  .nav {
    @apply absolute px-4 py-6 font-bold text-base text-white lg:text-gray rounded-lg top-14 bg-darkViolet right-0 hidden flex-col gap-4 lg:flex lg:static lg:flex-row lg:bg-transparent  lg:py-1 w-full lg:justify-between z-10;

    &--visible {
      @apply flex;
    }
  }
</style>
