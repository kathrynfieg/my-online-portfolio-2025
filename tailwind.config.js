/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        navbar: 'var(--navbar)',
        text: 'var(--text)',
        header: 'var(--header)',
        primary: 'var(--primary)',
        'primary-text': 'var(--primary-text)',
        secondary: 'var(--secondary)',
        'secondary-text': 'var(--secondary-text)',

        'footer-bg': 'var(--footer-bg)',
        'footer-text': 'var(--footer-text)',
        'card-bg': 'var(--card-bg)',
        'card-text': 'var(--card-text)',
        'tag-bg': 'var(--tag-bg)',
        'tag-text': 'var(--tag-text)',

        'primary-green': '#00563E',
        'primary-orange': '#FF7F01',
        'primary-yellow': '#FEA501',
        'primary-gray': '#333333',

        'pastel-blue': '#244856',
        'pastel-red': '#E64833',
        'pastel-brown': '#874F41',
        'pastel-cyan': '#90AEAD',
        'pastel-cream': '#FBE9D0',
      },
    },
  },
  plugins: [],
};
