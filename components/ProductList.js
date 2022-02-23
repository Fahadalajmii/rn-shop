import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ shop }) => {
  const productList = shop.products.map((product) => (
    <ProductItem product={product} />
  ));
  return <View>{productList}</View>;
};

export default ProductList;

const styles = StyleSheet.create({});
