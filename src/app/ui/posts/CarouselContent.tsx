import { PostType } from "@/app/lib/definition";
import PostCard from "./PostCard";

export default async function CarouselContent({ currentPosts }: { currentPosts: PostType[] }) {
    return (
        <div className="hidden md:grid grid-cols-3 pb-6 w-full gap-4 place-items-center">
            {currentPosts.map((post, id) => (
                <PostCard key={id} post={post} />
            ))}
        </div>
    )
}