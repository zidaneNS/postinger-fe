'use client';

import { PostType } from "@/app/lib/definition";
import PostCard from "./PostCard";
import { useState } from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

export default function Carousel({ posts }: { posts: PostType[]}) {
    const [page, setPage] = useState<number>(0);
    const handlePrev = () => {
        if (page > 0) setPage(page-1);
    }
    const handleNext = () => {
        if (page < (posts.length/9) - 1) setPage(page+1);
    }
    const currentPosts = posts.slice(page * 9, (page * 9) + 9);
    return (
        <div className="hidden md:flex gap-x-2 items-center w-full">
            <ChevronDoubleLeftIcon onClick={() => handlePrev()} className={`p-2 rounded-full ${page === 0 ? "bg-violet-400" : "bg-violet-500"} hover:bg-violet-400 text-white text-sm font-bold duration-300 w-10 cursor-pointer`}>Prev</ChevronDoubleLeftIcon>
            <div className="hidden md:grid grid-cols-3 pb-6 w-full gap-4 place-items-center">
                {currentPosts.map((post, id) => (
                    <PostCard key={id} post={post} />
                ))}
            </div>
            <ChevronDoubleRightIcon onClick={() => handleNext()} className={`p-2 rounded-full ${page >= (posts.length/9) - 1 ? "bg-violet-400" : "bg-violet-500"} hover:bg-violet-400 text-white text-sm font-bold duration-300 w-10 cursor-pointer`}>Next</ChevronDoubleRightIcon>
        </div>
    )
}