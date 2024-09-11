/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                "light-gray-1": "#E4E4E7",
                "light-gray-2": "#a1a1aa",
                "dark-gray": "#71717A",
                "dark-blue": "#075985",
                "dark-green": "#4C7800"
            },
            fontFamily: {
                sans: ["Roboto", "sans-serif"]
            }
        }
    },
    plugins: []
};
