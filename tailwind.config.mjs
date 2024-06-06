import animations from 'tailwindcss-animated';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  overpass: ['Overpass Variable', 'sans-serif'],
			  worksans: ['Work Sans Variable', 'sans-serif']
			},
			colors: {
				'primary': {
					light: '#d82046',
					DEFAULT: '#D3012C',
					dark: '#b80026',
				  }
			  }
		  }
	},
	plugins: [animations],
}
