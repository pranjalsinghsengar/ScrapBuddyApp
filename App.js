import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Form from "./Form";
import ImageGallery from "./ImageGallery";
// import Home from "./Home";
import Card from "./ImageGallery";

export default function App() {
  const [svich, setSvich] = useState(true);

  // const [tab2 , setTab2] = useState(false);

  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Tab2/> */}
      {/* <ImageGallery /> */}
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
