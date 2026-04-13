import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        mist: '#f7f7f5',
        stone: '#d6d2ca',
        gold: '#c8a96b'
      },
      boxShadow: {
        soft: '0 25px 60px rgba(0,0,0,0.12)'
      },
      backgroundImage: {
        'hero-fade': 'radial-gradient(circle at top, rgba(200,169,107,0.25), transparent 40%)'
      }
    }
  },
  plugins: []
};

export default config;
