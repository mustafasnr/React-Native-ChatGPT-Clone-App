import React from "react";
import { View, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { COLORS } from "../colors";
import { Title } from "react-native-paper";

export const FourDotIcon = () => {
  return (
    <View style={{ width: 30, height: 30, backgroundColor: "transparent" }}>
      <View
        style={{
          width: "100%",
          height: "50%",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}>
        <Icon name="dot" size={20} color={"white"}></Icon>
        <Icon name="dot" size={20} color={"white"}></Icon>
      </View>
      <View
        style={{
          width: "100%",
          height: "50%",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}>
        <Icon name="dot" size={20} color={"white"}></Icon>
        <Icon name="dot" size={20} color={"white"}></Icon>
      </View>
    </View>
  );
};
export const GptLogo = params => {
  return (
    <Pressable
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 60 * params.size,
        height: 60 * params.size,
        borderRadius: 30 * params.size,
        backgroundColor: COLORS.theme_white,
      }}
      onPress={() => {
        params.navigation.navigate("Home", { title: "" });
        params.navigation.closeDrawer();
      }}>
      <Image
        source={require("../assets/chatgptlogo.png")}
        style={{
          width: 40 * params.size,
          height: 40 * params.size,
        }}
      />
    </Pressable>
  );
};
