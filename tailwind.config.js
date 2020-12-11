module.exports = {
	// variants: {
	//     borderWidth: ["responsive", "last", "hover", "focus", "group-hover"],
	// },
	variants: {
		textColor: ['responsive', 'hover', 'focus', 'group-hover'],
		borderWidth: ['responsive', 'last', 'hover', 'focus'],
		backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus'],
		backgroundOpacity: ['responsive', 'odd', 'even', 'hover', 'focus'],
		padding: ['responsive'],
		textAlign: ['responsive', 'first', 'last'],
		divideColor: ['responsive', 'hover', 'focus'],
	},
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		fontFamily: {
			display: ['Gilroy', 'sans-serif'],
			body: ['Graphik', 'sans-serif'],
		},
		borderWidth: {
			default: '1px',
			'0': '0',
			'2': '2px',
			'4': '4px',
		},
		extend: {
			boxShadow: {
				blue: '0 4px 14px 0 rgba(19, 51, 81, 0.19)',
				neo: '4px 2px 16px rgba(136, 165, 191, 0.78), -4px -2px 16px #ffffff)',
			},
			colors: {
				cyan: '#9cdbff',
				cliniDarkBlue: '#104c93',
				cliniLightBlue: '#afb1c4',
			},
			spacing: {
				'7': '1.6rem',
				'13': '3.5rem',
				'18': '4.2rem',
				'90': '20rem',
				'96': '24rem',
				'98': '28rem',
				'100': '30rem',
				'128': '32rem',
			},
		},
	},
};
