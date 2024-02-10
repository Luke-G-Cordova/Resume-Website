import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: 'var(--black)',
        blue: 'var(--blue)',
        maroon: 'var(--maroon)',
        purple: 'var(--purple)',
        grue: 'var(--grue)',
        'grey-dark': 'var(--grey-dark)',
        'grey-light': 'var(--grey-light)',
        'green-neon': 'var(--green-neon)',
        'red-neon': 'var(--red-neon)',
      },
      fontFamily: {
        calibri: ['Calibri', 'sans-serif'],
        segoe: ['Segoe UI', 'sans-serif'],
        cove: ['CaskaydiaCove Nerd Font', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
