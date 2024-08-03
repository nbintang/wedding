export async function getComment() {
  try {
    const res = await fetch("http://localhost:3000/api/contact", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
  } catch (error) {
    console.log(error);
  }
}
