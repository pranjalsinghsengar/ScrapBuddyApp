import { async } from "@firebase/util";
import {
  doc,
  collection,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Image,
  View,
  ActivityIndicator,
  TextInput,
  Alert,
} from "react-native";
import { db } from "./Config";
// import Card from "./Card";

export default function Home(props) {
  const upload = () => {
    if (props.post && props.image != null) {
      props.uploadImage();

      props.uploadUserData();
    } else {
      Alert.alert("bsdk");
    }

    console.log("File available INNN", props.urlOFImg);
  };

  const [Arraydata, setArraydata] = useState([]);

  const ref = collection(db, "users");

  const getData = async () => {
    const data = await getDocs(ref);
    setArraydata(
      data.docs.map((items) => {
        return { ...items.data(), id: items.id };
      })
    );
    console.log(
      data.docs.map((items) => {
        return { ...items.data(), id: items.id };
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);
  // useEffect(() => {
  //   onSnapshot(ref, (users) =>
  //     setData(
  //       users.docs.map((category) => ({
  //         data: category.data(),
  //         id: category.id,
  //       }))
  //     )
  //   );
  //   console.log(data);
  // }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          height: "50%",
        }}
      >
        {Arraydata.map((item, key) => (
          <View style={{ width: 60, height: 60 }} key={key}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: item.ImageUri ? item.ImageUri : null }}
              alt='sad'
            />
            <Text>{item.disciption} </Text>
          </View>
        ))}
      </View>

      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: props.image }}
      />

      {/* Add */}
      <View style={styles.inputSpace}>
        <TouchableOpacity onPress={props.pickImage} style={styles.addBtn}>
          <Text>Add</Text>
        </TouchableOpacity>
        <View style={styles.textInput}>
          {/* INPUT TEXT */}

          <TextInput
            style={{ width: "100%", height: 100, color: "red" }}
            value={props.post}
            onChangeText={(content) => props.setPost(content)}
            placeholder='sex sux'
          />

          <TouchableOpacity onPress={upload} style={{}}>
            <Text style={styles.addBtn}>UPLOAD</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={getData}
            style={{
              backgroundColor: "red",
            }}
          >
            <Text style={styles.addBtn}>Fuking data</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  // container: {
  //   width: "100%",
  //   height: "100%",
  //   // backgroundColor: "red",
  // },

  inputSpace: {
    width: "100%",
    backgroundColor: "yellow",
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  textInput: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
  },
  addBtn: {
    color: "blue",
  },
});
