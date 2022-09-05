import { Note, AddNote } from "../../index.js";

import { NotesContainer } from "./NotesList.styles";

const NotesList = ({ notes }) => {
  return (
    <NotesContainer>
      <AddNote />
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </NotesContainer>
  );
};

export default NotesList;
