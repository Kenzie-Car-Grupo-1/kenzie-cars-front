import Button from "../../components/Button";
import Header from "../../components/headers";
import Input from "../../components/input";
import { StyleBox } from "../detailCar/style";
import { BoxSection, StyledForm } from "./style";

const Register = () => {
  return (
    <>
      <Header />
      <StyleBox>
        <StyledForm>
          <div>
            <h1>Cadastro</h1>
            <label>Nome</label>
            <Input placeholder="Ex: Samuel Lão" />

            <label>Email</label>
            <Input placeholder="Ex: samuel@kenzie.com.br" />

            <label>CPF</label>
            <Input placeholder="000.000.000-00" />

            <label>Celular</label>
            <Input placeholder="(DDD) 9 0000-0000" />

            <label>Data de nascimento</label>
            <Input placeholder="00/00/00" />

            <label>Descrição</label>
            <Input placeholder="Digitar descrição" />

            <h2>Informações de endereço </h2>
            <label>CEP</label>
            <Input placeholder="00000.000" />
            <BoxSection>
              <div>
                <label>Estado</label>
                <Input placeholder="Digitar estado" />
              </div>
              <div>
                <label>Cidade</label>
                <Input placeholder="Digitar cidade" />
              </div>
            </BoxSection>

            <label>Rua</label>
            <Input placeholder="Digite rua" />

            <BoxSection>
              <div>
                <label>Numero</label>
                <Input placeholder="Digite numero" />
              </div>
              <div>
                <label>Complemento</label>
                <Input placeholder="Ex: apart 307" />
              </div>
            </BoxSection>

            <label>Tipo de conta</label>
            <BoxSection>
              <div>
                <Input
                  name="options"
                  type="ratio"
                  id="comprador"
                  fontColor="white"
                  value="Comprador"
                />
              </div>
              <div>
                <Input type="ratio" id="anunciante" value="Anunciante" />
              </div>
            </BoxSection>

            <label>Senha</label>
            <Input placeholder="Digite senha" />

            <label>Confirmar senha</label>
            <Input placeholder="Digite senha" />

            <Button>Finalizar cadastro</Button>
          </div>
        </StyledForm>
      </StyleBox>
    </>
  );
};

export default Register;
