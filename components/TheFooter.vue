<template>
  <footer class="pt-16 pb-20 bg-veryDarkViolet">
    <div
      class="container flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:items-start"
    >
      <SVGLogo class="fill-white md:w-40" />

      <div
        class="flex flex-col gap-8 lg:flex-row lg:grow lg:justify-center lg:gap-18 xl:gap-24"
      >
        <div class="flex flex-col items-center gap-4 text-gray lg:items-start">
          <h3 class="font-bold text-white">Features</h3>

          <ul class="flex flex-col gap-2 text-base text-center lg:text-left">
            <li><a href="#">Link Shortening</a></li>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
        </div>

        <div class="flex flex-col items-center gap-4 text-gray lg:items-start">
          <h3 class="font-bold text-white">Resources</h3>

          <ul class="flex flex-col gap-2 text-base text-center lg:text-left">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div class="flex flex-col items-center gap-4 text-gray lg:items-start">
          <h3 class="font-bold text-white">Features</h3>

          <ul class="flex flex-col gap-2 text-base text-center lg:text-left">
            <li><a href="#">About</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div>
        <ul class="flex items-center justify-center gap-8">
          <li>
            <a href="#" aria-label="Facebook"> <SVGFacebook /></a>
          </li>

          <li>
            <a href="" aria-label="Twitter"> <SVGTwitter /></a>
          </li>

          <li>
            <a href="" aria-label="Pinterest"> <SVGPinterest /></a>
          </li>

          <li>
            <a href="" aria-label="Instagram"> <SVGInstagram /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  ul li {
    @apply hover:text-cyan  transition-colors;

    svg {
      @apply hover:fill-cyan  transition-colors;
    }
  }
</style>
