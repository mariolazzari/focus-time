import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Focus = () => {
  return (
    <View style={styles.container}>
      <Text>What you like to focus on</Text>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
});
