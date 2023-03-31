import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  Button,
  Image,
  View,
  ActivityIndicator,
  TextInput,
  Alert,
  StyleSheet,
  ScrollView,Pressable
} from "react-native";
import {
  doc,
  collection,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./Config";

import Ionicons from "react-native-vector-icons/Ionicons";

import Upload from "./Upload";
// import Icon from 'react-native-ionicons'

const DisplayProduct = ({ navigation }) => {
  const [Arraydata, setArraydata] = useState([]);
  const ref = collection(db, "users");

  const [refreshing, setRefreshing] = useState(true);
  const [userData, setUserData] = useState([]);


  const [uploadOption, setUploadOption] = useState(false);

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


  const optionHandler = () =>{
    setUploadOption(!uploadOption)
    getData()
  }
  
 
  return (
    <View>
      {/* <ScrollView
        contentContainerStyle={{
          //   flex: 1,
          display: "flex",
          width: "100%",
          // height:"100%"
          //   justifyContent: 'center'
        }}
      > */}
      <View
        style={{
          display: "flex",
          flexWrap: "wrap",
          // justifyContent: "center",
          // alignItems: "center",
          width: '100%',
          paddingBottom:170,
            // height:"100%",

          flexDirection: "row",
          justifyContent:"space-evenly",
          //   height:"100%"
          //   height: "100%",
          // backgroundColor: "red",
          // marginBottom: 150,
          alignItems:"center"
        }}
      >
        {Arraydata.map((item, key) => (
          <Pressable
            style={{
              width: 190,
              height: 250,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              overflow: "hidden",
              marginVertical: 10,
              position:"relative"
            }}
            onPress={() => navigation.navigate("DisplayImages",{image:item.ImageUri,price: item.Price ,discription:item.Disciption})}
            // onPress={()=> {openImg(item.ImageUri)}}
            key={key}
          >
            {/* <TouchableOpacity></TouchableOpacity> */}
            <Image
              style={{ width: "100%", height: "100%",backgroundColor:"grey"}}
              source={{ uri: item.ImageUri ? item.ImageUri : null }}
              alt='sad'
            />
            <View
              style={{
                backgroundColor: "white",
                height: "15%",
                width: "90%",
                borderRadius:50,
              paddingVertical:5,
              position:"absolute",
              bottom:10
              }}
            >
              <Text
                style={{
                  // backgroundColor: "black",
                  textAlign: "center",
                  color: "black",
                  fontSize:20,
                }}
                onPress={() => navigation.navigate("DisplayImages")}
              >
                Rs: {item.Price}
              </Text>
              {/* Discription */}
              {/* <Text
                style={{
                  backgroundColor: "black",
                  textAlign: "center",
                  color: "white",
                }}
              >
                {item.Disciption}
              </Text> */}
            </View>
          </Pressable>
        ))}
      </View>

      {/* </ScrollView> */}
      {/* <View style={styles.Reload}>
      {uploadOption ? 
        <Ionicons name='home'size={30} onPress={()=>navigation.navigate('Upload')} style={styles.optionStyleBtn} />
   
      :null}
        <Ionicons name='home'size={30}  onPress={optionHandler} style={styles.optionStyleBtn} />
      </View> */}

      
    </View>
  );
};

const styles = StyleSheet.create({
  Reload: {
    // width: 60,
    // height:60,
    // position: "absolute",
    // right: 0,
    // bottom:0,
    width:"100%",
    backgroundColor:"blue",
    padding:10,
    
    
    color: "White",
    display:"flex",
    justifyContent:"center",
 alignItems:"center"   
  },
  ReloadBtn:{
    width:50,
    height:50,
  },
  optionStyleBtn:{
    color:"white",
    backgroundColor: "grey",
    borderRadius:50,
    padding:10,
    margin:2,
  }
});

export default DisplayProduct;
