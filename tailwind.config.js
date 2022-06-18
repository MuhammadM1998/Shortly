module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        darkViolet: ' hsl(257, 27%, 26%)',
        red: ' hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        grayishViolet: ' hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: ' hsl(260, 8%, 14%)',
      },

      screens: {
        '4xs': '375px',
        '3xs': '400px',
        '2xs': '480px',
        xs: '560px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },

      fontFamily: {
        poppins: '"Poppins", sans-serif',
      },

      backgroundImage: {
        'boost-desktop': "url('~/assets/images/bg-boost-desktop.svg')",
        'boost-mobile': "url('~/assets/images/bg-boost-mobile.svg')",
        'shorten-desktop': "url('~/assets/images/bg-shorten-desktop.svg')",
        'shorten-mobile': "url('~/assets/images/bg-shorten-mobile.svg')",
        'illustration-working':
          "url('~/assets/images/illustration-working.svg')",
      },
    },
  },
};
