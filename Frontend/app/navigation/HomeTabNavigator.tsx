import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "./routes";
import defaultStyles from "../config/styles";
import HomeScreen from "../screens/HomeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import colors from "../config/colors";
import OffersScreen from "../screens/OffersScreen";
import { Promo } from "../utils/constants";
import AccountScreen from "../screens/AccountScreen";
import { useBearStore } from "../store";
import HomeOfRiderScreen from "../screens/HomeOfRiderScreen";

export type HomeTabNavigatorParamList = {
  [routes.HOME]: {
    promo: Promo | null;
  };
  [routes.HOME_OF_RIDER]: undefined;
  [routes.ACCOUNT]: undefined;
  [routes.HISTORY]: undefined;
  [routes.OFFERS]: undefined;
};

interface TabIconProps {
  color: string;
  size: number;
}

const tabToolsIcon = ({ color, size }: TabIconProps) => (
  <MaterialCommunityIcons color={color} name="car" size={size} />
);

const tabAccountIcon = ({ color, size }: TabIconProps) => (
  <Ionicons name="person" color={color} size={size} />
);

const tabHistoryIcon = ({ color, size }: TabIconProps) => (
  <MaterialCommunityIcons color={color} name="clock" size={size} />
);

const tabOfferIcon = ({ color, size }: TabIconProps) => (
  <MaterialCommunityIcons color={color} name="shopping" size={size} />
);

export default function HomeTabNavigator() {
  const Tab = createBottomTabNavigator<HomeTabNavigatorParamList>();
  const riderMode = useBearStore((state) => state.riderMode);

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: defaultStyles.headerStyle,
        headerShown: true,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      {riderMode ? (
        <Tab.Screen
          component={HomeOfRiderScreen}
          name={routes.HOME_OF_RIDER}
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: tabToolsIcon,
          }}
        />
      ) : (
        <Tab.Screen
          component={HomeScreen}
          name={routes.HOME}
          initialParams={{
            promo: null,
          }}
          options={{
            headerShown: false,
            tabBarIcon: tabToolsIcon,
          }}
        />
      )}
      <Tab.Screen
        component={HistoryScreen}
        name={routes.HISTORY}
        options={{
          title: "History",
          tabBarIcon: tabHistoryIcon,
        }}
      />
      <Tab.Screen
        component={OffersScreen}
        name={routes.OFFERS}
        options={{
          title: "Promos",
          headerTitle: "Offers and Promos",
          tabBarIcon: tabOfferIcon,
        }}
      />
      <Tab.Screen
        component={AccountScreen}
        name={routes.ACCOUNT}
        options={{
          tabBarIcon: tabAccountIcon,
        }}
      />
    </Tab.Navigator>
  );
}
