import { useState } from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";

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

const NotesList = ({ notes }) => {
  return (
    <NotesContainer>
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
      <AddNote />
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

  .note-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const AddNote = () => {
  return (
    <AddNoteContainer>
      <textarea
        id=""
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
      ></textarea>
      <div className="note-footer">
        <small>200 Remaining</small>
        <button className="save">Save</button>
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

const Note = ({ note }) => {
  return (
    <NoteContainer>
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{note.date}</small>
        <MdDelete className="delete-icon" size="1.3em" />
      </div>
    </NoteContainer>
  );
};

const NotesApp = () => {
  const [noteText, setNoteText] = useState("");
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

  const saveNote = (id) => {
    const updatedNote = notes.map((note) =>
      note.id === id ? { ...note, body: noteText } : note
    );

    setNotes(updatedNote);
  };

  return (
    <div>
      <div>
        <NotesList notes={notes} />
      </div>
    </div>
  );
};

export default NotesApp;
