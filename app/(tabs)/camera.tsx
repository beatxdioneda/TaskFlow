import { CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          We need your permission to use the camera.
        </Text>

        <TouchableOpacity
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={styles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // 📸 TAKE PICTURE FUNCTION
  const takePicture = async () => {
    try {
      if (!cameraRef.current) return;

      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.7,
      });

      router.push({
        pathname: "/preview",
        params: {
          photo: photo.uri,
        },
      });
    } catch (error) {
      console.log("Camera Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing="back" />

      <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
        <Text style={styles.captureButtonText}>📷 Capture</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    flex: 1,
  },

  captureButton: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
  },

  captureButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  permissionText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },

  permissionButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },

  permissionButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
