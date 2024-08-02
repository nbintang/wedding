import { NextResponse } from "next/server";

export async function GET(res: NextResponse) {
    return NextResponse.json({
        success: true,
        message: 'Message sent!'
    })
}