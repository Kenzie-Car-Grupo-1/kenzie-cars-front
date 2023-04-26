import { Link, useNavigate } from "react-router-dom";
import { Item } from "./style";
import TagUserInitials from "../../tagInitials";

const CardItem = ({ item, user }: any) => {
  const navigate = useNavigate();

  return (
    <Item>
      {user && (
        <>
          <div className="div-space">
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
          </div>
          <div className="div-space">
            <div className="div-user">
              <TagUserInitials
                firstName={user.firstname}
                lastName={user.lastname}
                uuid={user.id}
              />
              <Link
                to={`/dashboard/salesman/${user.id}`}
                className="user-fullname"
              >{`${user.firstname} ${user.lastname}`}</Link>
            </div>
            <div className="div-extra">
              <div className="extra-tags">
                <p>{item.kms}KM</p>
                <p>{item.year}</p>
              </div>
              <p>
                {parseFloat(item.price).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                  minimumIntegerDigits: 1,
                  useGrouping: true,
                })}
              </p>
            </div>
          </div>
        </>
      )}
    </Item>
  );
};

export default CardItem;
