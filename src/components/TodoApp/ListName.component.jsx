import { useState, useEffect } from "react";
import styled from "styled-components";

const ListNameInput = styled.input.attrs({ type: "text" })`
  border: none;
  border-bottom: 2px solid gray;
  outline: none;
  background: transparent;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const ListName = () => {
  const [listName, setListName] = useState("My Task");
  const [editListName, setEditListName] = useState(false);

  useEffect(() => {
    if (!localStorage.listName) {
      localStorage.setItem("listName", JSON.stringify(listName));
    }

    const localListName = JSON.parse(localStorage.getItem("listName"));
    setListName(localListName === "" ? listName : localListName);
  }, []);

  const changeListName = (e) => {
    if (e.key === "Enter") {
      setListName(e.target.value);
      setEditListName(false);
      localStorage.listName = JSON.stringify(e.target.value);
    }
  };

  return (
    <>
      {editListName ? (
        <ListNameInput
          type="text"
          defaultValue={listName}
          onKeyDown={(e) => changeListName(e)}
        />
      ) : (
        <h2 onClick={() => setEditListName(true)}>{listName}</h2>
      )}
    </>
  );
};

export default ListName;
