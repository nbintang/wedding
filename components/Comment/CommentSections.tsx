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
    <div className="w-full shadow-md  md:max-w-3xl max-w-sm   bg-cream-100 p-3 rounded-md">
      {latestComment.map(
        ({ id, username, messages, createdAt }: CommentProps) => (
          
            <Comment
              key={id}
              id={id}
              username={username}
              messages={messages}
              createdAt={createdAt}
            />
          
        )
      )}
    </div>
  );
}
