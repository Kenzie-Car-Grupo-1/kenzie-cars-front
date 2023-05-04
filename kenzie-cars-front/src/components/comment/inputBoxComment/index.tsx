import { useEffect } from "react";
import { useUser } from "../../../context/user.context";
import Button from "../../Button";
import TagUserInitials from "../../tagInitials";
import { StyledInputBoxComment } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema } from "../../../validation/user.validation";
import { useParams } from "react-router-dom";
import { useCars } from "../../../context/cars.context";
import Icons from "../../../service/icons";

const InputBoxComment = () => {
  const { user } = useUser();
  const { CreateComment } = useCars();
  const { carId } = useParams();
  useEffect(() => {
    (async () => {
      console.log(carId);
    })();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(commentSchema),
  });

  const handleComment = (data: any) => {
    CreateComment(data, carId!);
  };

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
          <form className="div-input" onSubmit={handleSubmit(handleComment)}>
            <textarea
              id="text"
              placeholder="Digite aqui ..."
              {...register("text")}
            />
            {localStorage.token ? (
              <Button buttonSize="medium" type="submit">
                Comentar
              </Button>
            ) : (
              <Button buttonSize="medium" disabled>
                Comentar
              </Button>
            )}
            <div className="div-buttons">
              {localStorage.token ? (
                <>
                  <Button
                    buttonSize="medium"
                    backgroundColor="var(--grey7)"
                    fontColor="#868E96"
                    backgroundColorHover="var(--brand2)"
                    fontColorHover="white"
                    onClick={() => handleComment({ text: "Gostei Muito!" })}
                  >
                    Gostei Muito!
                  </Button>
                  <Button
                    buttonSize="medium"
                    backgroundColor="var(--grey7)"
                    fontColor="#868E96"
                    backgroundColorHover="var(--brand2)"
                    fontColorHover="white"
                    onClick={() => handleComment({ text: "Incrível!" })}
                  >
                    Incrível!
                  </Button>
                  <Button
                    buttonSize="medium"
                    backgroundColor="var(--grey7)"
                    fontColor="#868E96"
                    backgroundColorHover="var(--brand2)"
                    fontColorHover="white"
                    onClick={() =>
                      handleComment({ text: "Recomendarei para meus amigos!" })
                    }
                  >
                    Recomendarei para meus amigos!
                  </Button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </form>
        </StyledInputBoxComment>
      )}
    </>
  );
};

export default InputBoxComment;
