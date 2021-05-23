module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ibmMono: ['IBM Plex Mono'],
        ibmSans: ['IBM Plex Sans'],
      },
      colors: {
        beige: '#f8f5ec',
        red: '#F04E27',
        lavender: '#DED3E8',
        yellow: '#f7a400',
        brown: '#d6a97d',
        blue: '#369ab9',
        green: '#00a16c',
        black: '#231F20',
        white: '#ffffff',
        pink: '#facfcc',
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ['hover', 'focus'],
    },
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.container': {
          margin: 'auto',
          padding: '0 2rem',
          maxWidth: '100%',
          '@screen lg': {
            maxWidth: '1200px',
          },
        },
        '.card': {
          maxHeight: '300px',
          padding: '1rem 0',
          '@screen lg': {
            padding: '2rem 1rem',
          },
        },
        '.slider': {
          maxHeight: '100%',
          padding: '2rem 1rem',
        },
      })
    },
  ],
}
