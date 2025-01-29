import api from "./api";
import { PostType, RawPostType } from "./definition";

export async function getUser() {
    const data = await api.get('/');
    console.log('data : ', data.data);
}

export async function getPosts(): Promise<PostType[] | undefined> {
    const data = await api.get('/posts');
    if (data.status === 200) {
        const result = data.data.posts;
        const posts: PostType[] = result.map((item: RawPostType): PostType => (
            {
                title: item.title,
                author: item.user.name,
                body: item.body,
                date: item.updated_at
            }
        ));

        return posts;
    }
}