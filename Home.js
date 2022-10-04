
import React from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";

export default function Home({navigation, route}){
  return (
    <View  style={styles.center}>
     <Text>Email:</Text>
     <Text>{route.params.Email}</Text>
     <Text style={{ marginTop: 16,fontSize: 20, }}></Text>
  </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
