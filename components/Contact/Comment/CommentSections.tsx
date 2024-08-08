import Comment from "./Comment";
import { CommentProps, CommentSectionsProps } from "@/types/CommentSchemas";



export default async function CommentSections({
comments
}: CommentSectionsProps) {
  const latestComment = comments
  return (
    <div className="w-full sm:max-w-lg max-w-sm shadow h-[500px] overflow-scroll no-scrollbar min-w-0 border-cream-900 border-2  bg-cream-100 p-3 rounded-md">
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
