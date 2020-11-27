import React from "react";
import { TouchableOpacity, Image } from "react-native";

export default function Logo({ navigation: { navigate } }) {
  return (
    <TouchableOpacity onPress={() => navigate("Home")}>
      <Image
        style={{ width: 80, height: 35 }}
        source={{
          uri:
            "http://aksi.puspendik.kemdikbud.go.id/membacadigital/kelas-10/data/images/logo.png",
        }}
      />
    </TouchableOpacity>
  );
}
