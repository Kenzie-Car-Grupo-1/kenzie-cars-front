import { Item } from "../../CardList/cardItem/style";
import TagUserInitials from "../../tagInitials";
import { StyledUserFullname } from "./style";
import Photo from "../../../assets/Photo.png";
import { useNavigate } from "react-router-dom";

const CardItemViewUser = ({ item, user }: any) => {
  const navigate = useNavigate();

  return (
    <Item onClick={() => navigate(`/dashboard/${item.id}`)}>
      <div className="div-img">
        <img src={item.images[0].url} alt={item.model}/>
        {/* <img src={Photo} alt="" /> */}
      </div>
      <div className="div-info">
        <p className="info-title">
          {item.brand} - {item.model}
        </p>
        <p className="info-text">{item.description}</p>
      </div>
      <div className="div-user">
        {user.firstname != undefined && (
          <TagUserInitials
            firstName={user.firstname}
            lastName={user.lastname}
            uuid={user.id}
          />
        )}
        <StyledUserFullname>{`${user.firstname} ${user.lastname}`}</StyledUserFullname>
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

export default CardItemViewUser;
