import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { HeaderBackButton } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/core";

import Escudo from '../../../assets/svg/escudoConfirmacao.svg';
import BallLogo from '../../../assets/svg/ball-black.svg'

import styles from './styles'

export function ConfirmarTime() {
  const navigation = useNavigation();

  function handleEscalar() {
    navigation.navigate('HomeFG')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <HeaderBackButton/>
      </View>
      <View style={styles.content}>
        <Text style={styles.titleConfirmar}>Escudo</Text>
        <Escudo style={styles.logoEscudo}/>
        <Text style={styles.textoEquipe1}>Nome da equipe</Text>
        <Text style={styles.textoEquipe2}>Suns da Massa</Text>
        <TouchableOpacity style={styles.botao} onPress={handleEscalar}>
          <BallLogo />
          <View style={styles.containerTitle}>
            <Text style={styles.textoBotao1}>Criar</Text>
            <Text style={styles.textoBotao2}>Brasão</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}