import {
  StyledAdvertiserCard,
  StyledCardDiv,
  StyledCardInfo,
  TagInitials,
} from "./style";
import Button from "../Button";
import ModalCreateAd from "../modals/modalCreateAd";
import { useEffect, useState } from "react";
import { useModal } from "../../context/modal.context";
import { useUser } from "../../context/user.context";
import ModalSucess from "../modals/modalSucess";

const CardAdvertiser = () => {
  const { user } = useUser();
  const { openModalCreateAd, setOpenModalCreateAd, openModalSucess } =
    useModal();

  return (
    <>
      {user && user.firstname && (
        <StyledAdvertiserCard>
          <StyledCardDiv>
            <TagInitials>{`${user.firstname[0]}${user.lastname[0]}`}</TagInitials>
          </StyledCardDiv>
          <StyledCardInfo>
            <p>{`${user.firstname} ${user.lastname}`}</p>
            <span>Anunciante</span>
          </StyledCardInfo>
          <p className="advertiser-bio">{user.description}</p>
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
      )}
      {openModalCreateAd && <ModalCreateAd />}
      {openModalSucess && (
        <ModalSucess
          tittle="Sucesso"
          message="Seu anúncio foi criado com sucesso!"
          messageDetail="Agora você poderá ver seus negócios crescendo em grande escala. "
        />
      )}
    </>
  );
};

export default CardAdvertiser;
