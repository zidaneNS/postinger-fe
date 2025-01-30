'use client';

import { PostType } from "@/app/lib/definition";
import PostCard from "./PostCard";
import { useState } from "react";

export default function Carousel({ posts }: { posts: PostType[]}) {
    const [page, setPage] = useState<number>(0);
    const handlePrev = () => {
        if (page > 0) setPage(page-1);
    }
    const handleNext = () => {
        if (page < posts.length/9 - 1) setPage(page+1);
    }
    const currentPosts = posts.slice(page*9, page+9);
    return (
        <>
            <div className="flex gap-x-2 items-center">
                <button onClick={() => handlePrev()} className="p-4 rounded-full bg-violet-500 hover:bg-violet-400 text-white text-sm font-bold duration-300">Prev</button>
                <div className="hidden md:grid grid-cols-3 pb-6 w-full gap-4 place-items-center">
                    {currentPosts?.map((post, id) => (
                        <PostCard key={id} post={post} />
                    ))}
                </div>
                <button onClick={() => handleNext()} className="p-4 rounded-full bg-violet-500 hover:bg-violet-400 text-white text-sm font-bold duration-300">Next</button>
            </div>
        </>
    )
}