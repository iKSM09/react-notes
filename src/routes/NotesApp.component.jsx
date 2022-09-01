import { useState, useEffect } from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";

import SearchBar from "../components/SearchBar/SearchBar.component";

const Container = styled.div`
  max-width: 960px;
  margin-inline: auto;
  padding-inline: 15px;
`;

const NotesContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const TextArea = styled.textarea`
  border: none;
  background-color: transparent;
  resize: none;
`;

const NotesList = ({ notes, handleAddNote, handleDeletingNote }) => {
  return (
    <NotesContainer>
      {notes.map((note) => (
        <Note
          note={note}
          key={note.id}
          handleDeletingNote={handleDeletingNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </NotesContainer>
  );
};

const NoteContainer = styled.div`
  background-color: darkgray;
  border-radius: 10px;
  padding: 1rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;

  .note-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const CHAR_LIMIT = 200;

  const handleChange = (e) => {
    if (CHAR_LIMIT - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveNote = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
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
        <button className="save" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </AddNoteContainer>
  );
};

const AddNoteContainer = styled.div`
  background-color: gray;

  border-radius: 10px;
  padding: 1rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  textarea {
    background-color: transparent;
    border: none;
    /* outline: none; */
    resize: none;

    &:focus {
      outline: none;
    }
  }

  .note-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .save {
      background-color: #212121;
      border: none;
      border-radius: 15px;
      padding: 5px 10px;

      &:hover {
        background-color: #9e9e9e;
        cursor: pointer;
      }
    }
  }
`;

const DeleteIcon = styled(MdDelete).attrs({ size: "1.3em" })`
  cursor: pointer;
`;

const Note = ({ note, handleDeletingNote }) => {
  return (
    <NoteContainer>
      <div>{note.text}</div>
      <div className="note-footer">
        <small>{note.date}</small>
        <DeleteIcon onClick={() => handleDeletingNote(note.id)} />
      </div>
    </NoteContainer>
  );
};

const NotesApp = () => {
  const [notes, setNotes] = useState([
    {
      id: "001",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      date: "31/08/2022",
    },
    {
      id: "002",
      text: "Lorem ipsum dolor sit amet.",
      date: "30/08/2022",
    },
    {
      id: "003",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum.",
      date: "29/08/2022",
    },
    {
      id: "004",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      date: "28/08/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const newNote = {
      id: new Date().getTime.toString(),
      text: text,
      date: new Date().toLocaleDateString(),
    };

    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotesList = notes.filter((note) => note.id !== id);
    setNotes(updatedNotesList);
  };

  const saveNote = (id) => {
    const updatedNote = notes.map((note) =>
      note.id === id ? { ...note, body: noteText } : note
    );

    setNotes(updatedNote);
  };

  return (
    <div>
      <SearchBar handleSearchNote={setSearchText} />
      <div>
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeletingNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default NotesApp;
