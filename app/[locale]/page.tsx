import Button from "@/common/components/elements/Button";
import Card from "@/common/components/elements/Card";
import Container from "@/common/components/elements/Container";

export const metadata = {
    title: "Zafif Hilmi",
    description: "A simple Next.js 13 project with TypeScript, TailwindCSS and i18n support.",
};

export default function Page() {
    return (
        <Container>
            <section className=" flex items-end justify-between text-left w-full">
                <section className="flex flex-col gap-2">
                    <span>Open to work</span>
                    <h1>
                        Building things that
                        make sense.
                    </h1>
                </section>
                <p>
                    Im a passionate developer who loves to create innovative solutions.
                </p>
            </section>
            <h1 className="max-w-2xl text-center font-space-grotesk text-3xl">
                <Card>
                    Zapip Portofolio
                </Card>
                lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod adipisci, ad a soluta, ipsam odio repellat eius dolore molestiae explicabo harum dicta quisquam sequi ullam rerum atque modi! Sit?
                lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod adipisci, ad a soluta, ipsam odio repellat eius dolore molestiae explicabo harum dicta quisquam sequi ullam rerum atque modi! Sit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod adipisci, ad a soluta, ipsam odio repellat eius dolore molestiae explicabo harum dicta quisquam sequi ullam rerum atque modi! Sit?
            </h1>
            <Button>
                Click Me
            </Button>
        </Container>
    );
}