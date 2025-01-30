export type UserType = {
    id: string | number,
    name: string,
    email: string,
    email_verified_at: Date,
    created_at: Date,
    updated_at: Date
}

export type RawPostType = {
    id: string | number,
    user_id: string | number,
    title: string,
    body: string,
    created_at: Date,
    updated_at: Date,
    user: UserType
}

export type PostType = {
    id: string | number,
    title: string,
    author: string,
    body: string,
    date: Date
}