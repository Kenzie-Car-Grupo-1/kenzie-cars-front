import { useNavigate } from "react-router-dom";
import Button from "../Button";
import {
  StyleBoxPictures,
  StyledCarDescription,
  StyledCarDetails,
  StyledCarPictures,
  StyledDivImageAndDetails,
  StyledDivPicturesAndUser,
  StyledUserProfile,
} from "./style";
import carImg from "../../assets/06a5984f915f5060d7a5f3e0a5f7560d.png";
import user from "../../assets/Frame 4.png";
import { useModal } from "../../context/modal.context";
import TagUserInitials from "../tagInitials";
import CarImage from "../carImage";
import { useEffect } from "react";
import { useCars } from "../../context/cars.context";
import { StyledBoxImage, StyledBoxImageCar } from "../carImage/style";

const CarDetails = (id: any) => {
  const navigate = useNavigate();
  const { setOpenModalImageCar, setImgForModal } = useModal();
  const { RequestCarByID, car } = useCars();

  useEffect(() => {
    console.log(id);
    RequestCarByID(id.id);
  }, []);
  return (
    <>
      <StyledDivImageAndDetails>
        <StyledBoxImage>
          <StyledBoxImageCar>
            <img src={car.images && car.images[0].url} alt="" />
          </StyledBoxImageCar>
        </StyledBoxImage>
        <StyledCarDetails>
          <h1>{car.model}</h1>
          <div className="div-extra">
            <div className="extra-tags">
              <p>{car.kms} KM</p>
              <p>{car.year}</p>
            </div>
            <p>
              {Number(car.price).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <Button
            buttonSize="medium"
            backgroundColor="var(--brand1)"
            disabled={localStorage.token ? false : true}
            onClick={() => {
              if (!localStorage.token) {
                return navigate("/login");
              }
              return console.log("olá mundo");
            }}
          >
            Comprar
          </Button>
        </StyledCarDetails>
        <StyledCarDescription>
          <h1>Description</h1>
          <p>{car.description}</p>
        </StyledCarDescription>
      </StyledDivImageAndDetails>
      <StyledDivPicturesAndUser>
        <StyledCarPictures>
          <h1>Fotos</h1>
          <StyleBoxPictures>
            {car.images &&
              car.images.map((element) => {
                return (
                  <div
                    key={element.id}
                    onClick={() => {
                      setImgForModal(element.url);
                      setOpenModalImageCar(true);
                    }}
                  >
                    <img src={element.url} alt="" />
                  </div>
                );
              })}
          </StyleBoxPictures>
        </StyledCarPictures>
        <StyledUserProfile>
          <TagUserInitials firstName="Rafael" lastName="Quadros" uuid="2" />
          <h1>Rafael Quadros</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>

          <Button buttonSize="big" backgroundColor="var(--grey1)">
            Ver todos anuncios
          </Button>
        </StyledUserProfile>
      </StyledDivPicturesAndUser>
    </>
  );
};

export default CarDetails;
