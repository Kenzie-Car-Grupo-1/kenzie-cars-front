import { StyledFilter } from "./style";

type FilterProps = {
  arrayFilter: {
    title: string;
    items: string[];
  }[];
};

const Filter = ({ arrayFilter }: FilterProps) => {
  return (
    <StyledFilter>
      {arrayFilter.map((filter, index) => (
        <div key={index}>
          <h2>{filter.title}</h2>
          <ul>
            {filter.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </StyledFilter>
  );
};

export default Filter;
