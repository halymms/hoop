import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import api from "../../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HeaderBackButton } from "@react-navigation/stack";
import jwt_decode from "jwt-decode";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export function CriacaoTime() {
  const navigation = useNavigation();  
  const [name, setname] = useState("");

  async function handleSubmit() {
    if(!name){
      Alert.alert('Erro', 'Informe o nome do time.')
    }else {
      try{
        const token = await AsyncStorage.getItem('@storage_Token')
        const user_id = jwt_decode(token);         
        const user = user_id.user_id
        const response = await api.post(`user_team/`, { user, name }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log('sucesso')

        navigation.reset({
          routes: [{ name: "Tab" }],
        });

      }catch{
        console.log('erro')
        Alert.alert('Erro','O nome já esta em uso, escolha outro.')
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo-fantasyGame.jpg")}
        />
        <Text style={styles.text1}>
          Chegou a hora de você criar{"\n"} seu time no Fantasy Game!
        </Text>
        <Text style={styles.text2}>Para começar vamos montar seu time!</Text>
        <View style={styles.containerInput}>
          <Text style={styles.titleInput}>Nome</Text>
          
          
          <TextInput
            style={styles.input}
            onChangeText={(t) => setname(t)}
            placeholder="Digite um nome para sua equipe"
          />
        </View>
        <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
          <Text style={styles.textoBotao}>Começar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
