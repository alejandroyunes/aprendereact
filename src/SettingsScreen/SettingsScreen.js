import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View
} from "react-native";
const cardImage = require("../Media/background.png");

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

import HeaderComponent from "../Components/Header/HeaderComponent";

export default class SettingsScreen extends React.Component {
  state = {
  counter:0,
  nombre: 'alejandro'
}
increaseCounter = ()=>{
  this.setState({
    counter: this.state.counter +1
  })
}

decreaseCounter = () => {
  this.setState({
    counter: this.state.counter - 1
  });
};
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
          <HeaderComponent Navigate={this.props.navigation} />

          <View
            style={{
              flexDirection: "row",
              width: 200,
              justifyContent: "space-around"
            }}
          >
            <TouchableOpacity onPress={() => this.increaseCounter()}>
              <Text style={{ fontSize: 20, color: "white" }}>Increase</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, color: "white"}}> {this.state.counter} </Text>
            <TouchableOpacity onPress={() => this.decreaseCounter()}>
              <Text style={{ fontSize: 20, color: "white" }}>Decrease</Text>
            </TouchableOpacity>
          </View>
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
