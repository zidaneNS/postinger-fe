import HighLightPost from "../ui/posts/HighLightPost";
import PostCard from "../ui/posts/PostCard";
import Search from "../ui/posts/Search";

export default function Page() {
    return (
        <main className="h-full flex flex-col gap-y-8 px-4 py-6 md:py-8 md:px-24 items-center">
            <section className="hidden md:flex gap-x-8 gap-y-8 items-center justify-center">
                <HighLightPost />
                <HighLightPost />
                <HighLightPost />
            </section>
            <Search />
            <div className="hidden md:grid grid-cols-3 pb-6 w-full gap-4 place-items-center">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <div className="grid md:hidden grid-cols-1 pb-6 w-full gap-y-4 place-items-center">
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </main>
    )
}