import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Escalacao } from "../pages/FantasyGame/Escalacao/Escalacao";
import Selecao from "../pages/FantasyGame/Selecao/Selecao";
import { LineupProvider } from "../context/LineupContext";
import { Player } from "../entities/Player";

export type LineupStackParamList = {
  Escalacao: undefined,
  Selecao: {
    position: string,
    isReserve?: boolean,
    oldPlayerSwitch?: Player
  },
}

const { Navigator, Screen } = createStackNavigator<LineupStackParamList>();

const LineUpStack: React.FC = () => (
  <LineupProvider>
    <Navigator
      initialRouteName="Escalacao"
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFFFFF'
        },
      }}
    >
      <Screen 
        name="Escalacao"
        component={Escalacao}
      />
      <Screen 
        name="Selecao"
        component={Selecao}
      />
    </Navigator>
  </LineupProvider>
)

export default LineUpStack;