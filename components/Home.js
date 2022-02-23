import { Button, StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import ShopList from "./ShopList";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
