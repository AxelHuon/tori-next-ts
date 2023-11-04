import React, { createContext, useState, useEffect, useContext } from "react";

interface Theme {
  mode: "light" | "dark";
}

const defaultTheme: Theme = { mode: "light" };

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme({ mode: storedTheme === "dark" ? "dark" : "light" });
      }
      setIsInitialized(true); // Set isInitialized to true after theme is set
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      mode: prevTheme.mode === "light" ? "dark" : "light",
    }));
  };

  useEffect(() => {
    if (isInitialized) {
      // Only update localStorage if theme is initialized
      localStorage.setItem("theme", theme.mode);
    }
  }, [theme, isInitialized]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {isInitialized ? children : null}
    </ThemeContext.Provider>
  );
};
