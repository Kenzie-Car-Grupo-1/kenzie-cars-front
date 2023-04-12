import Photo from "../../../assets/Photo.png";
import { Item } from "./style";


const CardItem = ({ item, user }: any) => {
  return (
    <Item>
      <div className="div-img">
        {/* <img src={item.images[0]} alt="" /> */}
        <img src={Photo} alt={item.model} />
      </div>
      <div className="div-info">
        <p className="info-title">
          {item.brand} - {item.model}
        </p>
        <p className="info-text">{item.description}</p>
      </div>
      <div className="div-user">
        {/* <img src={LogoUserEx} alt="" /> */}
        <p className="user-initials">{`${user.firstname[0]}${user.lastname[0]}`}</p>
        <p className="user-fullname">{`${user.firstname} ${user.lastname}`}</p>
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
