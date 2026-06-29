import { router, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PreviewScreen() {
  const { photo } = useLocalSearchParams();
  const handleAnalyze = async () => {
    try {
      const base64 = await FileSystem.readAsStringAsync(photo as string, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const result = await analyzeImage(base64);

      console.log(result);

      alert(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: photo as string }} style={styles.image} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Retake</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleAnalyze}>
          <Text style={styles.buttonText}>Analyze</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  image: {
    flex: 1,
    resizeMode: "contain",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
    backgroundColor: "#111",
  },

  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
