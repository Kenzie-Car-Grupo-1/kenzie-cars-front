import { useEffect, useRef, useState } from "react";
import Icons from "../../../../service/icons";
import { StyledButtonClose } from "../../style";
import { StyledFormCreateAd } from "../style";
import axios from "axios";
import InputAutoComplete from "../../../input/inputAutocomplete";
import Input from "../../../input";
import Button from "../../../Button";
import { useModal } from "../../../../context/modal.context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import carAdSchema from "../../../../validation/adCar.validation";

interface ICar {
  id?: string;
  name: string;
  brand: string;
  year: string | undefined;
  fuel: number;
  value: number;
  km?: string;
  color?: string;
  price: string;
}

interface IRegisterCarAd {
  brand: string;
  model: string;
  year: string;
  fuel_type: string;
  kms: number;
  color: string;
  price: string;
  description: string;
  image: string;
}

interface IInput {
  type: string;
  name: string;
}
type ICardAdFormProps = {
  setOpenModalCreateAd: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardAdForm = () => {
  const { setOpenModalCreateAd, openModalCreateAd } = useModal();
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [models, setModels] = useState<ICar[]>([]);
  const [loadingBrands, setLoadingBrands] = useState<boolean>(false);
  const [loadingModels, setLoadingModels] = useState<boolean>(false);

  const [car, setCar] = useState<Omit<ICar, "id">>({
    name: "",
    brand: "",
    year: "",
    fuel: 0,
    value: 0,
    km: "",
    price: "",
  });

  const [inputs, setInputs] = useState<IInput[]>([
    { type: "text", name: "input-1" },
    { type: "text", name: "input-2" },
  ]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterCarAd>({
    resolver: yupResolver(carAdSchema),
  });

  const onSubmit = (data: IRegisterCarAd) => {
    reset();
    console.log(car);

    console.log(data);
  };

  const addInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (inputs.length < 6) {
      const newInput = {
        type: "url",
        name: `input-${inputs.length + 1}`,
      };

      setInputs([...inputs, newInput]);
    }
  };

  const fetchBrands = async () => {
    try {
      setLoadingBrands(true);

      const response = await axios.get(
        "https://kenzie-kars.herokuapp.com/cars/"
      );
      const brands = Object.keys(response.data);

      setBrands(brands);
      setLoadingBrands(false);
    } catch (error) {
      console.error(error);
      setLoadingBrands(false);
    }
  };

  const fetchModels = async (brand: string) => {
    try {
      setLoadingModels(true);

      const response = await axios.get(
        `https://kenzie-kars.herokuapp.com/cars?brand=${brand}`
      );
      const models = response.data;

      setModels(models);
      setLoadingModels(false);
    } catch (error) {
      console.error(error);
      setLoadingModels(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const updateCar = (updatedProperties: ICar) => {
    setCar((prevCar) => ({ ...prevCar, ...updatedProperties }));
  };

  const findCar = (nameCar: string): ICar | undefined => {
    const car = models.find((car) => car.name === nameCar);
    return car;
  };

  const arrayOptions = (arrayObjects: ICar[]): string[] => {
    const arrayOptions = arrayObjects.map((model: ICar) => model.name);
    return arrayOptions;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  return (
    <StyledFormCreateAd onSubmit={handleSubmit(onSubmit)}>
      <div className="title">
        <h3>Criar núncio</h3>
        <StyledButtonClose
          type="button"
          onClick={() => setOpenModalCreateAd(false)}
        >
          <Icons.Close />
        </StyledButtonClose>
      </div>
      <h4>Informações do veículo</h4>
      <label htmlFor="">Marca</label>
      {brands.length > 0 ? (
        <>
          <InputAutoComplete
            options={brands}
            onSelect={(value: string) => {
              setSelectedBrand(value);
              fetchModels(value);
            }}
            isLoading={loadingBrands}
            placeholder="Digite a marca do veículo"
            register={register("brand")}
          />
          <span> {errors.brand?.message} </span>
        </>
      ) : (
        <p>Carregando marcas...</p>
      )}
      <label htmlFor="">Modelo</label>
      <InputAutoComplete
        options={arrayOptions(models)}
        onSelect={(value: string) => {
          updateCar(findCar(value)!);
        }}
        isLoading={loadingModels}
        placeholder="Digite o modelo do veículo"
        register={register("model")}
      />
      <span> {errors.model?.message} </span>
      <div className="div-colum">
        <div>
          <label htmlFor="">Ano</label>
          <Input
            {...register("year")}
            onChange={handleChange}
            placeholder="Ano do veículo"
          />
          <span> {errors.year?.message} </span>
        </div>
        <div>
          <label htmlFor="">Combustível</label>
          <select
            {...register("fuel_type")}
            onChange={(event) => {
              setCar((prevState) => ({
                ...prevState,
                fuel: Number(event.target.value),
              }));
            }}
          >
            <option value="">Escolha</option>
            <option value="1">Flex</option>
            <option value="2">Híbrido</option>
            <option value="3">Elétrico</option>
            <option value="4">Gasolina</option>
            <option value="5">GNV</option>
          </select>
          <span> {errors.fuel_type?.message} </span>
        </div>
      </div>
      <div className="div-colum">
        <div>
          <label htmlFor="">Quilometragem</label>
          <Input placeholder="Quilometragem do veículo" {...register("kms")} />
          <span> {errors.kms?.message} </span>
        </div>
        <div>
          <label htmlFor="">Cor</label>
          <Input
            value={car.color}
            placeholder="Cor do veículo"
            {...register("color")}
          />
          <span> {errors.color?.message} </span>
        </div>
      </div>
      <div className="div-colum">
        <div>
          <label htmlFor="">Preço tabela FIPE</label>
          <Input
            disabled
            value={`R$ ${car.value.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
            placeholder="R$ 00,00"
            title="Valor referente ao modelo mais atual do veículo escolhido!"
          />
        </div>
        <div>
          <label htmlFor="">Preço</label>
          <Input
            id="price"
            placeholder="Preço do veículo"
            {...register("price")}
          />
          <span> {errors.price?.message} </span>
        </div>
      </div>
      <label htmlFor="">Descrição</label>
      <textarea
        placeholder="Descreva seu anúncio aqui.."
        {...register("description")}
      />
      <span> {errors.description?.message} </span>
      <label htmlFor="">Imagem da capa</label>

      <Input placeholder="http://image.com" type="url" {...register("image")} />
      <span> {errors.image?.message} </span>
      {inputs.map((input, index) => (
        <>
          <label key={"label" + index} htmlFor="">{` ${
            index + 1
          }ª imagem da galeria`}</label>
          <Input
            key={index}
            placeholder="http://image.com"
            type={input.type}
            name={input.name}
          />
        </>
      ))}

      <Button
        buttonSize="medium"
        backgroundColor="var(--brand4)"
        fontColor="var(--brand1)"
        fontColorHover="white"
        backgroundColorHover="var(--brand2)"
        onClick={addInput}
        disabled={inputs.length >= 6}
      >
        Adicionar campo para imagem da galeria
      </Button>
      <div className="div-button">
        <Button
          type="button"
          buttonSize="big"
          backgroundColor="var(--grey6)"
          backgroundColorHover="var(--grey4)"
          fontColor="var(--grey2)"
          onClick={() => setOpenModalCreateAd(false)}
        >
          Cancelar
        </Button>
        <Button className="button-create" buttonSize="big" type="submit">
          Criar anúncio
        </Button>
      </div>
    </StyledFormCreateAd>
  );
};

export default CardAdForm;
