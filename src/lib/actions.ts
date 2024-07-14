"use server";

export type Status = {
    type: "default" | "loading" | "success" | "error";
};

export async function postForm(previousState: Status, formData: FormData) {
    // simulate server response time (2s)
    await new Promise((res) => setTimeout(res, 2000));

    if (
        formData.get("horseColor")?.toString().toLocaleUpperCase() ===
        "White".toLocaleUpperCase()
    ) {
        previousState.type = "success";
    } else {
        previousState.type = "error";
    }

    return previousState;
}
