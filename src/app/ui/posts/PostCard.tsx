import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function PostCard() {
    return (
        <div className="h-full py-2 px-4 w-full rounded-lg bg-white shadow-lg flex flex-col gap-3">
            <h1 className="text-violet-500 text-lg md:text-xl font-bold">Post Title</h1>
            <h2 className="text-base md:text-lg text-slate-400">Author | 2025-01-23 12:43:11</h2>
            <p className="text-sm font-bold">Lorem ipsum dolor sit amet.</p>
            <div className="mt-auto flex gap-x-2 w-fit rounded-lg p-1 cursor-pointer hover:p-2 duration-300 hover:bg-violet-500 group hover:text-white items-center shadow">
                <ChevronDownIcon className="w-6" />
                <p className="text-sm text-slate-600 group-hover:text-white duration-300">View More</p>
            </div>
        </div>
    )
}