import { yupResolver } from "@hookform/resolvers/yup";
import { StyleBackgroundModal, StyledButtonClose } from "../style";
import { useForm } from "react-hook-form";
import { userEditAddressSchema } from "../../../validation/user.validation";
import { IAddress, useUser } from "../../../context/user.context";
import { useModal } from "../../../context/modal.context";
import { BoxSection } from "../../../pages/register/style";
import Input from "../../input";
import {
  StyledEditeButtons,
  StyledFormModal,
} from "../modalEditeProfile/style";
import Button from "../../Button";
import Icons from "../../../service/icons";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const ModalEditAddress = () => {
  const { user, EditAddressUser } = useUser();
  const { openModalEditAddress, setOpenModalEditAddress } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddress>({
    resolver: yupResolver(userEditAddressSchema),
  });

  const submit = async (data: IAddress) => {
    console.log(data);
    await EditAddressUser(data);
  };

  return (
    <StyleBackgroundModal>
      {user && (
        <AnimatePresence>
          <StyledFormModal
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="form"
            onSubmit={handleSubmit(submit)}
          >
            <div>
              <div className="title">
                <h3>Editar endereço</h3>
                <StyledButtonClose
                  type="button"
                  onClick={() => setOpenModalEditAddress(!openModalEditAddress)}
                >
                  <Icons.Close />
                </StyledButtonClose>
              </div>

              <h4>Informações de endereço</h4>

              <label>CEP</label>
              <Input
                placeholder="Digite seu cep"
                defaultValue={user.address[0].cep}
                {...register("cep")}
              />
              <span className="error">{errors.cep?.message}</span>

              <BoxSection>
                <div>
                  <label>Estado</label>
                  <Input
                    placeholder="Digitar estado"
                    {...register("state")}
                    defaultValue={user.address[0].state}
                  />
                  <span className="error">{errors.state?.message}</span>
                </div>

                <div>
                  <label>Cidade</label>
                  <Input
                    placeholder="Digitar cidade"
                    {...register("city")}
                    defaultValue={user.address[0].city}
                  />
                  <span className="error">{errors.city?.message}</span>
                </div>
              </BoxSection>

              <label>Rua</label>
              <Input
                placeholder="Digite sua rua"
                {...register("street")}
                defaultValue={user.address[0].street}
              />
              <span className="error">{errors.street?.message}</span>

              <BoxSection>
                <div>
                  <label>Número</label>
                  <Input
                    placeholder="Digitar o número"
                    {...register("number")}
                    defaultValue={user.address[0].number}
                  />
                  <span className="error">{errors.number?.message}</span>
                </div>

                <div>
                  <label>Complemento</label>
                  <Input
                    placeholder="Digitar o complemento"
                    {...register("complement")}
                    defaultValue={user.address[0].complement}
                  />
                  <span className="error">{errors.complement?.message}</span>
                </div>
              </BoxSection>

              <StyledEditeButtons>
                <Button
                  buttonSize="medium"
                  backgroundColor="#DEE2E6"
                  backgroundColorHover="#a7abae"
                  fontColor="#495057"
                  type="button"
                  onClick={() => setOpenModalEditAddress(!openModalEditAddress)}
                >
                  Cancelar
                </Button>
                <Button buttonSize="medium" type="submit">
                  Salvar alterações
                </Button>
              </StyledEditeButtons>
            </div>
          </StyledFormModal>
        </AnimatePresence>
      )}
    </StyleBackgroundModal>
  );
};

export default ModalEditAddress;
