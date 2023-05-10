import { useEffect } from "react";
import { useCars } from "../../context/cars.context";
import CardItemAdminPage from "./cardItemAdmin";
import { List, NoList } from "./style";
import { useParams } from "react-router-dom";
import { useUser } from "../../context/user.context";
import ModalEditAd from "../modals/modalEditAd";
import { useModal } from "../../context/modal.context";
import ModalDeleteAd from "../modals/modalDeleteAd";

const CardListAdminPage = () => {
  const { adsbyUser, GetCarsByLoggedUser, setCarId, carEdit } = useCars();
  const { GetSalesmanById } = useUser();
  const { salesmanId } = useParams();
  const {
    setOpenModalEditAd,
    openModalEditAd,
    openModalDeleteAd,
    setOpenModalDeleteAd,
  } = useModal();

  useEffect(() => {
    (async () => {
      try {
        await GetCarsByLoggedUser();
        await GetSalesmanById(salesmanId!);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      {adsbyUser.length > 0 ? (
        <List>
          {adsbyUser.map((item) => (
            <CardItemAdminPage key={item.id} item={item} />
          ))}
        </List>
      ) : (
        <NoList>
          <h1>Você ainda não cadastrou nenhum carro</h1>
        </NoList>
      )}
      {openModalEditAd && <ModalEditAd />}
      {openModalDeleteAd && <ModalDeleteAd />}
    </>
  );
};

export default CardListAdminPage;
