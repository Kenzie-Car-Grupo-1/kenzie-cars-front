import { StyleBackgroundModal, StyledButtonClose } from "../style";
import CardAdForm from "./carAdForm";
import { StyledDivContent, StyledFormCreateAd } from "./style";
import { motion, AnimatePresence } from "framer-motion";

const ModalCreateAd = () => {
  return (
    <StyleBackgroundModal>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
        >
          <StyledDivContent>
            <CardAdForm />
          </StyledDivContent>
        </motion.div>
      </AnimatePresence>
    </StyleBackgroundModal>
  );
};

export default ModalCreateAd;
