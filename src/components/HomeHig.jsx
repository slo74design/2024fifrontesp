import { FISectionBkgd } from "@/ux";
import Image from "next/image";

export default function HomeHig() {
    const imgBkg = (type) => {
        switch (type) {
            case 1:
                return "bg-white";
                break;
            case 2:
                return "bg-slate-50";
                break;
            case 3:
                return "bg-red-pattern";
                break;
            case 4:
                return "bg-triangle-pattern";
                break;
            case 5:
                return "bg-gradient-to-tr from-black from-2% via-fiLight-500 to-fiLight-300 to-100%";
                break;
        }
    };
    //TODO: non si visualiza la imagen de bkg. Hot Refresh es il problema?
    return (
        <div className="relative flex w-full p-16 z-10 -mt-5 rounded-t-[22px]">
            <div
                className={
                    "absolute top-0 left-0 w-full h-full " + `${imgBkg(4)}`
                }
            />
            {/* <div className="flex justify-center items-center -mt-5">
                <button className="rounded-full bg-slate-100 w-28 h-5" />
            </div> */}
            <h1>Sono il HIG</h1>
        </div>
    );
}
