import { prisma } from "@/config/prisma";

export async function getComment() {
  try {
  const data = await prisma.user.findMany()
  return data
  } catch (error) {
    console.log(error);
  }
}
