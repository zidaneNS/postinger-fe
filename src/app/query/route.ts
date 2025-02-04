import { NextResponse } from "next/server";
import { getPost, getPosts } from "../lib/data";

export async function GET() {
    const result = await getPosts('qu');
    return NextResponse.json(result);
}