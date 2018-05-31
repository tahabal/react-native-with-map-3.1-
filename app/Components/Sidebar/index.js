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

const datas = [
    {
        name: "Anasayfa",
        route: "Home",
        icon: "help-buoy",
        bg: "#C5F442"
    },
    {
        name: "Profilim",
        route: "Profile",
        icon: "phone-portrait",
        bg: "#5DCEE2"
    },
    {
        route: "Restaurants",
        name: "Restorantlar",
        icon: "checkmark-circle",
        bg: "#DA4437",
    },
    {
        route: "Map",
        name: "Harita",
        icon: "notifications",
        bg: "#4DCAE0",
    },
    {
        route: "Promotions",
        name: "Kampanyalar",
        icon: "search",
        bg: "#477EEA",
    }
    ,
    {
        route: "Favourites",
        name: "Favorilerim",
        icon: "lock",
        bg: "#5DCEE2",
    },
    {
        route: "Help",
        name: "Yardım",
        icon: "lock",
        bg: "#5DCEE2",
    }
    ,
    {
        route: "Settings",
        name: "Ayarlar",
        icon: "lock",
        bg: "#5DCEE2",
    },
    {
        route: "Logout",
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
