import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const data = await AsyncStorage.getItem("notes");
    if (data) setNotes(JSON.parse(data));
  };

  const saveNotes = async (newNotes) => {
    setNotes(newNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const createNote = (note) => {
    const newNotes = [...notes, note];
    saveNotes(newNotes);
  };

  const updateNote = (id, updatedValues) => {
    const newNotes = notes.map(n => 
      n.id === id ? { ...n, ...updatedValues, updatedAt: new Date() } : n
    );
    saveNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter(n => n.id !== id);
    saveNotes(newNotes);
  };

  return (
    <NotesContext.Provider value={{ notes, createNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}
