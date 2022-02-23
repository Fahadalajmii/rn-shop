import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { baseURL } from "../stores/instance";
import { Button, HStack } from "native-base";
import ProductList from "./ProductList";

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
const ShopItem = ({ shop }) => {
  return (
    <HStack space={5}>
      <Text>{shop.name}</Text>
      <Image source={{ uri: baseURL + shop.image }} style={styles.Image} />
      <Button
        title="learn more"
        color="blue.300"
        accessibilityLabel="learn more about this color"
      />
      <ProductList shop={shop}></ProductList>
    </HStack>
  );
};

export default ShopItem;
