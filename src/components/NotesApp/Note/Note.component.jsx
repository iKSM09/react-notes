import { useNotesContext } from "../../../contexts/notes.context";

import { NoteContainer, DeleteIcon } from "./Note.styles";

const Note = ({ note }) => {
  const { deleteNote } = useNotesContext();

  return (
    <NoteContainer>
      <div>{note.text}</div>
      <div className="note-footer">
        <small>{note.date}</small>
        <DeleteIcon onClick={() => deleteNote(note.id)} />
      </div>
    </NoteContainer>
  );
};

export default Note;
