import { NextRequest, NextResponse } from "next/server";
import prisma from "@/config/prisma";
import { mailOptions, transporter } from "@/config/nodemailer";


export async function POST(request: NextRequest) {
  try {
    const { username, messages, assignment } = await request.json();
    await prisma.user.create({
      data: {
        username,
        messages,
        assignment,
      },
    });


    await transporter.sendMail({
      ...mailOptions,
      subject: `Pesan dari ${username} - ${assignment}`,
      text: "test",
      html: `<p>${messages}</p><p>From: ${username}</p>`,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  try {
    const data = await prisma.user.findMany();

    return NextResponse.json({
      data,
    });
  } catch (error) {
    console.log(error);
  }
}
