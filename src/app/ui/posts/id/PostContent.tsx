'use client';

import { PostType } from "@/app/lib/definition";
import { format } from "date-fns";

export default function PostContent({ post } : { post: PostType }) {
    return (
        <div className="min-h-32 max-h-full flex flex-col gap-y-4 mt-8 m-2 md:m-12 bg-white rounded-lg p-4 md:p-8">
            <h1 className="text-xl md:text-4xl font-bold text-violet-500">{post.title}</h1>
            <h2 className="text-sm md:text-base text-slate-400">{post.author}| {format(post.date, "yyyy-MM-dd HH:mm:ss")}</h2>
            <p className="text-sm font-bold">{post.body}</p>
        </div>
    )
}