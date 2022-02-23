import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { baseURL } from "../stores/instance";

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
const ProductItem = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
      <Image source={{ uri: baseURL + product.image }} style={styles.Image} />
    </View>
  );
};

export default ProductItem;
