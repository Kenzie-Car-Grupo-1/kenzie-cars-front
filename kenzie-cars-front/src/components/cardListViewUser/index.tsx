import { useEffect } from "react";
import { useCars } from "../../context/cars.context";
import { useUser } from "../../context/user.context";
import { List } from "../cardListAdminPage/style";
import CardItemViewUser from "./cardItemViewUser";
import { useNavigate } from "react-router-dom";

const CardListViewUser = () => {
  const { GetCarsByUser } = useCars();
  const { salesman, salesmanAds } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    GetCarsByUser(salesman.id);
  }, []);

  return (
    <List>
      {salesmanAds.length > 0 &&
        salesmanAds.map((item) => (
          <CardItemViewUser
            key={item.id}
            item={item}
            user={salesman}
            onClick={navigate(`/dashboard/${item.id}`)}
          />
        ))}
    </List>
  );
};

export default CardListViewUser;
