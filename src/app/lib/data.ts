import api from "./api";
import { PostType, RawPostType } from "./definition";

export async function getUser() {
    const data = await api.get('/');
    console.log('data : ', data.data);
}

export async function getPosts(keyword?: string): Promise<PostType[] | undefined> {
    try {
        const data = await api.get('/posts');
        if (data.status === 200) {
            const result = data.data.posts;
            const posts: PostType[] = result.map((item: RawPostType): PostType => (
                {
                    id: item.id,
                    title: item.title,
                    author: item.user.name,
                    body: item.body,
                    date: new Date(item.updated_at)
                }
            ));

            if (!keyword) return posts;
    
            return posts.filter((post: PostType) => post.title.includes(keyword));
        }
    } catch (err) {
        console.error(err);
    }
}

export async function getPost(id: string | number): Promise<PostType | undefined> {
    try {
        const data = await api.get(`/posts/${id}`);
        if (data.status === 200) {
            const result = data.data.post;
            const post: PostType = {
                id: result.id,
                title: result.title,
                author: result.user.name,
                body: result.body,
                date: new Date(result.updated_at)
            };
    
            return post;
        }
    } catch (err) {
        console.error(err)
    }
}