import { baseUrl } from "../../../service/axios";
import { StyleBackgroundModal, StyledButtonClose } from "../style";
import { GiConfirmed } from "react-icons/gi";
import { RegisterPost, StyledDivContent } from "./style";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { BsTrash } from "react-icons/bs";
import Button from "../../Button";
import { StyledEditeButtons } from "../modalEditeProfile/style";
import { toast } from "react-toastify";

export interface iPropsModal {
  handleModalUpdate: () => void;
  commentContent: string;
  commentId: string;
}

const ModalUpdateComment = ({
  handleModalUpdate,
  commentId,
  commentContent,
}: iPropsModal) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: commentContent },
  });

  const updateComment = async (data: any) => {
    const token = localStorage.getItem("token");
    const idComment = localStorage.getItem("idComment");
    try {
      baseUrl.defaults.headers.common.authorization = `Bearer ${token}`;
      await baseUrl.patch<any>(`/comments/${idComment}`, data);
      toast.success("Comentário editado com sucesso");
      handleModalUpdate();
    } catch (error) {
      toast.error("Não foi possível editar seu comentário");
      console.error(error);
    }
  };

  const deleteComment = async () => {
    const token = localStorage.getItem("token");
    const idComment = localStorage.getItem("idComment");
    try {
      baseUrl.defaults.headers.common.authorization = `Bearer ${token}`;
      await baseUrl.delete(`/comments/${idComment}`);
      toast.success("Comentário excluído com sucesso");
      handleModalUpdate();
    } catch (error) {
      toast.error("Não foi possível excluir seu comentário");
      console.log(error);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4 }}
      >
        <StyledDivContent>
          <RegisterPost>
            <main>
              <header>
                <h2>Editar comentario</h2>
                <button className="close" onClick={() => handleModalUpdate()}>
                  X
                </button>
              </header>

              <form className="modalForm">
                <textarea id="text" {...register("text")} />
                <StyledEditeButtons>
                  <Button
                    buttonSize="medium"
                    backgroundColor="var(--grey6)"
                    backgroundColorHover="var(--grey3)"
                    fontColor="var(--grey1)"
                    fontColorHover="var(--white-fixed)"
                    type="button"
                    onClick={handleSubmit(updateComment)}
                  >
                    Editar
                  </Button>
                  <Button
                    buttonSize="medium"
                    backgroundColor="var(--alert-2)"
                    backgroundColorHover="var(--alert-1)"
                    fontColor="var(--grey1)"
                    fontColorHover="var(--white-fixed)"
                    type="button"
                    onClick={() => deleteComment()}
                  >
                    Excluir
                  </Button>
                  {/* <GiConfirmed
                    onClick={handleSubmit(updateComment)}
                    className="edit"
                  ></GiConfirmed> */}
                  {/* <BsTrash className="delete" onClick={() => deleteComment()} /> */}
                </StyledEditeButtons>
              </form>
            </main>
          </RegisterPost>
        </StyledDivContent>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalUpdateComment;
