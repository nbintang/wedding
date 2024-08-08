import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { sendContactForm } from "@/lib/comment";
import { CommentProps} from "@/types/CommentSchemas";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "nama harus lebih dari 5 karakter",
  }),
  messages: z
    .string()
    .min(10, {
      message: "Pesan harus minimal 10 karakter",
    })
    .max(500, { message: "Pesan harus maksimal 500 karakter" }),
  assignment: z.string().min(1, { message: "Pilih Kehadiran anda" }),
});

const useFormContact = (setComments: React.Dispatch<React.SetStateAction<CommentProps[]>>) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      messages: "",
      assignment: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await sendContactForm(
        values.username,
        values.messages,
        values.assignment
      );
      toast({
        variant: "default",
        title: "Pesan Terkirim",
        description:
          "Terimakasih sudah memberikan pesan, pesan akan di lihat oleh kedua pengantin.",
      });

      setComments((prevComments : any) => [
        {
          id: prevComments.length + 1,
          username: values.username,
          messages: values.messages,
          createdAt: new Date().toISOString(),
        },
        ...prevComments,
      ]);

      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Gagal Mengirim Pesan",
        description: "Terjadi kesalahan pada server, silahkan coba kembali.",
      });
      console.error("Error sending contact form:", error);
    }
    setIsLoading(false);
  }

  return { form, onSubmit, isLoading };
};

export default useFormContact;
