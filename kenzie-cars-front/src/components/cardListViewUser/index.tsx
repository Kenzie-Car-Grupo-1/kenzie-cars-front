import { useEffect, useState } from "react";
import { useCars } from "../../context/cars.context";
import { useUser } from "../../context/user.context";
import { List } from "../cardListAdminPage/style";
import CardItemViewUser from "./cardItemViewUser";
import { useNavigate, useParams } from "react-router-dom";

const CardListViewUser = () => {
  const { adsbyUser, GetCarsByUser } = useCars();
  const { GetSalesmanById, salesman } = useUser();
  const { salesmanId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        await GetCarsByUser(salesmanId!);
        await GetSalesmanById(salesmanId!);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <List>
      {adsbyUser.length > 0 &&
        adsbyUser.map((item) => (
          <CardItemViewUser
            key={item.id}
            item={item}
            user={salesman}
            onClick={() => navigate(`/dashboard/${item.id}`)}
          />
        ))}
    </List>
  );
};

export default CardListViewUser;
