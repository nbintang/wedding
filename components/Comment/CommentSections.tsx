import { getComment } from "@/lib/getComment";



export default async function CommentSections() {
  const data = await getComment();
  const latestComment = data?.reverse();

  return (
    <div className="w-full shadow-md  md:max-w-3xl max-w-sm   bg-cream-100 p-3 rounded-md">
      {latestComment?.map(
        ({ id, username, messages, createdAt }) => (
          <div
            key={id}
            className="flex flex-col my-3 border-b border-cream-900 "
          >
            <div className="flex justify-between items-center">
              <p className="text-cream-100 bg-cream-900 text-base  px-3  rounded ">
                {username}
              </p>
              <p className="text-cream-900 text-xs ml-6">
                {new Date(createdAt).toLocaleString()}
              </p>
            </div>
            <p className="text-cream-900 text-base ml-6 mb-5 mt-2">
              {messages}
            </p>
          </div>
        )
      )}
    </div>
  );
}
