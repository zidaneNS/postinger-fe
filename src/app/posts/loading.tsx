export default function Loading() {
    return (
        <main className="h-[150%] flex flex-col gap-y-8 px-4 py-6 md:py-8 md:px-24 items-center animate-pulse">
            <section className="hidden md:flex gap-x-8 gap-y-8 items-center justify-center">
                <div className="h-36 w-48 md:h-48 md:w-56 bg-violet-300 rounded-lg"></div>
                <div className="h-36 w-48 md:h-48 md:w-56 bg-violet-300 rounded-lg"></div>
                <div className="h-36 w-48 md:h-48 md:w-56 bg-violet-300 rounded-lg"></div>
            </section>
            <div className="w-full h-16 bg-violet-300 rounded-xl py-2 px-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full overflow-y-auto gap-y-4 max-h-full place-items-center">
                <div className="h-36 w-64 rounded-lg bg-violet-300"></div>
                <div className="h-36 w-64 rounded-lg bg-violet-300"></div>
                <div className="h-36 w-64 rounded-lg bg-violet-300"></div>
                <div className="h-36 w-64 rounded-lg bg-violet-300"></div>
                <div className="h-36 w-64 rounded-lg bg-violet-300"></div>
                <div className="h-36 w-64 rounded-lg bg-violet-300"></div>
                <div className="h-36 w-64 rounded-lg bg-violet-300"></div>
                <div className="h-36 w-64 rounded-lg bg-violet-300"></div>
                <div className="h-36 w-64 rounded-lg bg-violet-300"></div>
            </div>
        </main>
    )
}