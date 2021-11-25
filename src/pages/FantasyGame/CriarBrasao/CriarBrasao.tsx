import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { HeaderBackButton } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import Carrossel from '../../../assets/svg/BallCarrossel.svg'
import SetaDireita from '../../../assets/svg/setaDireita.svg'
import SetaEsquerda from '../../../assets/svg/setaEsquerda.svg'
import Cores from '../../../assets/svg/adorno.svg'
import BallLogo from '../../../assets/svg/ball-black.svg'

import styles from "./styles";

export function CriarBrasao() {
  const navigation = useNavigation();

  function handleConfirmation() {
    navigation.navigate('ConfirmarTime')
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.backContainer}>
          <HeaderBackButton/>
        </View>
        <View style={styles.carrosselContainer}>
          <Text style={styles.titleCarrossel}>Selecione um escudo:</Text>
          <View style={styles.carrossel}>
            <SetaEsquerda />
            <Carrossel />
            <SetaDireita />
          </View>
        </View>
        <View style={styles.carrosselContainer}>
          <Text style={styles.titleCarrossel}>Selecione um adorno:</Text>
          <View style={styles.carrossel}>
            <SetaEsquerda />
            <Carrossel />
            <SetaDireita />
          </View>
        </View>
        <View style={styles.coresEscudo}>
          <Text style={styles.titleCarrossel}>Selecione as cores:</Text>
          <Cores />
        </View>
        <TouchableOpacity style={styles.botao} onPress={handleConfirmation}>
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