import { Routes, Route } from "react-router-dom";

import { Navigation, Home, NotesApp, TodoApp } from "./routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<TodoApp />} />
          <Route path="notes" element={<NotesApp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
