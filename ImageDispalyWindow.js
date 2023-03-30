import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ImageDispalyWindow = ({ navigation, route }) => {
  const selectedImage = route.params.image;
  const showPrice = route.params.price;
  const showDiscription = route.params.discription;
  return (
    <View style={{ position: "relative",height:"100%" }}>
      <Image
        style={{ width: 500, height: '40%',backgroundColor:"grey"}}
        source={{ uri: selectedImage }}
        alt='Opps'
        
      />
      <View style={styles.aboutContainer}>
        <View style={styles.innerAboutContainer}>
          {/* Discription */}
          <View styles={{ width: "90%", backgroundColor: "black" }}>
            <Text style={{ fontSize: 16 * 2.5 }}>RS: {showPrice}</Text>
            <View style={{marginTop:30}}>

            <Text
              style={{
                borderTopWidth:1,
                  borderBottomWidth: 1,
                  color: "black",
                  textAlign: "center",
                fontSize: 22,
              }}
            >
              About
            </Text>
                  </View>

            <View
              style={{
                height:"80%",
                padding: 20,
                display: "flex",
                // alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
                <View>

              <Text
                style={{
                    letterSpacing: 1,
                    textTransform: "capitalize",
                    width: 200,
                  color: "black",
                  fontSize: 20,
                //   backgroundColor:"black"
                }}
                >
                {showDiscription}
              </Text>
                  </View>
              <TouchableOpacity
                style={{
                    width:"100%",
                  borderRadius: 10,
                  paddingVertical: 20,
                  backgroundColor: "orange",
                }}
              >
                <Text style={{ textAlign: "center" }}>Get Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* bottons */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    // position:"absolute",
    position: "relative",
    // top:340,
    width: "100%",
    backgroundColor: "grey",
    height:"60%"
  },
  innerAboutContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
    backgroundColor: "white",
    height: '110%',
    top: "-10%",
    width: "100%",
    display: "flex",
    // alignItems:"center",
    padding: 30,
    // justifyContent:"start"
  },
});

export default ImageDispalyWindow;
