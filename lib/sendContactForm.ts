export const sendContactForm = async (
  username: string,
  messages: string,
  assignment: string
) => {
  try {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, messages, assignment }),
      cache: "no-store",
    });
  } catch (error) {
    console.log(error);
  }
};
