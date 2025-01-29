import { PostType } from "@/app/lib/definition";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";

export default function PostCard({ post }: { post: PostType }) {
    return (
        <div className="h-full py-2 px-4 w-full rounded-lg bg-white shadow-lg flex flex-col gap-3">
            <h1 className="text-violet-500 text-lg md:text-xl font-bold">{post.title}</h1>
            <h2 className="text-base md:text-lg text-slate-400">{post.author} | {format(post.date, "yyyy-MM-dd HH:mm:ss")}</h2>
            <p className="text-sm font-bold">{post.body}.</p>
            <div className="mt-auto flex gap-x-2 w-fit rounded-lg p-1 cursor-pointer hover:p-2 duration-300 hover:bg-violet-500 group hover:text-white items-center shadow">
                <ChevronDownIcon className="w-6" />
                <p className="text-sm text-slate-600 group-hover:text-white duration-300">View More</p>
            </div>
        </div>
    )
}