import { useAds } from "../../context/ads.context";
import CardItem from "./cardItem";
import { items, user } from "./database";
import { List } from "./style";

const CardList = () => {
  const { ads } = useAds();
  return (
    <List>
      {ads.map((ad) => (
        <CardItem key={ad.id} ad={ad} user={user} />
      ))}
    </List>
  );
};

export default CardList;
