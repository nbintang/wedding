import { getComment } from "@/lib/comment";
import Comment from "./Comment";

interface CommentProps {
  id: number;
  username: string;
  messages: string;
  createdAt: string;
}

export default async function CommentSections() {
  const data = await getComment();
  const latestComment = [...data.data].reverse();

  return (
    <div className="w-full shadow  md:max-w-3xl max-w-sm border-cream-900 border-2  bg-cream-100 p-3 rounded-md">
      {latestComment &&latestComment.length > 0 ? (
        latestComment.map(
          ({ id, username, messages, createdAt }: CommentProps) => (
            
              <Comment
                key={id}
                id={id}
                username={username}
                messages={messages}
                createdAt={createdAt}
              />
            
          )
        )
      ) :(
        <p className="text-cream-900 text-center text-xl">--Tidak Ada Komentar--</p>
        )}
    </div>
  );
}
