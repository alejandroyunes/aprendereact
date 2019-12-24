import React, { Component } from "react";
import { ImageBackground,  StyleSheet, Dimensions } from "react-native";
const cardImage = require("./Media/background.png")

import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
  StyleProvider,
  Text
} from "native-base";


export default class SettingsScreen extends React.Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={cardImage}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height
          }}
        >

          
          <Text>
            just a text for settingsscreenscreenscreenscreenscreenscreen screen
            screen screen screenscreenscreenscreenscreen
          </Text>
        </ImageBackground>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
