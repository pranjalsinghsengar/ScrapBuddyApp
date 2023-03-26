import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, Image, Button, Alert } from "react-native";
import { db, storage } from "./Config";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

import * as ImagePicker from "expo-image-picker";
import Home from "./Home";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

export default function ImageGallery() {
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);
  const [urlOFImg, setUrlOfImg] = useState("");
  // const storage = getStorage()
  // const storageRef = ref(storage);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   console.log(result)
  //   const source = { uri: result.assets[0].uri };
  //   console.log("imgSRC",source);
  //   setImage(source);

  // };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    // if (!result.canceled) {
    setImage(result.assets[0].uri);
    // }
  };

  // useEffect(() => {
  const uploadImage = async () => {
    // Convert Blob to Image Format
    const blobImage = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("netWork Request Faild"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });
    // setMeta Data to Image
    const metadata = {
      contentType: "image/jpeg",
    };

    // Upload Image to Storage

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "images/" + Date.now());
    const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);
    // ==========================

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },

      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrlOfImg(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
    // cloutd
  };

  // if (image != null) {
  //   uploadImage();
  //   setImage(null);
  // }
  // }, [image]);

  // CLOUD FIREBASE STORAGE

  const uploadUserData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        ImageUri: urlOFImg,
        disciption: post,
      });

      console.log(
        "Document written with ID: ",
        docRef.id,
        ":::ImageURI",
        image
      );
      console.log(post);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    if (image != null) {
    uploadImage();
    setImage(null);
    setPost(null);
  }
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
        // uploadImage={uploadImage}
        uploadProgress={uploadProgress}
        transferred={transferred}
        setTransferred={setTransferred}
        setPost={setPost}
        post={post}
        uploadUserData={uploadUserData}
        uploadImage={uploadImage}
        // uploadProgress={uploadProgress}
      />
    </View>
  );
}

{
  /* {uploadProgress > 0 && <Text>{uploadProgress}% uploaded</Text>} */
}
