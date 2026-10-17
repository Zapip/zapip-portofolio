import HomePage from "@/common/modules/home";


export const metadata = {
    title: "Zafif Hilmi",
    description: "Portfolio of M. Zafif Hilmi Al-Hadi — a full-stack developer building digital solutions that make an impact.",
};

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return (
        <HomePage />
    );
}