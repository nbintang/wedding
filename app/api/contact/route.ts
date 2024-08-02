import { mailOptions, transporter } from "@/config/nodemailer";
import { prisma } from "@/config/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { username, messages, assignment } = await req.json(); // Parse the JSON body
    
    if (!username || !messages || !assignment) {
      return NextResponse.json({
        success: false,
        message: "Request failed! All fields are required.",
      });
    }

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
      status: 200,
      success: true,
      message: "Message sent!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while processing your request.",
    });
  }
}

export async function GET(req: NextRequest) {
  try {
    const data = await prisma.user.findMany();
    console.log(data);
    return NextResponse.json({
      success: true,
      message: "Data retrieved successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while retrieving data.",
    });
  }
}
