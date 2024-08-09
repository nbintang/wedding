import { useState, useEffect, Suspense } from "react";
import { SendForm } from "./Form";
import CommentSections from "./Comment/CommentSections";
import LineTitle from "../fragments/LineTitle";
import { getComment } from "@/lib/comment";
import { CommentProps } from "@/types/CommentSchemas";

export default function Contact() {
  const [comments, setComments] = useState<CommentProps[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getComment();
      setComments([...data.data].reverse());
    })();
  }, []);

  return (
    <>
      <div
        id="contact"
        className="  gap-5 py-10 grid place-items-center"
      >
        <LineTitle>
          <h1 className="text-cream-900 text-center text-4xl font-semibold">
            Konfirmasi Kehadiran
          </h1>
        </LineTitle>
        <div className="flex flex-col items-center w-full gap-3">
          <SendForm setComments={setComments} />
        </div>
      </div>
      <Suspense
        fallback={
          <div className="w-16 h-16 border-8 border-cream-900 rounded-full animate-spin border-t-transparent"></div>
        }
      >
        <CommentSections comments={comments} />
      </Suspense>
    </>
  );
}
