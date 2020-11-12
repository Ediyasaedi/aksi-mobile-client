import React, { useState } from "react";
import { View, Text } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

export default function Question() {
  const [value, setValue] = useState(0);
  let radio_props = [
    { label: "opsi 1", value: 0 },
    { label: "opsi 2", value: 1 },
    { label: "opsi 3", value: 2 },
    { label: "opsi 4", value: 3 },
  ];

  function setState(v) {
    setValue(v);
  }
  return (
    <View
      style={{
        backgroundColor: "powderblue",
        alignItems: "flex-start",
        justifyContent: "center",
        marginBottom: 10,
        padding: 10,
        width: 325,
      }}
    >
      <Text style={{ marginBottom: 15 }}>
        Ini pertanyaannya yah tolong dijawab dengan baik dan benar
      </Text>
      <RadioForm
        radio_props={radio_props}
        initial={value}
        onPress={(value) => {
          setState(value);
        }}
      />
    </View>
  );
}
