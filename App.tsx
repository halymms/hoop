import React from "react";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import { Rubik_500Medium, Rubik_400Regular } from "@expo-google-fonts/rubik";

import { Oxygen_400Regular, Oxygen_700Bold } from "@expo-google-fonts/oxygen";

import Routes from "./src/routes/Index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
    Rubik_500Medium,
    Rubik_400Regular,
    Oxygen_400Regular,
    Oxygen_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
}
