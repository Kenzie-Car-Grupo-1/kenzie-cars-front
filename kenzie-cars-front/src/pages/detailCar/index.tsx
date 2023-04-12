import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../../components/comment";
import comments from "../../components/comment/database";

const DetailCar = () => {
  const { carId } = useParams();

  useEffect(() => {
    console.log(carId);
  }, []);

  return (
    <>
      <h1>Unique car</h1>
      <Comments comments={comments} />
    </>
  );
};

export default DetailCar;
