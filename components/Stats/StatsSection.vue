<template>
  <section class="bg-[#eff0f5] py-16 text-center">
    <div class="container flex flex-col gap-12 lg:gap-0">
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl font-bold text-veryDarkBlue">
          Advanced Statistics
        </h2>

        <p class="text-grayishViolet">
          Track how your links are performinng across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div class="flex flex-col items-center lg:flex-row">
        <!-- StatBox -->
        <StatsBox
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        >
          <template #icon>
            <SVGBrandRecognition />
          </template>
        </StatsBox>

        <div class="w-2 h-24 bg-cyan lg:w-24 lg:h-2"></div>

        <StatsBox
          title="Detailed Records"
          description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          class="lg:mt-20"
        >
          <template #icon>
            <SVGDetailedRecords />
          </template>
        </StatsBox>

        <div class="w-2 h-20 bg-cyan lg:w-24 lg:h-2"></div>

        <StatsBox
          title="Fully Customizable"
          description="Improve brand awareness and content discoverability through customizable links, supercharginng audience engagement."
          class="lg:mt-40"
        >
          <template #icon>
            <SVGFullyCustomizable />
          </template>
        </StatsBox>
      </div>
    </div>
  </section>
</template>
