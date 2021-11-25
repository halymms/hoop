import React from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import styles from "./styles";

import { MenuSuperior } from "../../../components/MenuSuperior";
import Header from "../../../components/HomeFG/Header";
import Carteira from "../../../components/HomeFG/Carteira";
import Classificacao from "../../../components/HomeFG/Classificacao";

export function Home() {
  
  const navigation = useNavigation();

  function handleEscalacao() {
    navigation.navigate('Escalacao')
  }

  return(
    <ScrollView>
      <View style={styles.container}>
        <MenuSuperior />
        <Header />
        <Carteira />
        <Classificacao />
      </View>
    </ScrollView>
  )
}