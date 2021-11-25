import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const slides = [
  {
    key: "1",
    title: "Bem-vindo!",
    text: "Chegou a hora de você criar seu\n time e dunkar no Fantasy Game!",
    image: require("../../assets/logo-fantasyGame.jpg"),
    style: styles.logoOne,
  },
  {
    key: "2",
    title: "Acompanhe, jogue e\n torça!",
    text: "Escale seu proprio time, torça por ele\n e ganhe pontos.",
    image: require("../../assets/undraw_game_day_ucx9_1.png"),
    style: styles.logoDois,
  },
  {
    key: "3",
    title: "Comece agora!",
    text: "Agora você vai poder montar o seu\n time ideal e torcer por ele.",
    image: require("../../assets/undraw_basketball_agx41.png"),
    style: styles.logoTres,
  },
];
export function IntroApp() {
  const navigation = useNavigation();
  const [showHome, setShowHome] = useState(false);
 
  const handleSubmit = async () => {
    const username = await AsyncStorage.getItem('@username')
    const password = await AsyncStorage.getItem('@password')
    const response = await api.post("auth/login", { username, password });

    if (response.data.access) {
      await AsyncStorage.setItem("@storage_Token", response.data.access);
      await AsyncStorage.setItem("@storage_Refres_Token", response.data.refresh);

      navigation.reset({
        routes: [{ name: "CriacaoTime" }],
      });
    }else{
      navigation.reset({
        routes: [{ name: "Login" }],
      });      
    }
  };

  function renderSlides({ item }) {
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image source={item.image} style={item.style} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.text}</Text>
      </View>
    );
  }

  if (showHome) {
    return <text>Entrou na tela</text>;
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: "#951516",
          width: 10,
        }}
        bottomButton={true}
        renderNextButton={() => {}}
        renderDoneButton={() => (
          <TouchableOpacity style={styles.buttonAccess} onPress={handleSubmit}>
            <Text style={styles.titleButton}>Iniciar</Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}
