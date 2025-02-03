import { NextResponse } from "next/server";
import { getPost } from "../lib/data";

export async function GET() {
    const result = await getPost(1);
    return NextResponse.json(result);
}