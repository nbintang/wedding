import React from 'react'

interface CommentProps {
    id: number;
    username: string;
    messages: string;
    createdAt: string;
}
const Comment = ({
  id,
  username,
  messages,
 
  createdAt,
}: CommentProps) => {
  return (
    <div
    key={id}
    className="flex flex-col my-3 border-b border-cream-900 "
  >
    <div className="flex justify-between items-center">
      <p className="text-cream-100 bg-cream-900 text-base  px-3  rounded ">
        {username}
      </p>
      <p className="text-cream-900 text-xs ml-6">
        {new Date(createdAt).toLocaleDateString()}
      </p>
    </div>
    <p className="text-cream-900 text-base ml-6 mb-5 mt-2">
      {messages}
    </p>
  </div>
  )
}

export default Comment