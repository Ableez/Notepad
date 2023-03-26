import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./Components/Editor";
import Sidebar from "./Components/Sidebar";
export default function App(props) {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  const [currNoteId, setCurrNoteId] = useState((notes[0] && notes[0].id) || "");
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote(title) {
    const newNote = {
      id: nanoid(),
      title: title || "Untitled",
      body: "",
    };
    setNotes((prev) => [newNote, ...prev]);
    setCurrNoteId(newNote.id);
  }
  function updateNote(text) {
    setNotes((prev) => {
      const newArr = [];
      for (let i = 0; i < prev.length; i++) {
        const prevNote = prev[i];
        if (prevNote.id === currNoteId) {
          newArr.unshift({
            ...prevNote,
            body: text,
          });
        } else {
          newArr.push(prevNote);
        }
      }
      return newArr;
    });
  }

  function deleteNote(e, noteId) {
    e.stopPropagation();
    setNotes((prev) => prev.filter((note) => note.id !== noteId));
  }
  function findCurrNote() {
    return (
      notes.find((note) => {
        note.id === currNoteId;
      }) || notes[0]
    );
  }
  return (
    <div className="App flex box-border h-screen align-middle justify-center">
      {notes.length > 0 ? (
        <>
          <Sidebar
            notes={notes}
            currNote={findCurrNote}
            setCurrNoteId={setCurrNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          <Editor
            currNote={findCurrNote}
            updateNote={updateNote}
            dark={props.dark}
            changeTheme={props.changeTheme}
          />
        </>
      ) : (
        <div className="h-full grid place-items-center justify-center">
          <button className="bg-blue-500 p-2 rounded-lg" onClick={createNewNote}>Create New Note</button>
        </div>
      )}
    </div>
  );
}
