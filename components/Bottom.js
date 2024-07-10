import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import FIcon from "react-native-vector-icons/Foundation";
export const Bottom = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.leftIconContainer}>
          <Icon
            name="add"
            color={COLORS.white}
            size={32}></Icon>
        </View>
      </View>
      <View style={styles.middle}>
        <TextInput
          style={styles.textInput}
          placeholder="İleti"
          placeholderTextColor={COLORS.white}></TextInput>
        <View style={styles.middleIconContainer}>
          <FIcon name="microphone" size={32} color={COLORS.theme_white}></FIcon>
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.rightIconContainer}>
          <Icon name="headphones" size={36} color={COLORS.theme_white}></Icon>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  left: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  leftIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.gray,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  middle: {
    flex: 4,
    height: "80%",
    marginHorizontal: 10,
    paddingLeft: 15,
    backgroundColor: COLORS.gray,
    borderRadius: 35,
    flexDirection: "row",
  },
  textInput: {
    width: "75%",
    fontSize: 22,
    color: COLORS.theme_white,
  },
  middleIconContainer: {
    width: "25%",
    height: "100%",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  right: { flex: 1, height: "100%" },
  rightIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
export default Bottom;
