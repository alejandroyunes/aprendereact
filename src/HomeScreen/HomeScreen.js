import React from "react";
import {
  StatusBar,
  Platform,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";
import { AppLoading } from "expo";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
  StyleProvider
} from "native-base";
import getTheme from "../native-base-theme/components";
import material from "../native-base-theme/variables/material";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import HeaderComponent from "../Components/Header/HeaderComponent"
const cardImage = require("../Media/background.png");

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };3
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("../Resources/Fonts/Roboto.ttf"),
      Roboto_medium: require("../Resources/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <ImageBackground
            source={cardImage}
            style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height
            }}
          >
            <HeaderComponent Navigate={this.props.navigation} />
          </ImageBackground>
        </Container>
      </StyleProvider>
    );
  }
}

//status bar and header align,
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "transparent"
      }
    })
  }
}); */