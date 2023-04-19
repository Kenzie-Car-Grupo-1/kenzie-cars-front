import Icons from "../../../service/icons";
import { StyleBackgroundModal, StyledButtonClose } from "../style";
import { useModal } from "../../../context/modal.context";
import { StyledDivContent, StyledFormCreateAd } from "./style";
import Input from "../../input";
import { useEffect, useState } from "react";
import axios from "axios";
import InputAutoComplete from "../../input/inputAutocomplete";
import Button from "../../Button";
import CardAdForm from "./carAdForm";

const ModalCreateAd = () => {
  return (
    <StyleBackgroundModal>
      <StyledDivContent>
        <CardAdForm />
      </StyledDivContent>
    </StyleBackgroundModal>
  );
};

export default ModalCreateAd;
