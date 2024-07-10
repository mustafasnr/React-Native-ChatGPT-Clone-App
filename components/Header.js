import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../colors";
import Icon from "react-native-vector-icons/Entypo";
import FIcon from "react-native-vector-icons/FontAwesome5";

export const Header = params => {
  return (
    <View style={style.container}>
      <View style={style.left}>
        <Icon
          name="menu"
          size={48}
          color={COLORS.theme_white}
          onPress={params.onPressFunction}
        />
      </View>
      <View style={style.middle}>
        <Text style={style.text}>Plus Abonesi Ol</Text>
        <Icon name="star" size={24} color={COLORS.theme_white}></Icon>
      </View>
      <View style={style.right}>
        <FIcon name="edit" size={24} color={COLORS.theme_white}></FIcon>
        <Icon
          name="dots-three-vertical"
          size={24}
          color={COLORS.theme_white}></Icon>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    paddingHorizontal: 10,
    height: "100%",
    backgroundColor: COLORS.thm_blck,
    flexDirection: "row",
    alignContent: "center",
  },
  left: {
    width: "25%",
    height: "100%",
    justifyContent: "center",
  },
  middle: {
    flex: 1,
    height: 35,
    alignSelf: "center",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: COLORS.gray,
    marginRight: 10,
  },
  right: {
    width: "25%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: COLORS.theme_white,
  },
});
export default Header;
