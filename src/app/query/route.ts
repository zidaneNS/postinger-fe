import { NextResponse } from "next/server";
import getUser from "../lib/data";

export async function GET() {
    await getUser();
    return NextResponse.json({ message: 'Hello World'});
}