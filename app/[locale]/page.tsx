'use client';
import Link from "next/link";
import IntlToggle from "@/common/components/layouts/IntlToggle";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6 p-6">
            <IntlToggle />
            <h1 className="max-w-2xl text-center font-space-grotesk text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod adipisci, ad a soluta, ipsam odio repellat eius dolore molestiae explicabo harum dicta quisquam sequi ullam rerum atque modi! Sit?
            </h1>
            <div className="flex gap-4 font-dm-sans">
                <Link href="/en" className="underline">English</Link>
                <Link href="/id" className="underline">Indonesia</Link>
            </div>
        </div>
    );
}