import { FilterDiv } from './Filter.styled.js';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <FilterDiv>
      Find contacts by name
      <input
        type="text"
        name="filter"
        filter={filter}
        onChange={onChangeFilter}
      />
    </FilterDiv>
  );
};
