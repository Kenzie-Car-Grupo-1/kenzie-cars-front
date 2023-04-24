import { useCars } from "../../context/cars.context";
import CardItem from "./cardItem";
import { List } from "./style";

const CardList = () => {
  const { ads } = useCars();
  return (
    <List>
      {ads.length > 0 &&
        ads.map((ad) => <CardItem key={ad.id} item={ad} user={ad.user} />)}
    </List>
  );
};

export default CardList;
