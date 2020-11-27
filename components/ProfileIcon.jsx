import React from "react";
import { View } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { AuthContext } from "../Route";

export default function ProfileIcon({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
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
          uri: "https://www.fillmurray.com/640/360",
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
