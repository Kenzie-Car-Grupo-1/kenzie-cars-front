import { useCars } from "../../context/cars.context";
import CardItem from "./cardItem";
import { user } from "./database";
import { List } from "./style";

const CardList = () => {
  const { ads } = useCars();
  return (
    <List>
      {ads.length && ads.map((ad) => (
        <CardItem key={ad.id} ad={ad} user={user}/>
      ))}
    </List>
  );
};

export default CardList;
