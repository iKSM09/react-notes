import styled from "styled-components";

const Icon = styled.span`
  width: ${(props) => props.iconSize || "24px"};
  height: ${(props) => props.iconSize || "24px"};
  padding: 2px;
  margin: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  * {
    width: 100%;
    height: 100%;
  }
`;

export default Icon;
