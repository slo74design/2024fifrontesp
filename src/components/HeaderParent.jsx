import MainNavMenu from "./header/MainNavMenu";
import Navbar from "./header/Navbar";
import NavMenuMobile from "./header/NavMenuMobile";
import NewsTopBar from "./header/NewsTopBar";

export default function HeaderParent() {
    return (
        <div className="w-full">
            <div className="block md:hidden">
                <NavMenuMobile />
                <NewsTopBar />
            </div>
            <div className="hidden md:flex md:flex-col md:relative">
                <NewsTopBar />
                <Navbar />
                <MainNavMenu />
            </div>
        </div>
    );
}
