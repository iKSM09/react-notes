import { useState, useEffect, createContext, useContext } from "react";

export const NotesContenxt = createContext();

const NotesProvider = ({ children }) => {
  const localNotesList = JSON.parse(localStorage.getItem("notesList")) || [];
  const [notes, setNotes] = useState(localNotesList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const initialNotesListState = [
      {
        id: "0000",
        text: "Welcome... Feel free to write what's on your mind!",
        date: "Today",
      },
    ];

    localNotesList && localNotesList.length === 0
      ? setNotes(initialNotesListState)
      : setNotes(localNotesList);
  }, []);

  useEffect(() => {
    localStorage.notesList = JSON.stringify(notes);
  }, [notes]);

  const addNote = (text, id) => {
    const newNote = {
      id: new Date().getTime().toString(),
      text: text,
      date: new Date().toLocaleDateString(),
    };

    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotesList = notes.filter((note) => note.id !== id);
    setNotes(updatedNotesList);
  };

  // const editNote = (e) => {
  //   console.log(e);
  // };

  // const filterNotes = (notes, searchText) => {
  //   notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText));
  // };

  const value = {
    notes,
    setNotes,
    searchText,
    setSearchText,
    addNote,
    deleteNote,
    // editNote,
    // filterNotes,
  };

  return (
    <NotesContenxt.Provider value={value}>{children}</NotesContenxt.Provider>
  );
};

export const useNotesContext = () => useContext(NotesContenxt);

export default NotesProvider;
