import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";

export default function NoteDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { notes, deleteNote } = useContext(NotesContext);

  const note = notes.find(n => n.id === id);

  if (!note) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Nota no encontrada</Text>
      </View>
    );
  }

  const remove = () => {
    Alert.alert(
      "Eliminar Nota",
      "¿Seguro que querés eliminar esta nota?",
      [
        { text: "Cancelar" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => {
            deleteNote(id);
            router.push("/");
          }
        }
      ]
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image
        source={{ uri: note.image }}
        style={{ width: "100%", height: 250, borderRadius: 15 }}
      />
      <Text style={{ fontSize: 24, marginTop: 20 }}>{note.title}</Text>
      <Text style={{ marginTop: 10 }}>{note.description}</Text>
      <Text style={{ marginTop: 10, color: "gray" }}>
        Creado: {note.createdAt}
      </Text>

      <TouchableOpacity
        onPress={() => router.push(`/edit/${id}`)}
        style={{
          marginTop: 30,
          padding: 15,
          backgroundColor: "#2196F3",
          borderRadius: 10
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={remove}
        style={{
          marginTop: 10,
          padding: 15,
          backgroundColor: "red",
          borderRadius: 10
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
}
