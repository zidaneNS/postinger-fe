import 'server-only';
import { cookies } from "next/headers";
import { decrypt } from "./session";
import { redirect } from "next/navigation";
import { UserType } from "./definition";

export async function isAuth(): Promise<boolean> {
    const session = (await cookies()).get('session')?.value;
    const payload = await decrypt(session);

    if (!payload?.token) {
        return false;
    }

    return true;
}

export async function getUser(): Promise<UserType | undefined> {
    const session = (await cookies()).get('session')?.value;
    const payload = await decrypt(session);

    const { user } = payload!;

    return user;
}