"use client";

import { initFlowbite } from "flowbite";
import { useEffect } from "react";

export function InitFlowbite() {
    useEffect(() => {
        initFlowbite();
    }, []);

    return null;
}
