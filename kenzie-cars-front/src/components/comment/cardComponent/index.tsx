import { useState } from "react";
import TagUserInitials from "../../tagInitials";
import { StyledCardComment } from "./style";
import { BsTrash, BsPencil } from "react-icons/bs";
import ModalUpdateComment from "../../modals/modalUpdateComment/index";
interface IPropsCardComment {
  idComment: string;
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
  idComment,
  firstName,
  lastName,
  updateAt,
  text,
  idUser,
}: IPropsCardComment) => {
  const days = getTimeElapsed(updateAt);

  const [editModal, setEditModal] = useState<boolean>(false);
  const handleModalDelete = () => {
    alert("wait");
  };
  const handleModalUpdate = (commentId: string) => {
    if (editModal === false) {
      setEditModal(true);
      localStorage.setItem("idComment", commentId);
    }
    if (editModal === true) {
      setEditModal(false);
    }
  };

  const userId = localStorage.getItem("id");

  return (
    <>
      {editModal && (
        <ModalUpdateComment
          handleModalUpdate={() => handleModalUpdate(idComment)}
          commentId={idComment}
          commentContent={text}
        />
      )}
      <StyledCardComment>
        <div className="div-user">
          <div className="div-info">
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
          <div>
            {userId == idUser ? (
              <div className="div-deleteUpdate">
                <BsPencil onClick={() => handleModalUpdate(idComment)} />{" "}
              </div>
            ) : null}
          </div>
        </div>
        <p>{text}</p>
      </StyledCardComment>
    </>
  );
};

export default CardComment;
