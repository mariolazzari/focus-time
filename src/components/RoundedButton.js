import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const RoundedButton = ({
  size = 125,
  style = {},
  textStyle = {},
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius]}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = size =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      borderColor: "#fff",
      borderWidth: 2,
    },
    text: {
      color: "white",
      fontSize: size / 3,
    },
  });
