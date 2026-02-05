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
                    DEFAULT: '#2F5A50', // Wellness Green
                    light: '#4A9D96',   // Fresh Teal
                    dark: '#1A332E',
                },
                secondary: {
                    DEFAULT: '#F5F5F0', // Warm Beige
                    foreground: '#333333',
                },
                accent: {
                    DEFAULT: '#E6B89C', // Sunrise Gold
                    hover: '#DBA88A',
                },
                surface: {
                    DEFAULT: '#FFFFFF',
                    muted: '#F0F2F5',
                }
            },
            fontFamily: {
                sans: ['Ubuntu', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
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
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
