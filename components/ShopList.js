import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { observer } from "mobx-react-lite";
import ShopItem from "./ShopItem";
import shopStore from "../stores/shopStore";

const ShopList = () => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} />
  ));

  return <View>{shopList}</View>;
};

export default observer(ShopList);

const styles = StyleSheet.create({});
