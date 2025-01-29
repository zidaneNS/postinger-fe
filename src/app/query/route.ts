import { NextResponse } from "next/server";
import { getPosts } from "../lib/data";

export async function GET() {
    const result = await getPosts();
    return NextResponse.json(result);
}