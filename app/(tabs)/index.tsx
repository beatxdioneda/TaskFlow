import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };
  return (
    <View style={styles.container}>
      {" "}
      <View style={headerStyles.header}>
        {" "}
        <Text style={headerStyles.title}>TaskFlow</Text>{" "}
      </View>{" "}
      <View style={styles.inputRow}>
        {" "}
        <TextInput
          style={styles.input}
          placeholder="Enter Task"
          value={task}
          onChangeText={setTask}
        />{" "}
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          {" "}
          <MaterialIcons name="add" size={22} color="#fff" />{" "}
        </TouchableOpacity>{" "}
      </View>{" "}
      {tasks.map((item, index) => (
        <View key={index} style={styles.taskRow}>
          {" "}
          <MaterialIcons
            name="check-box-outline-blank"
            size={20}
            color="#5A6472"
          />{" "}
          <Text style={styles.taskText}>{item}</Text>{" "}
        </View>
      ))}{" "}
    </View>
  );
}
const headerStyles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 16,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: { fontSize: 28, fontWeight: "bold", color: "#1F2A44" },
});
const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, backgroundColor: "#fff" },
  inputRow: { flexDirection: "row", marginBottom: 20 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#2E5BBA",
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  taskText: { fontSize: 15 },
});
