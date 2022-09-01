import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: gray;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 1.5em;
`;

const SearchIcon = styled(MdSearch).attrs({ size: "1.3em" })``;

const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "type to search...",
})`
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const SearchBar = ({ handleSearchNote }) => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput onChange={(e) => handleSearchNote(e.target.value)} />
    </SearchContainer>
  );
};

export default SearchBar;
