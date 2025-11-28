import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { NotesContext } from "../context/NotesContext";
import { useContext } from "react";

export default function Home() {
  const router = useRouter();
  const { notes } = useContext(NotesContext);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableOpacity
        onPress={() => router.push("/create")}
        style={{ backgroundColor: "#2196F3", padding: 15, borderRadius: 10 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Crear Nota</Text>
      </TouchableOpacity>

      <FlatList
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/note/${item.id}`)}
            style={{ flexDirection: "row", marginTop: 20 }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 70, height: 70, borderRadius: 10 }}
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontSize: 18 }}>{item.title}</Text>
              <Text style={{ color: "gray" }}>{item.createdAt}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
