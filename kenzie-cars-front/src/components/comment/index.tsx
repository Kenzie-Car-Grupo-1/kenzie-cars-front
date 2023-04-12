import React from "react";

interface Comment {
  text: string;
  createdAt: Date;
  updatedAt: Date;
  postId: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
  };
}

interface CommentsProps {
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <div>
      <h3>Comentários</h3>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{`${comment.user.firstName} ${comment.user.lastName}`}</p>
          <p>{`${comment.createdAt.toLocaleDateString()} às ${comment.createdAt.toLocaleTimeString()}`}</p>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
