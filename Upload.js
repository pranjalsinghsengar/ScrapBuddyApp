import useState from "react-usestateref";
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Alert,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { ImageGallery } from "./ImageGallery";
// import useState from "react"
import * as ImagePicker from "expo-image-picker";
import { db, storage } from "./Config";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const Upload = () => {
  // const [language, setLanguage] = useState("");
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress, uploadProgressRef] = useState(0);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);
  const [disciption, setDisciption] = useState(null);
  const [urlOFImg, setUrlOfImg, urlOFImgRef] = useState(null);

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

  const uploadImage = async () => {
    // if (image != null || post != null || urlOFImg != null) {
    //   // uploadImage();
    // setUrlOfImg(null);
    //   setImage(null);
    //   setPost(null);
    // }
    // setUrlOfImg(null)
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
        setUploadProgress("Upload is " + progress + "% done");
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

          // uploadUserData();
          console.log("File available at", downloadURL);
          console.log("url image is herererere:", urlOFImgRef.current);
          // return;
        });
      }
    );
    // if (uploadTask == 100) {
    //   uploadUserData();
    // }

    // cloutd
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const uploadUserData = async () => {
    //   // setUrlOfImg(null)
    //   // uploadImage();
    await sleep(5000);
    try {
      const docRef = await addDoc(collection(db, "users"), {
        ImageUri: urlOFImgRef.current,
        Price: post,
        Disciption: disciption,
      });

      console.log(
        "Document written with ID: ",
        docRef.id,
        ":::ImageURI",

        image
      );
      console.log(post);
      if (
        image != null ||
        post != null ||
        disciption != null ||
        urlOFImg != null
      ) {
        //   // uploadImage();
        console.log("urlIMG------>:", urlOFImg);
        //   // setUrlOfImg(null);
        setImage(null);
        setPost(null);
        setDisciption(null);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const uploads = () => {
    if (disciption != null && post != null && image != null) {
      uploadImage().then(() => uploadUserData());

      let count = 5;
      if (uploadProgressRef.current == 99) {
        while (count) {
          ("${uploadProgressRef.current}");
          count--;
        }
      }

      //  sleep(5000);
      // if(uploadTask == 100){
      // uploadUserData();
      // }
    } else {
      Alert.alert("Please Fill All Sections");
    }

    console.log("File available INNN", urlOFImg);
  };

  // const uploadProcess = () =>{

  // }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/*==================== Add Image=================== */}
      {/* => Show Img On Display */}
      <Image
        style={{
          width: 250,
          height: 250,
          borderRadius: 10,
          shadowColor: "black",
          shadowOpacity: 0.3,
          marginBottom: 15,
        }}
        source={{ uri: image }}
      />

      <TouchableOpacity onPress={pickImage} style={styles.addBtn}>
        <Text style={styles.BtnTxt}>Add Image</Text>
      </TouchableOpacity>

      {/*===================== Price ======================*/}
      <TextInput
        style={styles.priceInputBox}
        value={post}
        onChangeText={(content) => setPost(content)}
        placeholder='Price'
        keyboardType='number-pad'
      />

      {/*========================== Catagory================ */}
      {/* <RNPickerSelect
        onValueChange={(language) => setLanguage(language)}
        items={[
          { label: "JavaScript", value: "JavaScript" },
          { label: "TypeScript", value: "TypeScript" },
          { label: "Python", value: "Python" },
          { label: "Java", value: "Java" },
          { label: "C++", value: "C++" },
          { label: "C", value: "C" },
        ]}
        style={pickerSelectStyles}
      /> */}
      {/*===================== Discription================= */}
      <View style={styles.inputDiscription}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            backgroundColor: "black",
            borderRadius: 10,
            padding: 5,
          }}
        >
          Discription
        </Text>
        <TextInput
          editable
          multiline
          style={{ margin: 15 }}
          value={disciption}
          onChangeText={(e) => setDisciption(e)}
          placeholder='Discription'
        />
      </View>
      {/* ==================Upload ===================*/}

      <Text></Text>
      <TouchableOpacity onPress={uploads} style={styles.addBtn}>
        <Text style={styles.BtnTxt}>UPLOAD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    width: 100,
    // height: 300,
    padding: 15,
    backgroundColor: "red",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15,
  },
  BtnTxt: {
    color: "white",
  },
  priceInputBox: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  inputDiscription: {
    width: "70%",
    height: 180,
    borderColor: "black",
    borderWidth: 1,
    padding: 4,
    borderRadius: 10,
  },
});

export default Upload;
