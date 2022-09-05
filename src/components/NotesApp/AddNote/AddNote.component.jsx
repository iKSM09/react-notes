import { useState } from "react";

import { useNotesContext } from "../../../contexts/notes.context";
import { AddNoteContainer } from "./AddNote.styles";

export const AddNote = () => {
  const [noteText, setNoteText] = useState("");
  const { addNote } = useNotesContext();
  const CHAR_LIMIT = 200;

  const handleChange = (e) => {
    if (CHAR_LIMIT - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveNote = (noteText) => {
    if (noteText.trim().length > 0) {
      addNote(noteText);
      setNoteText("");
    }
  };

  return (
    <AddNoteContainer>
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{CHAR_LIMIT - noteText.length} Remaining</small>
        <button className="save" onClick={() => handleSaveNote(noteText)}>
          Save
        </button>
      </div>
    </AddNoteContainer>
  );
};

export default AddNote;
