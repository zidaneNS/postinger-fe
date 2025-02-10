import { getUser } from "../lib/dal";
import Navbar from "../ui/posts/Navbar";

export default async function Layout({ children }: { children: React.ReactNode}) {
    const user = await getUser();
    return (
        <div className="h-screen flex flex-col bg-violet-200 text-slate-700">
            <Navbar user={user} />
            <div className="h-full w-full flex flex-col gap-y-4 overflow-auto">
                {children}
            </div>
        </div>
    )
}