import BannerBudgetRequest from "@/components/BannerBudgetRequest";
import HomeHero from "@/components/header/HomeHero";
import HomeHig from "@/components/HomeHIG";

export default function Home() {
    // const t = useTranslations("Index");
    return (
        <main>
            <HomeHero />
            <HomeHig />
            <BannerBudgetRequest />

            {/* <CldImage
                width="960"
                height="600"
                src="sample"
                sizes="100vw"
                alt="Description of my image"
                priority
                className="w-auto h-auto"
            /> */}
        </main>
    );
}
