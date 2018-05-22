import React, { Component } from "react";
import { Image } from "react-native";
import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge
} from "native-base";
import styles from "./style";

const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const datas = [
    {
        name: "Anasayfa",
        route: "Anatomy",
        icon: "help-buoy",
        bg: "#C5F442"
    },
    {
        name: "Profilim",
        route: "Anatomy",
        icon: "phone-portrait",
        bg: "#5DCEE2"
    },
    {
        route: "NHListAvatar",
        name: "Restorantlar",
        icon: "checkmark-circle",
        bg: "#DA4437",
    },
    {
        route: "NHListAvatar",
        name: "Restorantlar Harita",
        icon: "notifications",
        bg: "#4DCAE0",
    },
    {
        route: "NHListAvatar",
        name: "Kampanyalar",
        icon: "search",
        bg: "#477EEA",
    }
    ,
    {
        route: "NHListAvatar",
        name: "Favorilerim",
        icon: "lock",
        bg: "#5DCEE2",
    },
    {
        route: "NHListAvatar",
        name: "Yardım",
        icon: "lock",
        bg: "#5DCEE2",
    }
    ,
    {
        route: "NHListAvatar",
        name: "Ayarlar",
        icon: "lock",
        bg: "#5DCEE2",
    },
    {
        route: "NHListAvatar",
        name: "Çıkış",
        icon: "lock",
        bg: "#5DCEE2",
    }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
