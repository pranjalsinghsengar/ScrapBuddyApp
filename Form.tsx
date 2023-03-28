import React, { useState } from "react";
import { View, Text, Picker, Button } from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "./Config";

const Form = () => {
  const [selection, setSelection] = useState("");

  const handleSelectionChange = (value) => {
    setSelection(value);
  };

  const handleUpload = () => {
    firebase
      .db()
      .collection("myCollection")
      .add({
        option: selection,
      })
      .then(() => {
        console.log("Document successfully uploaded to Firebase!");
      })
      .catch((error) => {
        console.error("Error uploading document to Firebase: ", error);
      });
  };

  return (
    <View>
      <Text>Choose an option:</Text>
      <Picker selectedValue={selection} onValueChange={handleSelectionChange}>
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>
      <Button title="Upload" onPress={handleUpload} />
    </View>
  );
};

export default Form;
