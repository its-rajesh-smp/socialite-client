/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		textColor: {
  			primary: '#263040'
  		},
  		backgroundColor: {
  			primary: '#F9FAFB',
  			primary_selected: '#F1F5F9'
  		},
  		fontFamily: {
  			inter: ["Inter", "sans-serif"]
  		},
  		keyframes: {
  			slideDown: {
  				from: {
  					height: '0px'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			slideUp: {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0px'
  				}
  			}
  		},
  		animation: {
  			slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  			slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
