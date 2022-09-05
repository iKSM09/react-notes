import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Navigation, Home, NotesApp, TodoApp } from "./routes";

import { AppContainer } from "./styles/App.styles";
import { GlobalStyles } from "./styles/GlobalStyles";
import { LIGHT_MODE, DARK_MODE } from "./styles/themes/themes";

const App = () => {
  const [theme, setTheme] = useState(LIGHT_MODE);

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme.id === "light" ? DARK_MODE : LIGHT_MODE;
    setTheme(currentTheme);
    localStorage.setItem("current-theme", JSON.stringify(currentTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyles />
        <Routes>
          <Route
            path="/"
            element={
              <Navigation
                handleToggleTheme={toggleTheme}
                currentTheme={theme.id}
              />
            }
          >
            <Route index element={<NotesApp />} />
            <Route path="todos" element={<TodoApp />} />
          </Route>
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
