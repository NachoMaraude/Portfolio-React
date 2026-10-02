/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
    theme: {
        extend: {
            screens: {
                xs: "360px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                xxl: "1536px",
            },
        },
    },
    plugins: [require("daisyui"), "tailwind-scrollbar"],
};
