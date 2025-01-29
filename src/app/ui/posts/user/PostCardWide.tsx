import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function PostCardWide() {
    return (
        <div className="bg-white shadow-lg w-full rounded-lg flex flex-col gap-y-3 py-2 px-4">
            <h1 className="text-lg md:text-xl font-bold text-violet-500">Post Title</h1>
            <h2 className="text-base md:text-lg text-slate-400">Author | yyyy-MM-dd HH:mm:ss</h2>
            <p className="text-sm font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente?</p>
            <div className="mt-auto flex gap-x-2 w-fit rounded-lg p-1 cursor-pointer hover:p-2 duration-300 hover:bg-violet-500 group hover:text-white items-center shadow">
                <ChevronDownIcon className="w-6" />
                <p className="text-sm text-slate-600 group-hover:text-white duration-300">View More</p>
            </div>
        </div>
    )
}