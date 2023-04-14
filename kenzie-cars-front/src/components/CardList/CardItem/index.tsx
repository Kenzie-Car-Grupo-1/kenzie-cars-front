import { useNavigate } from "react-router-dom";
import Photo from "../../../assets/Photo.png";
import { Item } from "./style";

const CardItem = ({ ad, user }: any) => {
  const navigate = useNavigate();
  return (
    <Item>
      <div className="div-img">
        {/* <img src={ad.images[0]} alt="" /> */}
        <img
          src={ad.images[0]}
          alt={
            ad.model
          }
          onClick={() => navigate(`/dashboard/${ad.id}`)}
        />
      </div>
      <div className="div-info">
        <p className="info-title">
          {ad.brand} - {ad.model}
        </p>
        <p className="info-text">{ad.description}</p>
      </div>
      <div className="div-user">
        <p className="user-initials">{`${user.firstname[0]}${user.lastname[0]}`}</p>
        <p className="user-fullname">{`${user.firstname} ${user.lastname}`}</p>
      </div>
      <div className="div-extra">
        <div className="extra-tags">
          <p>{ad.kms}KM</p>
          <p>{ad.year}</p>
        </div>
        <p>{ad.price}</p>
      </div>
    </Item>
  );
};

export default CardItem;
