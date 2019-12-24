import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

import HomeScreen from "./src/HomeScreen/HomeScreen";
import SettingsScreen from "./src/SettingsScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    height: 150
  }
});

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 180,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("./src/Media/NavLogo.png")}
        style={{ height: 120, width: 120, borderRadius: 60 }}
      />
    </View>
    <DrawerItems {...props} />
  </SafeAreaView>
);

const Drawer = createDrawerNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen
  },
  {
    contentComponent: CustomDrawerComponent
  }
);

const stackNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(Drawer,stackNavigation);
