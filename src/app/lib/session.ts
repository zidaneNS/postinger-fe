import 'server-only';
import { SessionPayload, UserType } from './definition';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const secretKey = process.env.SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload)
        .setExpirationTime('7d')
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .sign(encodedKey)
}

export async function decrypt(session: string | undefined = ''): Promise<SessionPayload | undefined> {
    try {
        const { payload } = await jwtVerify(session, encodedKey, { algorithms: ['HS256'] });
        return payload as SessionPayload;
    } catch (err) {
        console.log('error decrypt :', err);
    }
}

export async function createSession(token: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 3600 * 1000);
    const session = await encrypt({ token, expiresAt });
    const cookieStore = await cookies();

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/'
    })
}

export async function updateSession() {
    const session = (await cookies()).get('session')?.value;
    const payload = await decrypt(session);
    
    if (!session || !payload) return null;

    const expires = new Date(Date.now() + 7 * 24 * 3600 * 1000);

    const cookieStore = await cookies();

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires,
        sameSite: 'lax',
        path: '/'
    })
}

export async function deleteSession() {
    const cookieStore = await cookies();
    
    cookieStore.delete('session');
}