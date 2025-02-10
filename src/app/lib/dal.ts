import 'server-only';
import { cookies } from "next/headers";
import { decrypt } from "./session";
import { redirect } from "next/navigation";
import { UserType } from "./definition";
import api from './api';
import { cache } from 'react';

// export async function verifySession():  {
//     const session = (await cookies()).get('session')?.value;
//     const payload = await decrypt(session);

//     if (!payload?.token) {
//         redirect('/auth/login')
//     }

//     return true;
// }

export const verifySession = cache(async () => {
    const session = (await cookies()).get('session')?.value;
    const payload = await decrypt(session);

    if (!payload?.token) {
        return null
    }

    const { token } = payload;

    return { token }
})

export async function getUser() {
    try {
        const payload = await verifySession();

        if (!payload) return null;

        const { token } = payload;
        const response = await api.get('/user', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data
    } catch (err) {
        console.error(err);
        return { message: 'error' };
    }
}