import { StyledTag } from "./style";

interface IPropsUserInitials {
  firstName: string;
  lastName: string;
  uuid: string;
}

const TagUserInitials = ({ firstName, lastName, uuid }: IPropsUserInitials) => {
  let firstNumber = "0";

  if (uuid != undefined) {
    for (let i = 0; i < uuid.length; i++) {
      const char = uuid.charAt(i);

      if (!isNaN(parseInt(char, 10))) {
        firstNumber = char;
        break;
      }
    }
  }

  return (
    <StyledTag color={firstNumber}>{`${firstName[0]}${lastName[0]}`}</StyledTag>
  );
};

export default TagUserInitials;
