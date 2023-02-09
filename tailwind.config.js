/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'red': '#F62E2E',
      'black': '#1c1917',
      'blue': '#169FF5',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'slate' : '#CBD5E1',
      'transparent-black' : 'rgba(0,0,0,0.4)',
      'transparent-white' : 'rgba(255,255,255,0.4)'
    },
    backgroundImage : {
      'cta-image': "url('/public/cta.jpg')",
      'techs-image': "url('/public/techs.jpg')",
      'project': "url('/public/projects.jpg')",
      'testimonial-bg': "url('/public/testimonial.jpg')"
    } 
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms')
  ],
}
