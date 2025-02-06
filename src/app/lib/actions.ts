'use server';

import { AxiosError } from "axios";
import api from "./api";
import { LoginFormState, RegisterFormState, SignInFormSchema, SignUpFormSchema } from "./definition";

export async function login(prevState: LoginFormState, formData: FormData) {
    const validatedFields = SignInFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    });

    if (!validatedFields.success) return { errors: validatedFields.error.flatten().fieldErrors }

    const { email, password } = validatedFields.data;
    
    try {
        const response = await api.post('/auth/login', JSON.stringify({ email, password }), {
            headers: {
                'Content-Type': 'application/json'
            }
        });

    } catch (err) {
        if (err instanceof AxiosError) {
            console.log(err.status)
        }
        return { message: 'Login Failed' };
    }
}

export async function register(prevState: RegisterFormState, formData: FormData) {
    const validatedFields = SignUpFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    });

    if (!validatedFields.success) return { errors: validatedFields.error.flatten().fieldErrors }
}