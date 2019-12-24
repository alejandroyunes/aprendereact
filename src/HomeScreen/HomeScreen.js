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


import styles from "../styles/styles"

const cardImage = require("../Media/background.png");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
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
            <Header style={{marginTop: 20}}>
              <Left>
                <Button transparent>
                  <Icon name="menu"
                  onPress={() => this.props.navigation.openDrawer()} />
                </Button>
              </Left>
              <Body>
                <Title>Aprende React</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon
                    name="menu"
                    onPress={() => this.props.navigation.openDrawer()}
                  />
                </Button>
              </Right>
            </Header>
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