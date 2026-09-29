'use client'
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6">
            <h1 className="font-space-grotesk text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod adipisci, ad a soluta, ipsam odio repellat eius dolore molestiae explicabo harum dicta quisquam sequi ullam rerum atque modi! Sit?</h1>
            <Link href="/en" className="font-dm-sans">English</Link>
            <Link href="/id" className="font-dm-sans">Indonesia</Link>
        </div>
    )
}