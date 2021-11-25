import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Calendario } from "../pages/Calendario/Calendario";
import { Perfil } from "../pages/Perfil/Perfil";
import { Home } from "../pages/FantasyGame/Home/Home";
import { Escalacao } from "../pages/FantasyGame/Escalacao/Escalacao";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Senha } from "../pages/Senha/Senha";
import { Estatistica } from "../pages/Estatistica/Estatistica";
import { Pes_Estatistica } from "../pages/Estatistica/Est_pesquisa/Pes_Estatistica";
import LineUpStack from "./stackLineUp.routes";


const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#951516",
        inactiveTintColor: "#AEAEAE",
        labelPosition: "below-icon",
        style: {
          backgroundColor: "#ffffff",
          height: 58,
        },
      }}
    >
      <AppTab.Screen
        name="Escalacao"
        component={LineUpStack}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="basketball-ball" size={26} color={color} />
          ),
        }}
      />

      <AppTab.Screen
        name="Calendario"
        component={Calendario}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar-alt" size={26} color={color} />
          ),
        }}
      />

      <AppTab.Screen name="Home" component={()=>{return <Home/>}} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" color={color} size={26} />
          ),
        }} />

      <AppTab.Screen name="Estatisticas" component={Estatistica} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="percent" size={26} color={color} />
          ),
        }}/>

      <AppTab.Screen name="Perfil" component={Perfil}  options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="user-circle" color={color} size={26} />
        ),
      }} />
      
      <AppTab.Screen  name="Senha" component={Senha} options={{
        tabBarButton: () => null,
      }}/>
      <AppTab.Screen  name="Pes_Estatistica" component={Pes_Estatistica} options={{

        tabBarButton: () => null,
      }}/>
    </AppTab.Navigator>
  );
};

export default AuthRoutes;

