import { useNotesContext } from "../contexts/notes.context";

import { NotesList } from "../components";

import styled from "styled-components";

export const NotesAppContainer = styled.div`
  padding: 18px;
`;

const NotesApp = () => {
  const { notes, searchText } = useNotesContext();

  return (
    <NotesAppContainer>
      <div>
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
        />
      </div>
    </NotesAppContainer>
  );
};

export default NotesApp;
