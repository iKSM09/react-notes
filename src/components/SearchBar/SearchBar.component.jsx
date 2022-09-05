import { useNotesContext } from "../../contexts/notes.context";

import { SearchContainer, SearchIcon, SearchInput } from "./SearchBar.styles";

const SearchBar = () => {
  const { setSearchText } = useNotesContext();

  const handleSearchNote = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput onChange={(e) => handleSearchNote(e)} />
    </SearchContainer>
  );
};

export default SearchBar;
