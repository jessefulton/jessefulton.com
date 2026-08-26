import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Clash Display', 'Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'JetBrains Mono', 'monospace'],
        stamp: ['Special Elite', 'Space Mono', 'monospace'],
        scribble: ['Rock Salt', 'cursive', 'sans-serif'],
      },
      colors: {
        slate: {
          base: '#15181E',
          deep: '#12151A',
          washed: '#1C2028',
          light: '#282E3A',
        },
        obsidian: '#08090C',
        'obsidian-panel': '#0A0B0E',
        charcoal: '#1E232B',
        'charcoal-washed': '#252B35',
        titanium: '#F4F5F7',
        'titanium-muted': '#8E96A4',
        gold: '#E5B80B',
        'gold-hover': '#F5C71A',
        magenta: '#FF2A85',
        'hot-pink': '#FF2A85',
        cyan: '#00F0FF',
        teal: '#14B8A6',
        lime: '#D4FF00',
      },
      borderRadius: {
        'punk': '1.25rem 0.25rem 1.25rem 0.25rem',
        'punk-reverse': '0.25rem 1.25rem 0.25rem 1.25rem',
        'punk-sm': '0.75rem 0.15rem 0.75rem 0.15rem',
      },
      boxShadow: {
        'punk-gold': '4px 4px 0px 0px #E5B80B',
        'punk-pink': '4px 4px 0px 0px #FF2A85',
        'punk-cyan': '4px 4px 0px 0px #00F0FF',
        'punk-dark': '5px 5px 0px 0px #000000',
        'stamp': '2.5px 2.5px 0px 0px rgba(0, 0, 0, 0.95)',
        'glow-gold': '0 0 24px -4px rgba(229, 184, 11, 0.45)',
        'glow-cyan': '0 0 24px -4px rgba(0, 240, 255, 0.45)',
        'glow-pink': '0 0 24px -4px rgba(255, 42, 133, 0.45)',
      },
    },
  },
  plugins: [typography],
};
