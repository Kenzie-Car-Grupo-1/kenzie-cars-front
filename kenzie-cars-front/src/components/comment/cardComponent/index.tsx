import TagUserInitials from "../../tagInitials";
import { StyledCardComment } from "./style";

interface IPropsCardComment {
  firstName: string;
  lastName: string;
  updateAt: Date;
  text: string;
  idUser: string;
}

const getTimeElapsed = (date: Date) => {
  const dateInMilliseconds = new Date(date).getTime();
  const differenceInMilliseconds = Date.now() - dateInMilliseconds;

  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const differenceInMonths = Math.floor(differenceInDays / 30);
  const differenceInYears = Math.floor(differenceInMonths / 12);

  if (differenceInDays < 30) {
    return `${differenceInDays} ${differenceInDays === 1 ? "dia" : "dias"}`;
  } else if (differenceInMonths < 12) {
    return `${differenceInMonths} ${
      differenceInMonths === 1 ? "mês" : "meses"
    }`;
  } else {
    return `${differenceInYears} ${differenceInYears === 1 ? "ano" : "anos"}`;
  }
};

const CardComment = ({
  firstName,
  lastName,
  updateAt,
  text,
  idUser,
}: IPropsCardComment) => {
  const days = getTimeElapsed(updateAt);

  return (
    <StyledCardComment>
      <div className="div-user">
        <TagUserInitials
          firstName={firstName}
          lastName={lastName}
          uuid={idUser}
        />

        <p className="user-fullname">
          {`${firstName} ${lastName} `}
          <span>{`• `}</span>
          <span>{`há ${days}`}</span>
        </p>
      </div>
      <p>{text}</p>
    </StyledCardComment>
  );
};

export default CardComment;
