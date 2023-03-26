import React, { useState } from "react";
import { View, Text, Image, Button } from "react-native";
import { firebase } from "./Config";

import * as ImagePicker from "expo-image-picker";
import Home from "./Home";

export default function ImageGallery() {
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const source = { uri: result.assets[0].uri };
    console.log(source);
    setImage(source);
  };

  const uploadImage = async () => {
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);
    var ref = firebase.storage().ref().child(filename).put(blob);

    try {
      await ref;
    } catch (e) {
      console.log(e);
    }
    setUploadProgress(false);
    setImage(null);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Button title='Pick Image' onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <Button title='Upload Image' onPress={uploadImage} /> */}
      <Home
        pickImage={pickImage}
        image={image}
        uploadImage={uploadImage}
        // uploadProgress={uploadProgress}
      />
    </View>
  );
}

{
  /* {uploadProgress > 0 && <Text>{uploadProgress}% uploaded</Text>} */
}
