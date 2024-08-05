import { NextIntlClientProvider, useMessages } from "next-intl";
import { cookies } from "next/headers";
import { ThemeModeScript } from "flowbite-react";
import { InitFlowbite } from "@/lib/flowbite-client";

import HeaderParent from "@/components/HeaderParent";
import { fiCenturyRegular } from "@/utils/fonts";
import "../globals.css";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children, params: { locale } }) {
    const messages = useMessages();

    // Check cookies Newsletter Modal
    const cookieStore = cookies();
    const checkCookieFiNwModal = cookieStore.get("fiNwModal");

    return (
        <html lang={locale}>
            <head>
                <ThemeModeScript />
            </head>
            <body className={fiCenturyRegular.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <div className="flex flex-col min-h-screen w-full items-start justify-start m-0 p-0">
                        <div className="sticky top-0 z-50 w-full">
                            <HeaderParent />
                        </div>
                        {children}
                        <InitFlowbite />
                        {/* {checkCookieFiNwModal == undefined ? (
                            console.log("not found")
                        ) : (
                            <p>{locale}</p>
                        )} */}
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
