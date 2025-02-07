'use server';

import { AxiosError } from "axios";
import api from "./api";
import { LoginFormState, RegisterFormState, SessionPayload, SignInFormSchema, SignUpFormSchema } from "./definition";
import { createSession, decrypt, deleteSession } from "./session";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

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
        
        const { token, user } = response.data as SessionPayload;

        await createSession(user, token);
          
    } catch (err) {
        if (err instanceof AxiosError) {
            console.log(err.status)
        }
        console.error(err);
        return { message: 'Login Failed' };
    }

    return redirect('/posts');
}

export async function register(prevState: RegisterFormState, formData: FormData) {
    const validatedFields = SignUpFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    });

    if (!validatedFields.success) return { errors: validatedFields.error.flatten().fieldErrors }

    const { name, email, password, password_confirmation } = validatedFields.data;

    try {
        await api.post('/auth/register', JSON.stringify({ name, email, password, password_confirmation }), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        console.error(err);
        if (err instanceof AxiosError) {
            console.log('register failed :',err.status);
        }

        return { message: 'register failed' };
    }

    return redirect('/auth/login');
}

export async function logout() {
    const session = (await cookies()).get('session')?.value;
    const payload = await decrypt(session);
    
    if (!payload) return redirect('/');

    const { token } = payload;

    try {
        await api.post('/auth/logout', null, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        await deleteSession();
    } catch (err) {
        console.error(err);
        if (err instanceof AxiosError) {
            console.log('logout failed', err.status);
        }
        return { message: 'Logout Failed' };
    }

    return redirect('/');
}