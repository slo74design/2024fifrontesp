import localFont from "next/font/local";
import { Inter, Outfit } from "next/font/google";

export const inter = Inter({
    weight: ["200", "300", "400", "500"],
    variable: "--font-content",
    subsets: ["latin"],
    display: "swap",
});

export const outfit = Outfit({
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-headings",
    subsets: ["latin"],
    display: "swap",
});

export const fiCenturyVariable = localFont({
    src: "../../public/fonts/century.woff2",
    display: "swap",
});

export const fiCenturyLight = localFont({
    src: "../../public/fonts/centurylight.woff2",
    display: "swap",
});

export const fiCenturyRegular = localFont({
    src: "../../public/fonts/centuryregular.woff2",
    display: "swap",
});

export const fiCenturySemiBold = localFont({
    src: "../../public/fonts/centurysemibold.woff2",
    display: "swap",
});
