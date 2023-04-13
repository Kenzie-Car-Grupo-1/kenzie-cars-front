import { StyledBoxImage, StyledBoxImageCar } from "./style";
import car from "../../assets/06a5984f915f5060d7a5f3e0a5f7560d.png";
import CarDetails from "../carDetails";

const CarImage = () => {
  return (
    <StyledBoxImage>
      <StyledBoxImageCar>
        <img src={car} alt="" />
      </StyledBoxImageCar>
    </StyledBoxImage>
  );
};

export default CarImage;
