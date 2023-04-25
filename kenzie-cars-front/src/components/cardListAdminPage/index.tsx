import { useEffect } from "react";
import { useCars } from "../../context/cars.context";
import { items } from "../CardList/database";
import CardItemAdminPage from "./cardItemAdmin";
import { List } from "./style";
import { useUser } from "../../context/user.context";

const CardListAdminPage = () => {
  const { adsbyUser, GetCarsByUser } = useCars();
  const { user } = useUser();
  useEffect(() => {
    GetCarsByUser(user.id);
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
