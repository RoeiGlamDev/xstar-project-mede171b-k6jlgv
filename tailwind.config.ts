import { defineConfig } from 'tailwindcss';

/
 * Custom Tailwind CSS configuration for luxury LRP cosmetics.
 * This configuration defines a luxury color palette and enhances the design 
 * with animations suitable for a high-end cosmetics brand.
 * 
 * @package luxury LRP cosmetics
 */
export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FFA500', // Custom orange for luxury LRP cosmetics
        },
        white: {
          DEFAULT: '#FFFFFF', // Custom white for luxury LRP cosmetics
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
});