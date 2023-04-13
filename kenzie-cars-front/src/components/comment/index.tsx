import { StyledComment } from "./style";
import CardComment from "./cardComponent";
import InputBoxComment from "./inputBoxComment";

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

const Comments = ({ comments }: CommentsProps) => {
  return (
    <>
      <StyledComment>
        <h3>Comentários</h3>
        <ul>
          {comments.map((comment, index) => (
            <CardComment
              firstName={comment.user.firstName}
              lastName={comment.user.lastName}
              text={comment.text}
              updateAt={comment.updatedAt}
              idUser={comment.user.id}
            />
          ))}
        </ul>
      </StyledComment>

      <InputBoxComment />
    </>
  );
};

export default Comments;
