import { StyledComment, StyledSection } from "./style";
import CardComment from "./cardComponent";
import InputBoxComment from "./inputBoxComment";
import { useEffect } from "react";

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

const Comments = ({ comments }: any) => {
  return (
    <StyledSection>
      <StyledComment>
        <h3>Comentários</h3>
        <ul>
          {comments &&
            comments.map((comment: any, index: any) => (
              <CardComment
                key={index}
                firstName={comment.user.firstname}
                lastName={comment.user.lastname}
                text={comment.text}
                updateAt={comment.updatedAt}
                idUser={comment.user.id}
              />
            ))}
        </ul>
      </StyledComment>

      <InputBoxComment />
    </StyledSection>
  );
};

export default Comments;
