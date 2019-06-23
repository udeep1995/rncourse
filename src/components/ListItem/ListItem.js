import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image style={styles.placeImage} source={props.placeImage} />
      <Text style={styles.placeName}>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    flexDirection: "column",
    margin: 5,
    height: 100,
    backgroundColor: "#eee",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  placeImage: {
    height: 60,
    width: 60,
    resizeMode: "contain"
  },
  placeName: {}
});
export default listItem;
