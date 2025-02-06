import { z } from "zod"

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

export const SignInFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email' }).trim(),
    password: z.string().min(8).trim()
})

export type LoginFormState = {
    errors?: {
        email?: string[],
        password?: string[]
    },
    message?: string
} | undefined

export const SignUpFormSchema = z.object({
    name: z.string().min(3),
    email: z.string().email({ message: 'Please enter a valid email' }).trim(),
    password: z.string().min(8, { message: 'Password at least 8 letters' }).regex(/[a-zA-Z]/, { message: 'Password must contain at least 1 letter' }).trim(),
    password_confirmation: z.string().trim()
})

export type RegisterFormState = {
    errors?: {
        name?: string[],
        email?: string[],
        password?: string[],
        password_confirmation?: string[]
    },
    message?: string
} | undefined

export type SessionPayload = {
    token: string,
    user: UserType
}