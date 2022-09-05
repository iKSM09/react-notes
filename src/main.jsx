import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import NotesProvider from "./contexts/notes.context";
import TodoProvider from "./contexts/todo.context";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NotesProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </NotesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
