import CardItem from "./cardItem";
import { items, user } from "./database";
import { List } from "./style";

const CardList = () => {
  return (
      <List>
        {items.map((item) => (
          <CardItem key={item.id} item={item} user={user} />
        ))}
      </List>
  );
};

export default CardList;
