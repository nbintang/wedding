import { revalidatePath } from "next/cache";


export async function getComment() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch comments");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return { data: [] };
  }
}


export const sendContactForm = async (
  username: string,
  messages: string,
  assignment: string
) => {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        messages,
        assignment,
      }),
    });
    revalidatePath("/")
  } catch (error) {
    console.log(error);
  }
};
