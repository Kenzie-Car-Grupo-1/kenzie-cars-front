import { StyledCardComment } from "./style";

interface IPropsCardComment {
  firstName: string;
  lastName: string;
  updateAt: Date;
  text: string;
}

const CardComment = ({
  firstName,
  lastName,
  updateAt,
  text,
}: IPropsCardComment) => {

    return (
        <StyledCardComment>
          <div>
            
          </div>
            

        </StyledCardComment>
    )
};

export default CardComment;
