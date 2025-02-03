'use client';

import { PostType } from "@/app/lib/definition";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";
import Link from "next/link";

export default function HighLightPost({ post }: { post: PostType }) {
    return (
        <div className="py-2 h-full px-4 bg-white shadow-lg rounded-lg flex flex-col gap-y-3">
            <h1 className="text-violet-500 text-xl font-bold">{post.title}</h1>
            <h2 className="text-lg text-slate-400">{post.author} | {format(post.date, "yyyy-MM-dd HH:mm:ss")}</h2>
            <p className="text-sm font-bold">{post.body.length > 80 ? post.body.slice(0,80) + "..." : post.body}</p>
            <div className="mt-auto flex gap-x-2 w-fit rounded-lg p-1 cursor-pointer hover:p-2 duration-300 hover:bg-violet-500 group hover:text-white items-center shadow">
                <ChevronDownIcon className="w-6" />
                <Link href={`posts/${post.id}`} className="text-sm text-slate-600 group-hover:text-white duration-300">View More</Link>
            </div>
        </div>
    )
}