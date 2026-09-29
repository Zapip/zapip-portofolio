'use client'
import Link from 'next/link'

export default function Error() {
    return (
        <div className="h-full flex items-center justify-center">
            <h2>Error</h2>
            <p>Something went wrong</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}