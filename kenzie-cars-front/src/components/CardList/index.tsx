import { useCars } from "../../context/cars.context";
import CardItem from "./cardItem";
import { user } from "./database";
import { List } from "./style";

const CardList = () => {
  const { ads } = useCars();
  return (
    <List>
      {ads.length > 0 &&
        ads.map((ad) => <CardItem key={ad.id} item={ad} user={user} />)}
    </List>
  );
};

export default CardList;
