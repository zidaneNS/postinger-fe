import PostCardWide from "@/app/ui/posts/user/PostCardWide";

export default async function Page() {
    return (
        <main className="px-4 py-6 md:py-8 md:px-24 grid grid-cols-1 gap-y-4 max-h-full overflow-y-1">
            <PostCardWide />
            <PostCardWide />
            <PostCardWide />
            <PostCardWide />
        </main>
    )
}