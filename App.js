import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Form from "./Form";
import ImageGallery from "./ImageGallery";
// import Home from "./Home";
import Card from "./ImageGallery";
import { MyTabs } from "./MyTabs";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DisplayProduct from "./DisplayProduct";
import Upload from "./Upload";
import HomeWindow from "./HomeWindow";
import ImageDispalyWindow from "./ImageDispalyWindow";
import { useFonts } from 'expo-font'
import LoginScreen from "./LoginScreen.tsx";
// import "./ExportModule"





export default function App() {
  const [svich, setSvich] = useState(true);

  // const [fontsLoaded] = useFonts({
  //   'Raleway-Regular': require('./assets/Fonts/Raleway-Regular.ttf'),
  // });

  // const [tab2 , setTab2] = useState(false);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
  return (
   
      <NavigationContainer >
        {/* <MyTabs /> */}

      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeWindow} />
        <Stack.Screen name="DisplayProducts" component={DisplayProduct} />
        <Stack.Screen name="Upload" component={Upload} />
        <Stack.Screen name="DisplayImages" component={ImageDispalyWindow} />
      </Stack.Navigator>
      </NavigationContainer>
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
