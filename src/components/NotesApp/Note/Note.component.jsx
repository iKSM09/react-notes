import { useState } from "react";

import { useNotesContext } from "../../../contexts/notes.context";

import { AddNote } from "../../index.js";

import { NoteContainer, DeleteIcon } from "./Note.styles";

const Note = ({ note }) => {
  const [editable, setEditable] = useState(false);

  const { deleteNote } = useNotesContext();

  return (
    <>
      {editable ? (
        <AddNote text={note.text} id={note.id} setEditable={setEditable} />
      ) : (
        <NoteContainer>
          <div onClick={() => setEditable(true)}>{note.text}</div>
          <div className="note-footer">
            <small>{note.date}</small>
            <DeleteIcon onClick={() => deleteNote(note.id)} />
          </div>
        </NoteContainer>
      )}
    </>
  );
};

export default Note;
