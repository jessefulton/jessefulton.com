/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        obsidian: '#0D0F12',
        charcoal: '#1E2228',
        'charcoal-light': '#2A2F37',
        titanium: '#F4F5F7',
        'titanium-muted': '#8E95A2',
        gold: '#E5B80B',
        'gold-hover': '#F5C71A',
        magenta: '#FF006E',
        cyan: '#00F5D4',
        lime: '#CCFF00',
      },
      boxShadow: {
        'glow-gold': '0 0 20px -5px rgba(229, 184, 11, 0.4)',
        'glow-cyan': '0 0 20px -5px rgba(0, 245, 212, 0.4)',
        'glow-magenta': '0 0 20px -5px rgba(255, 0, 110, 0.4)',
      },
    },
  },
  plugins: [],
};
