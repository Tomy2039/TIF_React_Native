import { Stack } from "expo-router";
import { NotesProvider } from "../context/NotesContext";

export default function Layout() {
  return (
    <NotesProvider>
      <Stack />
    </NotesProvider>
  );
}
