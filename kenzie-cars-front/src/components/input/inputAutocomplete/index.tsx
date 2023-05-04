import React, { useEffect, useRef, useState } from "react";
import { StyledDivAutoComplete } from "./style";
import { UseFormRegisterReturn } from "react-hook-form";
import Input from "..";
import SkeletonInput from "../../skeleton/input";

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

interface IInputAutoCompleteProps {
  options: string[];
  onSelect: (value: string) => void;
  isLoading: boolean;
  placeholder: string;
  setCar: React.Dispatch<React.SetStateAction<IRegisterCarAd>>;
  fieldName: string; // nova prop para setar o valor do carro
  defaultValue?: string;
}

const InputAutoComplete: React.FC<IInputAutoCompleteProps> = ({
  options,
  onSelect,
  isLoading,
  placeholder,
  setCar,
  fieldName,
  defaultValue,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (filteredOptions.length == 0 && inputValue.length > 0) {
      setCar((prevCar) => ({
        ...prevCar,
        [fieldName]: inputValue,
      })); // seta o valor do carro para o valor atual do input
    }
  }, [showOptions, inputValue, setCar]);

  useEffect(() => {
    if (inputValue === "" && !defaultValue) {
      setCar((prevCar) => ({
        ...prevCar,
        [fieldName]: "",
      }));
    }
  }, [inputValue, fieldName, setCar]);

  useEffect(() => {
    const closeOptions = () => setShowOptions(false);
    document.addEventListener("click", closeOptions);

    return () => {
      document.removeEventListener("click", closeOptions);
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setInputValue(inputValue);

    const filteredOptions = options.filter(
      (option) => option.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

    setFilteredOptions(filteredOptions);

    setShowOptions(true);
  };

  const handleOptionClick = (option: string) => {
    const formattedOption = option.charAt(0).toUpperCase() + option.slice(1);
    setInputValue(formattedOption);
    setFilteredOptions(options);
    onSelect(formattedOption);
    setShowOptions(false);
  };

  if (isLoading) {
    return <SkeletonInput />;
  }

  return (
    <StyledDivAutoComplete>
      {defaultValue ? (
        <Input
          type="text"
          defaultValue={defaultValue}
          placeholder={placeholder}
          ref={inputRef}
          onChange={handleInputChange}
          autoComplete="off"
          // value={defaultValue}
        />
      ) : (
        <Input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          ref={inputRef}
          onChange={handleInputChange}
          autoComplete="off"
        />
      )}

      {showOptions && inputValue.length > 0 && filteredOptions.length > 0 && (
        <ul>
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </StyledDivAutoComplete>
  );
};

export default InputAutoComplete;
