import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function HighLightPost() {
    return (
        <div className="py-2 h-full px-4 bg-white shadow-lg rounded-lg flex flex-col gap-y-3">
            <h1 className="text-violet-500 text-xl font-bold">Post Title</h1>
            <h2 className="text-lg text-slate-400">Muhammad Zidane Nur Sya'bani | 2025-01-23 09:29:40</h2>
            <p className="text-sm font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, doloremque.</p>
            <div className="mt-auto flex gap-x-2 w-fit rounded-lg p-1 cursor-pointer hover:p-2 duration-300 hover:bg-violet-500 group hover:text-white items-center shadow">
                <ChevronDownIcon className="w-6" />
                <p className="text-sm text-slate-600 group-hover:text-white duration-300">View More</p>
            </div>
        </div>
    )
}