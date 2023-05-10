import { baseUrl } from "../../../service/axios";
import { StyleBackgroundModal, StyledButtonClose } from "../style";
import { GiConfirmed } from "react-icons/gi";
import { RegisterPost, StyledDivContent } from "./style";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { BsTrash } from "react-icons/bs";

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
    try {
      console.log(data);
      const res = await baseUrl.patch<any>(`/comments/${commentId}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      handleModalUpdate();
    } catch (error) {
      console.log(error, "xxxxxxxxxxxxx");
    }
  };

  const deleteComment = async (id: any) => {
    try {
      await baseUrl.delete(`/comments/${id}`),
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        };
      handleModalUpdate();
    } catch (error) {
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
                <div>
                  <GiConfirmed
                    onClick={() => updateComment(commentContent)}
                    className="edit"
                  ></GiConfirmed>
                  <BsTrash
                    className="delete"
                    onClick={() => deleteComment(commentId)}
                  />
                </div>
              </form>
            </main>
          </RegisterPost>
        </StyledDivContent>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalUpdateComment;
