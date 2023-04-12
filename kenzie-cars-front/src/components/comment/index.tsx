import React from "react";
import { StyledComment } from "./style";

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
      <StyledComment>
        <h3>Comentários</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <div> {/*outra div que seria o card */}
                <p>{`${comment.user.firstName} ${comment.user.lastName}`}</p>
                <p>{`${comment.createdAt.toLocaleDateString()} às ${comment.createdAt.toLocaleTimeString()}`}</p>
                <p>{comment.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </StyledComment>
    );
  };

export default Comments;
