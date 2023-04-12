import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailCar = () => {
  const { carId } = useParams();

  useEffect(() => {
    console.log(carId);
  }, []);

  return <h1>Unique car</h1>;
};

export default DetailCar;
