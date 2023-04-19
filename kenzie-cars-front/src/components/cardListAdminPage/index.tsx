import { items } from "../CardList/database";
import CardItemAdminPage from "./cardItemAdminPage";
import { List } from "./style";

const CardListAdminPage = () => {
    return (
      <List>
        {items.length > 0 && items.map((item) => (
          <CardItemAdminPage key={item.id} item={item} />
        ))}
      </List>
    );
  };
  
  export default CardListAdminPage;