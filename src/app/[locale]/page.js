import BannerBudgetRequest from "@/components/BannerBudgetRequest";
import ClientTestimonials from "@/components/footer/ClientTestimonials";
import HomeHero from "@/components/header/HomeHero";
import HomeHig from "@/components/HomeHig";

export default function Home() {
    // const t = useTranslations("Index");
    return (
        <main className="w-screen">
            <HomeHero />
            <HomeHig />
            <BannerBudgetRequest />
            <ClientTestimonials />
        </main>
    );
}
