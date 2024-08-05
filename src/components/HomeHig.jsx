import { FISectionBkgd } from "@/ux";
import Image from "next/image";

export default function HomeHig() {
    //TODO: non si visualiza la imagen de bkg. Hot Refresh es il problema?
    return (
        // <div className="relative flex w-full p-16 z-10 -mt-5 rounded-t-[22px]">
        //     <div
        //         className={
        //             "absolute top-0 left-0 w-full h-full " + `${imgBkg(4)}`
        //         }
        //     />
        //     {/* <div className="flex justify-center items-center -mt-5">
        //         <button className="rounded-full bg-slate-100 w-28 h-5" />
        //     </div> */}
        //     <h1>Sono il HIG</h1>
        // </div>
        <FISectionBkgd type={3} isSquared={true}>
            {/* <div className="flex justify-center items-center -mt-5">
                <button className="rounded-full bg-slate-100 w-28 h-5" />
            </div> */}
            <h1>Sono il HIG Hispano</h1>
        </FISectionBkgd>
    );
}
