import {
  StyledAdvertiserCard,
  StyledCardDiv,
  StyledCardInfo,
  TagInitials,
} from "./style";
import Button from "../Button";
import PaginationBar from "../paginationBar";
import ModalCreateAd from "../modals/modalCreateAd";
import { useState } from "react";
import { useModal } from "../../context/modal.context";

const CardAdvertiser = () => {
  const { openModalCreateAd, setOpenModalCreateAd } = useModal();
  const advertiser = {
    firstname: "Antonio",
    lastname: "Neto",
  };

  return (
    <>
      <StyledAdvertiserCard>
        <StyledCardDiv>
          <TagInitials>{`${advertiser.firstname[0]}${advertiser.lastname[0]}`}</TagInitials>
        </StyledCardDiv>
        <StyledCardInfo>
          <p>{`${advertiser.firstname} ${advertiser.lastname}`}</p>
          <span>Anunciante</span>
        </StyledCardInfo>
        <p className="advertiser-bio">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <StyledCardDiv>
          <Button
            backgroundColor="var(--white-fixed)"
            buttonSize="big"
            fontColor="var(--brand1)"
            borderColor="var(--brand1)"
            backgroundColorHover="var(--brand4)"
            borderColorHover="var(--brand1)"
            fontColorHover="var(--brand1)"
            onClick={() => setOpenModalCreateAd(!openModalCreateAd)}
          >
            Criar anúncio
          </Button>
        </StyledCardDiv>
      </StyledAdvertiserCard>
      {openModalCreateAd && <ModalCreateAd />}
    </>
  );
};

export default CardAdvertiser;
