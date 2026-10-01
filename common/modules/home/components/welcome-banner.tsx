
export default function WelcomeBanner() {
    return (
        <section className="flex flex-col sm:flex-row sm:items-end justify-between text-left w-full">
            <section className="flex flex-col gap-2">
                <h2 className="flex items-center justify-start border py-2 px-4 rounded-xl size-fit">
                    <span className="size-2 animate-ping rounded bg-lime mr-2"/>
                    Open to work</h2>
                <h1 className="text-4xl sm:text-7xl font-bold">
                    Building things that
                    make sense.
                </h1>
            </section>
            <p>
                Im a passionate developer who loves to create innovative solutions.
            </p>
        </section>)

}