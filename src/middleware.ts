import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    //Add locales you want in the app
    locales: ["en", "es"],

    // default locale if no match
    defaultLocale: "es",
    localePrefix: "always",
    // pathnames: {
    //     "/about": {
    //         en: "/about",
    //         es: "/nosotros",
    //     },
    // },
});

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(es|en)/:path*"],
};
