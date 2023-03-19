import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "./Card";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.chatSpace}>
        {/* {imageData !== null ? (
          <Image
            source={{ uri: imageData.assets[0].uri }}
            style={{ width: 200, height: 200 }}
          />
        ) : null} */}

        <Card imageData={imageData} />
        {/* <Card />
        <Card />
        <Card /> */}
      </View>
      {/* Add */}
      <View style={styles.inputSpace}>
        <View style={styles.textInput}>
          <TouchableOpacity
            onPress={pickImage}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.addBtn}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
  chatSpace: {
    width: "100%",
    height: "70%",
    backgroundColor: "white",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputSpace: {
    height: "10%",
    backgroundColor: "yellow",
    flex: 1 / 9,
    justifyContent: "center",
    alignItems: "center",
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  textInput: {
    width: "95%",
    height: "70%",
    backgroundColor: "black",
    borderRadius: 10,
  },
  addBtn: {
    color: "white",
  },
});
