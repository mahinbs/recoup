/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#862CD6', // Vibrant Purple
                    light: '#A665E4',   // Lighter Purple
                    dark: '#5B1E91',    // Darker Purple
                    darker: "#6107b5",
                    darkest: "#571396"
                },
                secondary: {
                    DEFAULT: '#6F6AA5', // Slate Blue
                    foreground: '#FFFFFF',
                },

                surface: {
                    DEFAULT: '#FFFFFF',
                    muted: '#F0F2F5',
                }
            },
            fontFamily: {
                sans: ['Ubuntu', 'sans-serif'],
                serif: ['SN Pro', 'serif'],
            },
            container: {
                center: true,
                padding: '1.5rem',
                screens: {
                    '2xl': '1400px',
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'ephr-spin-y': 'ephrSpinY 18s linear infinite',
                'ephr-turntable': 'ephrTurntable 10s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                ephrSpinY: {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': { transform: 'rotateY(360deg)' },
                },
                ephrTurntable: {
                    '0%, 100%': { transform: 'rotateY(-32deg) scale(1.02)' },
                    '50%': { transform: 'rotateY(32deg) scale(1.02)' },
                },
            }
        },
    },
    plugins: [],
}
