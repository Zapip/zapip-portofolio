export const metadata = {
    title: "About Page",
    description: "A simple Next.js 13 project with TypeScript, TailwindCSS and i18n support.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6 p-6">
            <h1 className="max-w-2xl text-center font-space-grotesk text-3xl">
                About Page
            </h1>
        </div>
    );
}