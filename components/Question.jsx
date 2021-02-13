import React, { useState } from "react";
import { View, Text } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

export default function Question({ question, getValue }) {
  const [value, setValue] = useState("");
  let radio_props = [
    { label: question.pilihan_a, value: question.pilihan_a },
    { label: question.pilihan_b, value: question.pilihan_b },
    { label: question.pilihan_c, value: question.pilihan_c },
    { label: question.pilihan_d, value: question.pilihan_d },
  ];

  function setState(v) {
    setValue(v);
    let payload = {
      id: question.id,
      soal: question.soal,
      kunci: question.kunci_jawaban,
      jawaban: v,
    };
    if (v === question.kunci_jawaban) {
      getValue(1, payload);
    } else {
      getValue(0, payload);
    }
  }

  return (
    <View
      style={{
        backgroundColor: "powderblue",
        alignItems: "flex-start",
        justifyContent: "center",
        marginBottom: 10,
        padding: 10,
      }}
    >
      <Text style={{ marginBottom: 15 }}>{question.soal}</Text>
      <View style={{ padding: 5, width: 275 }}>
        <RadioForm
          radio_props={radio_props}
          initial={value}
          onPress={(value) => {
            setState(value);
          }}
        />
      </View>
    </View>
  );
}
