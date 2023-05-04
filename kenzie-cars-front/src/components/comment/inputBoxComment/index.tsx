import { useEffect } from "react";
import { useUser } from "../../../context/user.context";
import Button from "../../Button";
import Input from "../../input";
import TagUserInitials from "../../tagInitials";
import { StyledInputBoxComment } from "./style";

const InputBoxComment = () => {
  const { user } = useUser();
  useEffect(() => {
    (async () => {})();
  }, []);
  return (
    <>
      {user && (
        <StyledInputBoxComment>
          <div className="div-user">
            {localStorage.token && (
              <>
                <TagUserInitials
                  firstName={user.firstname}
                  lastName={user.lastname}
                  uuid={user.id}
                />
                <p className="user-fullname">{user.firstname}</p>
              </>
            )}
          </div>
          <form className="div-input">
            <textarea placeholder="Digite aqui ..." />
            {localStorage.token ? (
              <Button buttonSize="medium">Comentar</Button>
            ) : (
              <Button buttonSize="medium" disabled>
                Comentar
              </Button>
            )}
            <div className="div-buttons">
              <Button
                buttonSize="medium"
                backgroundColor="var(--grey7)"
                fontColor="#868E96"
                backgroundColorHover="var(--brand2)"
                fontColorHover="white"
              >
                Gostei Muito!
              </Button>
              <Button
                buttonSize="medium"
                backgroundColor="var(--grey7)"
                fontColor="#868E96"
                backgroundColorHover="var(--brand2)"
                fontColorHover="white"
              >
                Incrível!
              </Button>
              <Button
                buttonSize="medium"
                backgroundColor="var(--grey7)"
                fontColor="#868E96"
                backgroundColorHover="var(--brand2)"
                fontColorHover="white"
              >
                Recomendarei para meus amigos!
              </Button>
            </div>
          </form>
        </StyledInputBoxComment>
      )}
    </>
  );
};

export default InputBoxComment;
