import { Link, useNavigate } from "react-router-dom";
import { Item } from "./style";
import TagUserInitials from "../../tagInitials";
import { useUser } from "../../../context/user.context";
import { useEffect } from "react";
import { useCars } from "../../../context/cars.context";

const CardItem = ({ item, user }: any) => {
  const { GetCarsByUser } = useCars();
  const navigate = useNavigate();

  // useEffect(() => {
  //   GetCarsByUser(user.id);
  // }, []);

  return (
    <Item>
      <div className="div-img">
        <img
          src={item.images[0].url}
          alt={item.model}
          onClick={() => navigate(`/dashboard/${item.id}`)}
        />
      </div>
      <div className="div-info">
        <p className="info-title">
          {item.brand} - {item.model}
        </p>
        <p className="info-text">{item.description}</p>
      </div>
      <div className="div-user">
        <TagUserInitials
          firstName={user.firstname}
          lastName={user.lastname}
          uuid={user.id}
        />
        <Link
          to={`/dashboard/salesman/${user.id}`}
          className="user-fullname"
          onClick={() => GetCarsByUser(user.id)}
        >{`${user.firstname} ${user.lastname}`}</Link>
      </div>
      <div className="div-extra">
        <div className="extra-tags">
          <p>{item.kms}KM</p>
          <p>{item.year}</p>
        </div>
        <p>{item.price}</p>
      </div>
    </Item>
  );
};

export default CardItem;
