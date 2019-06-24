import React from "react";
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const placeDetail = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image
          style={styles.placeImage}
          source={props.selectedPlace ? props.selectedPlace.image : null}
        />
        <Text style={styles.placeName}>
          {props.selectedPlace ? props.selectedPlace.name : null}
        </Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.actions}>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="md-trash" color="red" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onModalClosed}>
            <View style={styles.closeButton}>
              <Icon size={30} name="md-close-circle" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
    alignItems: "center"
  },
  placeImage: {
    height: 100,
    width: 100
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22
  },
  deleteButton: {
    alignItems: "center"
  },
  closeButton: {
    alignItems: "center"
  },
  actions: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default placeDetail;
