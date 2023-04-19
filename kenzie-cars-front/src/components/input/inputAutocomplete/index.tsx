import React, { useRef, useState } from "react";
import { StyledDivAutoComplete } from "./style";
import { UseFormRegisterReturn } from "react-hook-form";
import Input from "..";

interface IInputAutoCompleteProps {
  options: string[];
  onSelect: (value: string) => void;
  isLoading: boolean;
  placeholder: string;
  register: UseFormRegisterReturn<"model" | "brand">;
}

const InputAutoComplete: React.FC<IInputAutoCompleteProps> = ({
  options,
  onSelect,
  isLoading,
  placeholder,
  register,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [showOptions, setShowOptions] = useState(false); // nova variável de estado para controlar a exibição das opções

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const { onChange, ...registerOptions } = register;

    setInputValue(inputValue);

    const filteredOptions = options.filter(
      (option) => option.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
    setFilteredOptions(filteredOptions);

    setShowOptions(true); // exibe as opções sempre que o usuário começa a digitar
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setFilteredOptions(options);
    onSelect(option);
    setShowOptions(false); // esconde as opções quando uma opção é selecionada
  };

  if (isLoading) {
    return <div>Carregando marcas...</div>;
  }

  return (
    <StyledDivAutoComplete>
      <Input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        // ref={inputRef}
        {...register}
        onChange={handleInputChange}
        autoComplete="off"
      />
      {showOptions &&
        inputValue.length > 0 &&
        filteredOptions.length > 0 && ( // exibe as opções somente quando a variável showOptions for verdadeira e o input tiver mais de 0 caracteres
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
