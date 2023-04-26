import { useEffect } from "react";
import { useCars } from "../../context/cars.context";
import { items } from "../CardList/database";
import CardItemAdminPage from "./cardItemAdmin";
import { List } from "./style";
import { useUser } from "../../context/user.context";
import { useParams } from "react-router-dom";

const CardListAdminPage = () => {
  const { adsbyUser, GetCarsByUser } = useCars();
  const { user } = useUser();
  const { salesmanId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        await GetCarsByUser(salesmanId!);
      } catch (error) {
        console.error(error);
      }
    })();
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
