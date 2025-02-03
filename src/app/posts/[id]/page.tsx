import { getPost } from "@/app/lib/data";
import ButtonGroup from "@/app/ui/posts/id/ButtonGroup";
import PostContent from "@/app/ui/posts/id/PostContent";

export default async function Page({ params }: { params: Promise<{ id: string }>}) {
    const id =(await params).id;
    const post = await getPost(id);
    if (!post) {
        return <div>Post not found</div>
    }

    return (
        <main className="flex flex-col h-full">
            <PostContent post={post} />
            <ButtonGroup />
        </main>
    )
}