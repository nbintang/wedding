"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import useFormContact from "@/lib/hooks/useFormContact";
import { CommentProps } from "@/types/CommentSchemas";

export function SendForm({ setComments }: {
  setComments: React.Dispatch<React.SetStateAction<CommentProps[]>>;
}) {
  const { form, onSubmit, isLoading } = useFormContact(setComments);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex  flex-col min-w-full gap-4 p-4 shadow-md  bg-cream-900 rounded-md"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-cream-100 text-xl">Nama</FormLabel>
              <FormDescription className="text-cream-300 text-sm">
                Masukkan Nama anda
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="Masukkan Nama"
                  className="placeholder:text-cream-900 bg-cream-100"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="messages"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-cream-100 text-xl">Pesan</FormLabel>
              <FormDescription className="text-cream-300 text-sm">
                Pesan dan doa untuk kedua pengantin
              </FormDescription>
              <FormControl>
                <Textarea
                  placeholder="Kirim pesan yang ingin disampaikan"
                  className="placeholder:text-cream-900 h-32 bg-cream-100"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="assignment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-cream-100 text-xl">Kehadiran</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-cream-900 placeholder:text-cream-900">
                      <SelectValue
                        placeholder="Pilih Kehadiran"
                        className="text-cream-900 placeholder:text-cream-900 bg-cream-100"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="placeholder:text-cream-900 text-cream-900 bg-cream-100">
                    <SelectItem
                      value="Hadir dalam acara"
                      className="cursor-pointer bg-cream-100"
                    >
                      Hadir
                    </SelectItem>
                    <SelectItem
                      value="Tidak Hadir dalam acara"
                      className="cursor-pointer bg-cream-100"
                    >
                      Tidak Hadir
                    </SelectItem>
                    <SelectItem
                      value="Mungkin Hadir"
                      className="cursor-pointer bg-cream-100"
                    >
                      Mungkin Hadir
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className={`bg-cream-700 mt-7 text-cream-100 hover:bg-cream-700/80 ${
            isLoading && "bg-cream-700/80"
          }`}
        >
          {isLoading ? (
            <span className="flex items-center gap-3"><div className="w-5 h-5 border-2 border-cream-900 rounded-full animate-spin border-t-transparent"></div> <p className="text-cream-900 text-sm">Memuat...</p></span>
          ) : (
            "Kirim"
          )}
        </Button>
      </form>
    </Form>
  );
}
