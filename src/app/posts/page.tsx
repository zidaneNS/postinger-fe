import { getPosts } from "../lib/data";
import { PostType } from "../lib/definition";
import Carousel from "../ui/posts/Carousel";
import HighLightPost from "../ui/posts/HighLightPost";
import MobileCarousel from "../ui/posts/MobileCarousel";
import Search from "../ui/posts/Search";

export default async function Page({ searchParams }: { searchParams: Promise<{ search: string }>}) {
    const search = (await searchParams).search;
    const posts: PostType[] = await getPosts(search) || [];
    const fetchLatestPosts: PostType[] = await getPosts() || [];
    const latestPosts: PostType[] = fetchLatestPosts.slice(0,3);
    return (
        <main className="h-full flex flex-col gap-y-8 px-4 py-6 md:py-8 md:px-24 items-center">
            <section className="hidden md:flex gap-x-8 gap-y-8 items-center justify-center">
                {latestPosts.map(post => (
                    <HighLightPost key={post.id} post={post} />
                ))}
            </section>
            <Search />
            <Carousel posts={posts} />
            <MobileCarousel posts={posts} />
        </main>
    )
}