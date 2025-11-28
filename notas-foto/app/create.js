import React, { useState, useContext } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import * as Camera from "expo-camera";
import { NotesContext } from "../context/NotesContext";

export default function Create() {
  const router = useRouter();
  const { createNote } = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  const openCamera = async () => {
    const { status } = await Camera.Camera.requestCameraPermissionsAsync();
    if (status !== "granted") return;

    const result = await ImagePicker.launchCameraAsync({
      quality: 0.7
    });

    if (!result.canceled) setImage(result.assets[0].uri);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  const save = () => {
    const note = {
      id: Date.now().toString(),
      title,
      description: desc,
      image,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString()
    };

    createNote(note);
    router.push("/");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />

      <TextInput
        placeholder="Descripción"
        value={desc}
        onChangeText={setDesc}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />

      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      <TouchableOpacity onPress={openCamera} style={{ marginTop: 20 }}>
        <Text>Abrir Cámara</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImage} style={{ marginTop: 10 }}>
        <Text>Elegir de Galería</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={save}
        style={{ marginTop: 30, backgroundColor: "green", padding: 15 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Guardar Nota</Text>
      </TouchableOpacity>
    </View>
  );
}
