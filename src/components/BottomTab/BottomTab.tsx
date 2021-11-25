import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Home } from "../../pages/Home/Home";
import { Cadastro } from "../../pages/Cadastro/Cadastro";
import { Login } from "../../pages/Login/Login";

export function BottomTab() {
  const Tab = createMaterialBottomTabNavigator();

  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cadastro" component={Cadastro} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  )
}