"use server";

import { cookies } from "next/headers";

export const cookiesActions = async () => {
    cookies().set(
        {
            name: "name",
            value: "fiNwModal",
            httpOnly: true,
            path: "/",
        },
        { secure: true }
    );
};
