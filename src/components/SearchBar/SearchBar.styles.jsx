import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export const SearchContainer = styled.div`
  background-color: ${({ theme }) => theme.surface05};
  color: ${({ theme }) => theme.onSufaceContainer};
  width: max(300px, 640px);
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  margin: 4px;

  @media only screen and (max-width: 640px) {
    order: 3;
    margin: 12px 4px 1px;
  }
`;

export const SearchIcon = styled(MdSearch).attrs({ size: "1.5em" })`
  color: ${({ theme }) => theme.primary};
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "type to search...",
})`
  border: none;
  margin: 4px;
  background-color: transparent;
  color: ${({ theme }) => theme.onSurface};

  &::placeholder {
    color: ${({ theme }) => theme.onSurface};
  }

  &:focus {
    outline: none;
  }
`;
