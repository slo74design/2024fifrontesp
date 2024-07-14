import flowbite from "flowbite-react/tailwind";

const config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/flowbite/**/*.js",
        "./node_modules/flowbite-react/lib/**/*.js",
        flowbite.content(),
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                fi: {
                    100: "#00004A", // Primary color
                    200: "#04ADFF", // Secondary color
                    300: "#8BAC1A", // CTA
                    400: "#484848", // Body Content
                },
            },
        },
    },
    plugins: [flowbite.plugin(), require("@tailwindcss/forms")],
};
export default config;
