import React, { useContext } from "react";
import { View } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { AuthContext } from "../Route";
import { useSelector } from "react-redux";

export default function ProfileIcon({ navigation }) {
  const { signOut } = useContext(AuthContext);

  const imageUser = useSelector((state) => state.users.userLogin.image);
  return (
    <View
      style={{
        marginEnd: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar
        size="small"
        rounded
        source={{
          uri: imageUser,
        }}
        onPress={() => navigation.navigate("Profile")}
      />
      <View style={{ width: 20 }} />
      <Icon
        name="logout"
        type="material-community"
        color="gray"
        onPress={() => signOut()}
      />
    </View>
  );
}
