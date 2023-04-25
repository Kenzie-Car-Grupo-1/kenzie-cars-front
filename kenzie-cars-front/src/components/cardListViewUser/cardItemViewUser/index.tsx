import { Item } from "../../CardList/cardItem/style";
import TagUserInitials from "../../tagInitials";
import { StyledUserFullname } from "./style";

const CardItemViewUser = ({ item, user }: any) => {
  return (
    <Item>
      <div className="div-img">
        <img src={item.images[0].url} alt={item.model} />
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
