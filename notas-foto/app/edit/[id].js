import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { NotesContext } from "../../context/NotesContext";
import { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function EditNote() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { notes, updateNote } = useContext(NotesContext);

  const note = notes.find(n => n.id === id);

  const [title, setTitle] = useState(note?.title || "");
  const [desc, setDesc] = useState(note?.description || "");
  const [image, setImage] = useState(note?.image || "");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const save = () => {
    updateNote(id, {
      title,
      description: desc,
      image
    });

    router.push(`/note/${id}`);
  };

  if (!note) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Nota no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image
        source={{ uri: image }}
        style={{ width: 200, height: 200, borderRadius: 10 }}
      />

      <TouchableOpacity onPress={pickImage} style={{ marginTop: 15 }}>
        <Text>Cambiar Imagen</Text>
      </TouchableOpacity>

      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Título"
        style={{ borderBottomWidth: 1, marginTop: 20 }}
      />

      <TextInput
        value={desc}
        onChangeText={setDesc}
        placeholder="Descripción"
        style={{ borderBottomWidth: 1, marginTop: 20 }}
      />

      <TouchableOpacity
        onPress={save}
        style={{
          marginTop: 30,
          padding: 15,
          backgroundColor: "green",
          borderRadius: 10
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
}
