import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '0rem',
			},
		},
		extend: {
			screens: {
				xs: '375px', // Small-Regular Mobile
				sm: '576px', // Large Mobile - small Tablet
				md: '768px', // Regular Tablet (Portrait)
				lg: '992px', // Large Tablet (Landscape) - small Laptop
				xl: '1181px', // Large Laptop - small Desktop
				'2xl': '1440px', // Large Desktop
			},
			fontFamily: {
				sans: ['Open-sans', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				gray: colors.neutral,
				dark: '#090E34',
				'body-color': '#637381',
				book: {
					title: 'rgb(39, 39, 42)',
					
				},
				primary: {
					DEFAULT: '#df4759',
				},
				'wed003-primary': {
					DEFAULT: '#747BA9',
					dark: '#b58887',
					light: '#4d5271',
					transparent: '#747ba9cc',
				},
			},
			keyframes: {
				'stroke-animation': {
					'0%': { strokeDashoffset: '0' },
					'30%': { strokeDashoffset: '1550' },
					'60%': { strokeDashoffset: '3100', fill: 'transparent', transform: 'scale(1)' },
					'100%': { strokeDashoffset: '3100' },
				},
			},
			animation: {
				'wed003-stroke': 'stroke-animation 3s ease-in-out infinite forwards',
			},
		},
	},
	plugins: [],
};
export default config;
