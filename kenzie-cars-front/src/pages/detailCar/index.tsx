import { useParams } from "react-router-dom";
import Header from "../../components/headers";
import CarDetails from "../../components/carDetails";
import { StyleBox, StyledDivBackground } from "./style";

import Footer from "../../components/footer";

const DetailCar = () => {
  const { carId } = useParams();

  return (
    <>
      <Header />
      <StyleBox>
        <StyledDivBackground />
        <CarDetails id={carId} />
      </StyleBox>
      <Footer />
    </>
  );
};

export default DetailCar;
