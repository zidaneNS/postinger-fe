import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/lib/session";

const protectedRoutes = ['/posts/user', '/posts/create'];

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtected = protectedRoutes.includes(path);

    const session = (await cookies()).get('session')?.value;
    const payload = await decrypt(session);

    if (isProtected && !payload?.token) return NextResponse.redirect(new URL('/auth/login', req.nextUrl));
}