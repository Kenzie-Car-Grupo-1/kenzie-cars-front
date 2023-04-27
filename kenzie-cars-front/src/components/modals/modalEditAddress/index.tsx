import { yupResolver } from "@hookform/resolvers/yup";
import { StyleBackgroundModal } from "../style";
import { useForm } from "react-hook-form";
import { userEditAddressSchema } from "../../../validation/user.validation";
import { IAddress, useUser } from "../../../context/user.context";
import { useModal } from "../../../context/modal.context";
import { BoxSection, StyledForm } from "../../../pages/register/style";
import Input from "../../input";
import { StyledEditeButtons } from "../modalEditeProfile/style";
import Button from "../../Button";

const ModalEditAddress = () => {
  const { user, EditAddressUser } = useUser();
  const { openModalEditAddress, setOpenModalEditAddress } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddress>({ resolver: yupResolver(userEditAddressSchema) });
  
  const submit = async (data: any) => {
    console.log(data);
    await EditAddressUser(data);
  };

  return (
    <StyleBackgroundModal>
      {user && (
        <StyledForm onSubmit={handleSubmit(submit)}>
          <div>
            <h1>Editar endereço</h1>
            <h2>Informações de endereço</h2>

            <label>CEP</label>
            <Input
              placeholder="Digite seu cep"
              {...register("cep")}
              defaultValue={user.address[0].cep}
            />
            {errors && <span className="error">{!errors.cep?.message}</span>}

            <BoxSection>
              <div>
                <label>Estado</label>
                <Input
                  placeholder="Digitar estado"
                  {...register("state")}
                  defaultValue={user.address[0].state}
                />
                {errors && <span className="error">{!errors.state?.message}</span>}
              </div>
              
              <div>
                <label>Cidade</label>
                <Input
                  placeholder="Digitar cidade"
                  {...register("city")}
                  defaultValue={user.address[0].city}
                />
                {errors && <span className="error">{!errors.city?.message}</span>}
              </div>
            </BoxSection>

            <label>Rua</label>
            <Input
              placeholder="Digite sua rua"
              {...register("street")}
              defaultValue={user.address[0].street}
            />
            {errors && <span className="error">{!errors.street?.message}</span>}

            <BoxSection>
              <div>
                <label>Número</label>
                <Input
                  placeholder="Digitar o número"
                  {...register("number")}
                  defaultValue={user.address[0].number}
                />
                {errors && <span className="error">{!errors.number?.message}</span>}
              </div>
              
              <div>
                <label>Complemento</label>
                <Input
                  placeholder="Digitar o complemento"
                  {...register("complement")}
                  defaultValue={user.address[0].complement}
                />
                {errors && <span className="error">{!errors.complement?.message}</span>}
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
        </StyledForm>
      )}
    </StyleBackgroundModal>
  );
};

export default ModalEditAddress;
