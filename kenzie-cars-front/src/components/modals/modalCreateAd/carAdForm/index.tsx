import React, { useContext, useEffect, useRef, useState } from "react";
import Icons from "../../../../service/icons";
import { StyledButtonClose } from "../../style";
import { StyledFormCreateAd } from "../style";
import axios from "axios";
import InputAutoComplete from "../../../input/inputAutocomplete";
import Input from "../../../input";
import Button from "../../../Button";
import { useModal } from "../../../../context/modal.context";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import carAdSchema from "../../../../validation/adCar.validation";
import { useCars } from "../../../../context/cars.context";

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
  image?: string;
  images: string[];
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

  const { RegisterCarAd } = useCars();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IRegisterCarAd>({
    resolver: yupResolver(carAdSchema),
    defaultValues: {
      images: [" ", " "],
    },
  });

  const { fields, append, remove } = useFieldArray<
    string,
    keyof IRegisterCarAd
  >({
    control,
    name: "images",
    max: 5, // set the maximum number of fields to 5
  });

  const onSubmit = (data: IRegisterCarAd) => {
    const updatedData = { ...data }; // create a copy of the original data object
    const { image, images } = updatedData;

    if (image) {
      const updatedImages = [image, ...images.filter((img) => img !== "")];
      updatedData.images = updatedImages;
    }

    delete updatedData.image;

    RegisterCarAd(
      data,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODE5MTUwNTksImV4cCI6MTY4MjAwMTQ1OSwic3ViIjoiZjIwOTIzZDEtZDNjYS00MDFkLWI4MTktYjU3YzY4ZTFhNWFlIn0.B0x-tDsw6Baxv8K0xa6UuGTG1M1pqofB8zJu02fODco"
    );
    reset();
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
            <option value="Flex">Flex</option>
            <option value="Híbrido">Híbrido</option>
            <option value="Elétrico">Elétrico</option>
            <option value="Gasolina">Gasolina</option>
            <option value="GNV">GNV</option>
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
      <Input
        id="image"
        placeholder="http://image.com"
        type="url"
        {...register("image")}
      />
      {errors.image && <span>{errors.image.message}</span>}

      {fields.map((field, index) => (
        <div key={field.id}>
          <label>{` ${index + 1}ª imagem da galeria`}</label>
          <Input
            placeholder="http://image.com"
            type="url"
            {...register(`images.${index}`, {
              pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: "Deve ser um URL válido",
              },
            })}
          />
          {errors.images && <span>{errors.images.message}</span>}
        </div>
      ))}
      <Button
        buttonSize="medium"
        backgroundColor="var(--brand4)"
        fontColor="var(--brand1)"
        fontColorHover="white"
        backgroundColorHover="var(--brand2)"
        type="button"
        onClick={() => append(" ")}
        disabled={fields.length == 5}
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
