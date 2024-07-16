"use server";

import { ejemploMenu } from "@/data/ejemploMenu";
import { revalidatePath } from "next/cache";

export const searchActions = async (valTxt) => {
    const listMenu = await ejemploMenu;

    const filterMenu = listMenu.filter((d) =>
        d.label.toLowerCase().includes(valTxt.toLowerCase())
    );

    revalidatePath("/");
    return filterMenu;
};
