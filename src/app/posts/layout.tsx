import Navbar from "../ui/posts/Navbar";

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <div className="h-screen flex flex-col bg-violet-200 text-slate-700">
            <Navbar />
            <div className="h-full w-full flex flex-col gap-y-4 overflow-auto">
                {children}
            </div>
        </div>
    )
}