import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import DisplayProduct from "./DisplayProduct";
import Home from "./Home";
import ImageGallery from "./ImageGallery";
import Upload from "./Upload";
import HomeWindow from "./HomeWindow";
import AiOutlineHome from "react-icons/ai";
import Ionicons from "react-native-vector-icons/Ionicons";
import Settings from "./Settings";
import ImageDispalyWindow from "./ImageDispalyWindow";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* <Tab.Screen name="IMG" component={ImageDispalyWindow}/> */}
      {/* <Tab.Screen
        name='Home'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' color={color} size={size} />
          ),
        }}
        component={HomeWindow}
      /> */}
      
      <Tab.Screen
        name='Upload'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='add-outline' color={color} size={size} />
          ),
        }}
        component={Upload}
      />
      {/* <Tab.Screen name='Settings' component={Settings} /> */}
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
}
