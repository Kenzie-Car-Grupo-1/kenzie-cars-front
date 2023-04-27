import { useEffect } from "react";
import { useCars } from "../../context/cars.context";
import CardItemAdminPage from "./cardItemAdmin";
import { List } from "./style";
import { useParams } from "react-router-dom";
import { useUser } from "../../context/user.context";

const CardListAdminPage = () => {
  const { adsbyUser, GetCarsByLoggedUser } = useCars();
  const { GetSalesmanById } = useUser();
  const { salesmanId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        await GetCarsByLoggedUser();
        await GetSalesmanById(salesmanId!);
      } catch (error) {
        console.error(error);
      }
    })()
  }, []);

  return (
    <List>
      {adsbyUser.length > 0 &&
        adsbyUser.map((item) => (
          <CardItemAdminPage key={item.id} item={item} />
        ))}
    </List>
  );
};

export default CardListAdminPage;
