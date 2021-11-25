import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthRoutes from "./tab.routes";

import Splash from "../pages/Splash/Splash";
import { Login } from "../pages/Login/Login";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Calendario } from "../pages/Calendario/Calendario";
import { CriacaoTime } from "../pages/FantasyGame/CriacaoFantasyGame/CriacaoTime";
import { IntroApp } from "../pages/IntroApp/IntroApp";
import { Home } from "../pages/FantasyGame/Home/Home";
import { Escalacao } from "../pages/FantasyGame/Escalacao/Escalacao";
import { ComprasJogadores } from "../pages/FantasyGame/ComprasJogadores/ComprasJogadores";
import { Perfil } from "../pages/Perfil/Perfil";
import { Directs_team } from "../pages/Directs_team/Directs_team";
import { Senha } from "../pages/Senha/Senha";
import { Estatistica } from "../pages/Estatistica/Estatistica";
import { Pes_Estatistica } from "../pages/Estatistica/Est_pesquisa/Pes_Estatistica";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    initialRouteName="Splash"
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: "#FFFFFF",
      },
    }}
  >

    <stackRoutes.Screen name="Splash" component={Splash} />

    <stackRoutes.Screen name="Login" component={Login} />

    <stackRoutes.Screen name="Cadastro" component={Cadastro} />

    <stackRoutes.Screen name="IntroApp" component={IntroApp} />

    <stackRoutes.Screen name="Tab" component={AuthRoutes} />

    <stackRoutes.Screen name="Home" component={Home} />

    <stackRoutes.Screen name="CriacaoTime" component={CriacaoTime} />

    <stackRoutes.Screen name="Escalacao" component={Escalacao} />

    <stackRoutes.Screen name="ComprasJogadores" component={ComprasJogadores} />

    <stackRoutes.Screen name="Calendario" component={Calendario} />

    <stackRoutes.Screen name="Perfil" component={Perfil} />

    <stackRoutes.Screen name="Directs_team" component={Directs_team} />

    <stackRoutes.Screen name="Senha" component={Senha} />

    <stackRoutes.Screen name="Estatistica" component={Estatistica} />

    <stackRoutes.Screen name="Pes_Estatistica" component={Pes_Estatistica} />

  </stackRoutes.Navigator>
);

export default AppRoutes;
