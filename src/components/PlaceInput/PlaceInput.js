import React, { Component } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };
  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim("") === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
  };
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
          placeholder="Your name"
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%",
    borderBottomWidth: 2
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
