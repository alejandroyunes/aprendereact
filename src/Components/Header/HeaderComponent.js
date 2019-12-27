import React from "react";
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


import NavigationService from "../../Navigation/NavigationService";
import { DrawerActions } from "react-navigation-drawer";


import styles from "../../styles/styles";
export default class HeaderComponent extends React.Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     token: null
                   };
                 }

                 salir() {
                   this.props.salir();
                   this.props.navigation.navigate("Home");
                   // this.props.Navigate.navigate('Home');
                 }

                 render() {
                   return (
                     <Header style={styles.container}>
                       <Left>
                         <Button transparent>
                           <Icon
                             name="menu"
                             onPress={() =>
                               this.props.Navigate.openDrawer()
                             }
                           />
                         </Button>
                       </Left>
                       <Body>
                         <Title>Aprende React title</Title>
                       </Body>
                       <Right>
                         <Button transparent>
                           <Icon
                             name="menu"
                             onPress={() =>
                               this.props.Navigate.openDrawer()
                             }
                           />
                         </Button>
                       </Right>
                     </Header>
                   );
                 }
               }


