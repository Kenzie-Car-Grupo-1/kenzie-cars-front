import { ICar, useCars } from "../../../context/cars.context";
import CardAdForm from "../modalCreateAd/carAdForm";
import { StyleBackgroundModal, StyledButtonClose } from "../style";

import { StyledDivContent } from "./style";
import { motion, AnimatePresence } from "framer-motion";

interface IPropsEditAd {
  car: ICar;
}

const ModalEditAd = () => {
  const { carEdit } = useCars();

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
            <CardAdForm carEdit={carEdit} />
          </StyledDivContent>
        </motion.div>
      </AnimatePresence>
    </StyleBackgroundModal>
  );
};

export default ModalEditAd;
