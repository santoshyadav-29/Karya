import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <View>
              <Text>🏠</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: () => (
            <View>
              <Text>🔍</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="wishlists"
        options={{
          tabBarLabel: "Wishlists",
          tabBarIcon: () => (
            <View>
              <Text>📝</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <View>
              <Text>👤</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: () => (
            <View>
              <Text>⚙️</Text>
            </View>
          ),
        }}
      />
      
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default Layout;
