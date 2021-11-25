import React from "react";
import { View, SafeAreaView, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

export function ComprasJogadores() {
  return(
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <TouchableOpacity style={styles.cards}>
        <Image source={require('../../../assets/card.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cards}>
        <Image source={require('../../../assets/card2.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cards}>
        <Image source={require('../../../assets/card2.png')} />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}