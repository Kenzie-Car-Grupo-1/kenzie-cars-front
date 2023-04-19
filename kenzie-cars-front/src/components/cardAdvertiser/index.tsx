import {
  StyledAdvertiserCard,
  StyledCardDiv,
  StyledCardInfo,
  TagInitials,
} from "./style";
import Button from "../Button";
import ModalCreateAd from "../modals/modalCreateAd";
import { useState } from "react";
import { useModal } from "../../context/modal.context";
import { useUser } from "../../context/user.context";

const CardAdvertiser = () => {
  // const { user } = useUser();
  // console.log(user)
  const { openModalCreateAd, setOpenModalCreateAd } = useModal();
  const user = {
    createdAt: "2023-04-19T17:45:13.827Z",
    updatedAt: "2023-04-19T17:45:13.827Z",
    id: "832d3c5c-067b-4f5f-a916-422d309995ec",
    firstname: "Antonio",
    lastname: "Neto",
    email: "antonio@mail.com",
    cpf: "33322211100",
    contact: "92000220023",
    isWhatsapp: true,
    birthdate: "25/08/1976",
    description: "Vendedor de carros",
    isSalesman: true,
  };

  return (
    <>
      <StyledAdvertiserCard>
        <StyledCardDiv>
          <TagInitials>{`${user.firstname[0]}${user.lastname[0]}`}</TagInitials>
        </StyledCardDiv>
        <StyledCardInfo>
          <p>{`${user.firstname} ${user.lastname}`}</p>
          <span>Anunciante</span>
        </StyledCardInfo>
        <p className="advertiser-bio">
          {user.description}
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
