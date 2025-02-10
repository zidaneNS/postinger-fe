import { NextResponse } from "next/server";
import { getPost, getPosts } from "../lib/data";
import { updateSession } from "../lib/session";
import { logout } from "../lib/actions";
import { getUser } from "../lib/dal";

export async function GET() {
    const result = await logout();
    return NextResponse.json(result);
}