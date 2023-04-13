import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../../components/comment";
import comments from "../../components/comment/database";
import Header from "../../components/headers";
import CarImage from "../../components/carImage";
import CarDetails from "../../components/carDetails";
import { StyleBox, StyledDivBackground } from "./style";
import ModalDetailCar from "../../components/modals/modalDetailImage";
import { useModal } from "../../context/modal.context";

const DetailCar = () => {
  const { carId } = useParams();
  const { openModalImageCar } = useModal();
  useEffect(() => {
    console.log(carId);
  }, []);

  return (
    <>
      <Header />
      <StyleBox>
        <StyledDivBackground />
        <CarDetails />
      </StyleBox>
      <Comments comments={comments} />
    </>
  );
};

export default DetailCar;
