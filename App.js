
import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import { ThemeProvider, Header, Button, Icon } from "react-native-elements";

import { createAppContainer, } from "react-navigation";

import { createDrawerNavigator } from "react-navigation-drawer";



// Later on in your component


class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./assets/NavLogo.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };


  render() {
    return (
      <ThemeProvider>
        <Header
          leftComponent={
            <Icon
              name="menu"
              color="#fff"
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
          centerComponent={{ text: "Aprende React", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
      </ThemeProvider>
    );
  }
}


class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./assets/NavLogo.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}
     



const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
  buttonPadding: {
    paddingTop: 10,
  }
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Notifications: {
    screen: MyNotificationsScreen
  }
});





const MyApp = createAppContainer( MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}


