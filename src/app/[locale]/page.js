import HomeHero from "@/components/header/HomeHero";

export default function Home() {
    // const t = useTranslations("Index");
    return (
        <main className="flex w-full">
            <HomeHero />

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
