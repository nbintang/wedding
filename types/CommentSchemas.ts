export interface CommentProps {
    id: number;
    username: string;
    messages: string;
    createdAt: string;
  }
  
export  interface CommentSectionsProps {
   comments: CommentProps[];
  }