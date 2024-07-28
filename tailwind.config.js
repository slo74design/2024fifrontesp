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
                fiPrimary: {
                    50: "#CECEFF",
                    100: "#9C9CFF",
                    200: "#6B6BFF",
                    300: "#3939FF",
                    400: "#0808FF",
                    500: "#0000D5",
                    600: "#0000A4",
                    700: "#00007B",
                    800: "#000052",
                    900: "#000029",
                },
                fiLight: {
                    50: "#DBF3FF",
                    100: "#B6E8FF",
                    200: "#92DCFF",
                    300: "#6DD1FF",
                    400: "#49C5FF",
                    500: "#24BAFF",
                    600: "#00AEFF",
                    700: "#0083BF",
                    800: "#005780",
                    900: "#002C40",
                },
                fiGreen: {
                    50: "#F3FAD6",
                    100: "#E6F6AE",
                    200: "#DAF185",
                    300: "#CDEC5D",
                    400: "#C1E834",
                    500: "#ADD619",
                    600: "#8CAD14",
                    700: "#69820F",
                    800: "#46570A",
                    900: "#232B05",
                },
                fiContent: {
                    100: "#000000", // Black color - Title
                    200: "#484848", // Body content - dark grey
                },
                fiCommons: {
                    100: "#FFFFFF", // White
                },
            },
        },
    },
    plugins: [flowbite.plugin(), require("@tailwindcss/forms")],
};
export default config;
