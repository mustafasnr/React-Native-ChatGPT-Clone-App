import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../colors";
export const RowContainerItem = ({ title, navigation }) => {
  return (
    <Pressable
      style={styles.rowContainer}
      onPress={() => {
        navigation.navigate("Home", { title: title });
        navigation.closeDrawer();
      }}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export const DateItem = ({ title }) => {
  return (
    <View style={styles.rowDateContainer}>
      <View style={styles.LINE}></View>
      <Text
        style={{
          fontSize: 18,
          width: "100%",
          alignSelf: "center",
          color: COLORS.theme_white,
        }}>
        {title}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  LINE: {
    width: "100%",
    height: 1,
    marginBottom: 15,
    backgroundColor: COLORS.theme_white,
    alignSelf: "center",
  },
  rowContainer: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    height: 50,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    fontWeight: "400",
    color: "#fff",
    width: "100%",
  },
  rowDateContainer: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
  },
});
