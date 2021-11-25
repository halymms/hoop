import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";

import styles from "./styles";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

export function Senha() {
  const [password, setPassword] = useState("");
   
  const atualizar = async () => {   
    if (!password){
      Alert.alert('Erro', 'Informe a nova senha.')
    }else {
      if (password.length < 6 ){
        Alert.alert('Erro', 'A senha deve conter no minimo 6 digitos.')
      }
      else {
        const token = await AsyncStorage.getItem('@storage_Token')
        const user_id = jwt_decode(token);

        try {
          const response = await api.put(`auth/change-password/${user_id.user_id}`, { password }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          Alert.alert('Sucesso', 'Sua senha foi alterada.')
        } catch {
          Alert.alert('Erro', 'Erro no servidor! Por favor, tente mais tarde.')
        }
      }
    }
  }
 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

      <View style={styles.containerMenu}>
        <Text style={styles.textContainerMenu}>Alterar senha</Text>
      </View>

        <View style={styles.containerInput}>

          <Text style={styles.titleInput}>Senha</Text>
          <TextInput
            style={styles.input}
            name="password"
            placeholder="Digite a nova senha"
            value={password}
            onChangeText={(t) => setPassword(t)}
            secureTextEntry
          />
        </View>
        
        <TouchableOpacity onPress={atualizar} style={styles.buttonSave}>
          <Text style={styles.textbuttonSave}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
