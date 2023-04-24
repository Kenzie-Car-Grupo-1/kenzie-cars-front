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
import * as yup from "yup";
import SkeletonInput from "../../../skeleton/input";
import { useUser } from "../../../../context/user.context";

interface ICarApiKenzie {
  id?: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

interface IRegisterCarAd {
  brand: string;
  model: string;
  year: string;
  fuel_type: string;
  kms: number | null;
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

interface IError {
  [key: string]: string;
}

const CardAdForm = () => {
  const { setOpenModalCreateAd, openModalCreateAd, setOpenModalSucess } =
    useModal();
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [models, setModels] = useState<ICarApiKenzie[]>([]);
  const [priceFipe, setPriceFipe] = useState<number>(0);
  const [errors, setErrors] = useState<IError>({});
  const [loadingBrands, setLoadingBrands] = useState<boolean>(false);
  const [loadingModels, setLoadingModels] = useState<boolean>(false);
  const [isToken, setIsToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsToken(token!);
  }, []);

  const [car, setCar] = useState<Omit<IRegisterCarAd, "id">>({
    brand: "",
    model: "",
    year: "",
    fuel_type: "",
    price: "",
    kms: null,
    color: "",
    description: "",
    images: [],
  });

  const { RegisterCarAd } = useCars();

  const { register, reset, handleSubmit, control } = useForm<IRegisterCarAd>({
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

  const isFormValid =
    car.brand &&
    car.model &&
    car.year &&
    car.fuel_type &&
    car.price &&
    car.kms !== null &&
    car.color &&
    car.description;

  const validateCarAd = async () => {
    try {
      await carAdSchema.validate(car, { abortEarly: false });
      // Se chegou até aqui, o objeto car é válido
      setErrors({});
      return true;
    } catch (err) {
      const errors: IError = {};

      // Adiciona os erros de validação no objeto errors
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
      }
      console.log(errors);

      // Atualiza o estado dos erros com os novos erros
      setErrors(errors);
      return false;
    }
  };

  const onSubmit = async (data: IRegisterCarAd) => {
    const result = await validateCarAd();

    if (result) {
      const updatedData = { ...data }; // cria uma cópia do objeto de dados original
      const { image, images } = updatedData;

      if (image) {
        const updatedImages = [image, ...images.filter((img) => img)]; // remove elementos vazios ou undefined do array
        updatedData.images = updatedImages;
      }

      delete updatedData.image; // deleta a chave "image" do objeto

      await RegisterCarAd(updatedData, isToken);
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
    const formattedOption = brand.toLocaleLowerCase();

    try {
      setLoadingModels(true);

      const response = await axios.get(
        `https://kenzie-kars.herokuapp.com/cars?brand=${formattedOption}`
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

  const updateCar = (updatedProperties: ICarApiKenzie) => {
    const carUpdate: Partial<IRegisterCarAd> = {
      brand:
        updatedProperties.brand.charAt(0).toUpperCase() +
        updatedProperties.brand.slice(1),
      model:
        updatedProperties.name.charAt(0).toUpperCase() +
        updatedProperties.name.slice(1),
      year: updatedProperties.year,
    };

    if (updatedProperties.fuel == 1) {
      carUpdate.fuel_type = "Flex";
    }

    if (updatedProperties.fuel == 2) {
      carUpdate.fuel_type = "Híbrido";
    }

    if (updatedProperties.fuel == 3) {
      carUpdate.fuel_type = "Elétrico";
    }

    setPriceFipe(updatedProperties.value);

    setCar((prevCar) => ({ ...prevCar, ...carUpdate }));
  };

  const findCar = (nameCar: string): ICarApiKenzie | undefined => {
    const car = models.find((car) => car.name === nameCar.toLocaleLowerCase());
    return car;
  };

  const arrayOptions = (arrayObjects: ICarApiKenzie[]): string[] => {
    const arrayOptions = arrayObjects.map((model: ICarApiKenzie) => model.name);
    return arrayOptions;
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    // verifica se o nome do campo começa com "images"
    if (name.startsWith("images")) {
      // extrai o índice do campo de imagens
      const index = Number(name.split(".")[1]);

      // cria uma cópia do array images atual
      const newImages = [...car.images];

      // atualiza apenas o item correspondente em images
      newImages[index] = value;

      // atualiza o estado do car com as novas imagens
      setCar({ ...car, images: newImages });
    } else {
      setCar({ ...car, [name]: value });
    }
  };

  return (
    // <StyledFormCreateAd onSubmit={handleSubmit(onSubmit)}>
    <StyledFormCreateAd
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(car);
      }}
    >
      <div className="title">
        <h3>Criar anúncio</h3>
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
              setCar({ ...car, brand: value });
            }}
            isLoading={loadingBrands}
            placeholder="Digite a marca do veículo"
            setCar={setCar}
            fieldName={"brand"}
          />
          <span> {errors.brand} </span>
        </>
      ) : (
        <SkeletonInput />
      )}
      <label htmlFor="">Modelo</label>
      <InputAutoComplete
        options={arrayOptions(models)}
        onSelect={(value: string) => {
          updateCar(findCar(value)!);
        }}
        isLoading={loadingModels}
        placeholder="Digite o modelo do veículo"
        setCar={setCar}
        fieldName={"model"}
      />
      <span> {errors.model} </span>
      <div className="div-colum">
        <div>
          <label htmlFor="">Ano</label>
          <Input
            // {...register("year")}
            defaultValue={car.year}
            name="year"
            onChange={handleChange}
            placeholder="Ano do veículo"
          />
          <span> {errors.year} </span>
        </div>
        <div>
          <label htmlFor="">Combustível</label>
          <select
            name="fuel_type"
            value={car.fuel_type}
            onChange={handleChange}
            // {...register("fuel_type")}
            // onChange={(event) => {
            //   setCar((prevState) => ({
            //     ...prevState,
            //     fuel_type: event.target.value,
            //   }));
            // }}
          >
            <option value="">Escolha</option>
            <option value="Flex">Flex</option>
            <option value="Híbrido">Híbrido</option>
            <option value="Elétrico">Elétrico</option>
            <option value="Gasolina">Gasolina</option>
            <option value="GNV">GNV</option>
          </select>
          <span> {errors.fuel_type} </span>
        </div>
      </div>
      <div className="div-colum">
        <div>
          <label htmlFor="">Quilometragem</label>
          <Input
            placeholder="Quilometragem do veículo"
            onChange={handleChange}
            // {...register("kms")}
            name="kms"
          />
          <span> {errors.kms} </span>
        </div>
        <div>
          <label htmlFor="">Cor</label>
          <Input
            value={car.color}
            placeholder="Cor do veículo"
            onChange={handleChange}
            // {...register("color")}
            name="color"
          />
          <span> {errors.color} </span>
        </div>
      </div>
      <div className="div-colum">
        <div>
          <label htmlFor="">Preço tabela FIPE</label>
          <Input
            disabled
            value={`R$ ${priceFipe.toLocaleString("pt-BR", {
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
            value={car.price}
            id="price"
            placeholder="Preço do veículo"
            onChange={handleChange}
            name="price"
          />
          <span> {errors.price} </span>
        </div>
      </div>
      <label htmlFor="">Descrição</label>
      <textarea
        placeholder="Descreva seu anúncio aqui.."
        onChange={handleChange}
        // {...register("description")}
        name="description"
      />
      <span> {errors.description} </span>

      <label htmlFor="">Imagem da capa</label>
      <Input
        id="image"
        placeholder="http://image.com"
        type="url"
        // {...register("image")}
        name="image"
        onChange={handleChange}
      />
      {errors.image && <span>{errors.image}</span>}

      {fields.map((field, index) => (
        <div key={field.id}>
          <label>{` ${index + 1}ª imagem da galeria`}</label>
          <Input
            placeholder="http://image.com"
            type="url"
            onChange={handleChange}
            name={`images.${index}`}
          />
          {errors.images && <span>{errors.images}</span>}
        </div>
      ))}
      <Button
        className="add-input"
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
        <Button
          className="button-create"
          disabled={!isFormValid}
          buttonSize="big"
          type="submit"
        >
          Criar anúncio
        </Button>
      </div>
    </StyledFormCreateAd>
  );
};

export default CardAdForm;
