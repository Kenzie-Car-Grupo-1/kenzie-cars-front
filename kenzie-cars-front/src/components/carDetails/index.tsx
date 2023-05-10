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
import { useModal } from "../../context/modal.context";
import TagUserInitials from "../tagInitials";
import { useEffect } from "react";
import { useCars } from "../../context/cars.context";
import { StyledBoxImage, StyledBoxImageCar } from "../carImage/style";
import Comments from "../comment";
import comments from "../comment/database";
import { useMediaQuery } from "@react-hook/media-query";

const CarDetails = (id: any) => {
  const navigate = useNavigate();
  const { setOpenModalImageCar, setImgForModal } = useModal();
  const { RequestCarByID, car } = useCars();
  const isCommentsEnabled = useMediaQuery("(max-width: 700px)");

  useEffect(() => {
    (async () => {
      await RequestCarByID(id.id);
    })();
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
              <p>{car.year}</p>
              <p>{car.kms} KM</p>
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
              return window.location.replace(
                `https://api.whatsapp.com/send?phone=+55${car.user.contact}&text=Olá! Vi seu anúncio e gostaria de mais informações sobre o veículo ${car.brand} ${car.model} ${car.year}.`
              );
            }}
          >
            Comprar
          </Button>
        </StyledCarDetails>
        <StyledCarDescription>
          <h1>Descrição</h1>
          <p>{car.description}</p>
        </StyledCarDescription>
        {!isCommentsEnabled && <Comments comments={car.comment} />}
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
          {car.user && (
            <>
              <TagUserInitials
                firstName={car.user.firstname}
                lastName={car.user.lastname}
                uuid={car.user.id}
              />
              <h1>{`${car.user.firstname} ${car.user.lastname}`}</h1>
              <p>{car.user.description}</p>
            </>
          )}

          <Button
            buttonSize="big"
            backgroundColor="var(--grey1)"
            onClick={() =>
              navigate(`/dashboard/salesman/${car && car.user.id}`)
            }
          >
            Ver todos anuncios
          </Button>
        </StyledUserProfile>
      </StyledDivPicturesAndUser>
      {car.comment && isCommentsEnabled && <Comments comments={car.comment} />}
    </>
  );
};

export default CarDetails;
