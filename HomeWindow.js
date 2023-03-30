import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import DisplayProduct from "./DisplayProduct";
import Ionicons from "react-native-vector-icons/Ionicons";
import Upload from "./Upload";

const HomeWindow = ({ navigation }) => {
  return (
    <View style={styles.homeWindow}>
      {/* ScrapBuddy Title */}
      <View style={styles.HeadTitle}>
        <Text style={styles.HeadTitle_Text}> Scrap Buddy </Text>
      </View>
      {/* <Text>asd</Text> */}
      {/* Card */}
      <View style={{ height: "8%", 
      // backgroundColor: "red" 
      }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: "100%",
          }}
        >
          <View style={styles.categories}>
            <View style={styles.card_Categories}>
              <Text> Wood </Text>
            </View>
            <View style={styles.card_Categories}>
              <Text> Wood </Text>
            </View>
            <View style={styles.card_Categories}>
              <Text> Wood </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          display: "flex",
          position: "relative",
          height:"100%"
        }}
      >
        <View style={{ height: "80%", marginBottom: 10 }}>
          <ScrollView
            contentContainerStyle={
              {
                // flexGrow: 1,
                // justifyContent: "space-between",
                // display: "flex",
                // flexWrap: "wrap",
                // width: "100%",
                // height:'100%'
              }
            }
          >
            <DisplayProduct navigation={navigation} />
            {/* <Upload /> */}
          </ScrollView>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 15,
        }}
      >
        <Ionicons
          name='add-outline'
          onPress={() => navigation.navigate("Upload")}
          style={{
            backgroundColor: "white",
            borderRadius: 50,
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 30,
            paddingRight: 30,
          }}
          color={"black"}
          size={50}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeWindow: {
    width: "100%",
    height: "100%",
    // fontFamily: {OpenSans_400Regular}
    // backgroundColor: "red",
  },
  HeadTitle: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
    fontFamily:'Poppins'
    // paddingTop: 50,
    // paddingBottom: 50,
  },
  HeadTitle_Text: {
    color: "white",
    fontSize: 36,
    fontWeight: 700,
  },
  categories: {
    height: 50,
    paddingTop: 10,
    // paddingBottom: 50,
    display: "flex",
    flexDirection: "row",
  },
  card_Categories: {
    width: 200,
    height: 50,
    // height: 230,
    marginLeft: 10,
    borderRadius: 20,
    borderColor: "orange",
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },
});

export default HomeWindow;
