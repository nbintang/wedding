import axios from "axios";

export const sendContactForm = async (
  username: string,
  messages: string,
  assignment: string
) => {
try {
    const response = await axios.post("/api/contact", {
        username,
        messages,
        assignment,
      },{
        headers:{
            "Content-Type": "application/json",
        }
      });

    console.log(response.data);
    
} catch (error) {
    console.log(error);
    
}
};
