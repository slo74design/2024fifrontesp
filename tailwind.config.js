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
            colors: {
                "mili-p1": "#000080",
                "mili-p2": "#ff0000",
                "mili-p3": "#ffd700",
                "mili-p4": "#228b22",
                "mili-p5": "#C42021", // color#4
            },
        },
    },
    plugins: [flowbite.plugin()],
};
export default config;
