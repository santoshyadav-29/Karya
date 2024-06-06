import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Index = () => {
  return (
    <View>
      <Text>Index</Text>
      <View>
        <Link href={"/(modals)/login"}>Login</Link>
        <Link href={"/(modals)/bookings"}>Bookings</Link>
        <Link href={"/listings/10"}>Id</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
