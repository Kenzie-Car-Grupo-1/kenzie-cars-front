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
import car from "../../assets/06a5984f915f5060d7a5f3e0a5f7560d.png";
import user from "../../assets/Frame 4.png";
import { useModal } from "../../context/modal.context";
import TagUserInitials from "../tagInitials";
import CarImage from "../carImage";

const CarDetails = () => {
  const navigate = useNavigate();
  const { setOpenModalImageCar } = useModal();
  return (
    <>
      <StyledDivImageAndDetails>
        <CarImage />
        <StyledCarDetails>
          <h1>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h1>
          <div className="div-extra">
            <div className="extra-tags">
              <p>0 KM</p>
              <p>1990</p>
            </div>
            <p>00.000.000</p>
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
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </StyledCarDescription>
      </StyledDivImageAndDetails>
      <StyledDivPicturesAndUser>
        <StyledCarPictures>
          <h1>Fotos</h1>
          <StyleBoxPictures>
            <div onClick={() => setOpenModalImageCar(true)}>
              <img src={car} alt="" />
            </div>
            <div onClick={() => setOpenModalImageCar(true)}>
              <img src={car} alt="" />
            </div>{" "}
            <div onClick={() => setOpenModalImageCar(true)}>
              <img src={car} alt="" />
            </div>{" "}
            <div onClick={() => setOpenModalImageCar(true)}>
              <img src={car} alt="" />
            </div>{" "}
            <div onClick={() => setOpenModalImageCar(true)}>
              <img src={car} alt="" />
            </div>{" "}
            <div onClick={() => setOpenModalImageCar(true)}>
              <img src={car} alt="" />
            </div>
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
