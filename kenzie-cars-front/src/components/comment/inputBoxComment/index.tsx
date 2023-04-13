import Button from "../../Button";
import Input from "../../input";
import TagUserInitials from "../../tagInitials";
import { StyledInputBoxComment } from "./style";

const InputBoxComment = () => {
  return (
    <StyledInputBoxComment>
      <div className="div-user">
        <TagUserInitials firstName="Samuel" lastName="Leão" uuid="6" />
        <p className="user-fullname">{`Samuel Leão`}</p>
      </div>
      <form className="div-input">
        <textarea placeholder="Digite aqui ..." />
        <Button buttonSize="medium">Comentar</Button>
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
  );
};

export default InputBoxComment;
