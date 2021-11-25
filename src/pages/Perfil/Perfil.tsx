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
import { TextInputMask } from "react-native-masked-text";
import { useNavigation } from "@react-navigation/core";

export function Perfil() {
  const navigation = useNavigation();

  const [username, setusername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [auxphone, setauxphone] = useState("");

  useEffect(()=>{
    buscaInfo()
  }, [])
  const buscaInfo = async () => {
    
    const token = await AsyncStorage.getItem('@storage_Token')
    const user_id = jwt_decode(token);

    const response = await api.get(`auth/details/${user_id.user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setFirstName(response.data.first_name.toString())    
    setLastName(response.data.last_name)
    setusername(response.data.username)
    setauxphone(response.data.phone)
  }

  const sairApp = async () => {
    await AsyncStorage.setItem("@storage_Token", '');
    await AsyncStorage.setItem("@storage_Refres_Token", '')
    navigation.reset({
      routes: [{ name: "Login" }],
    });
  }

  const mudasenha = async () => {
    navigation.reset({
      routes: [{ name: "Senha" }],
    });
  }

  const atualizar = async () => {
    if(!first_name){
      Alert.alert('Erro','Obrigatório informar o nome.')
    } else {
      if(!last_name){
        Alert.alert('Erro','Obrigatório informar o sobrenome.')
      } else {
        if(!auxphone){
          Alert.alert('Erro','Obrigatório informar o telefone.')
        } else {
          const phone = auxphone.replace("(", "")
          .replace(")", "")
          .replace(" ", "")
          .replace("-", "");
      
          if(phone.length != 11 ){
            Alert.alert('Erro', 'Telefone deve ser 11 digitos.')
          }else {
            const token = await AsyncStorage.getItem('@storage_Token')
            const user_id = jwt_decode(token);          

            const response = await api.put(`auth/details/${user_id.user_id}`, { username, first_name, last_name, phone }, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });

            if (response){
              Alert.alert('Sucesso', 'Informações atualizadas com sucesso.')
            }else{
              Alert.alert('Erro', 'Erro no servidor! Por favor, tente mais tarde.')
            }
          }
        }
      }
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

      <View style={styles.containerMenu}>
        <Text style={styles.textContainerMenu}>Perfil</Text>
      </View>

        <View style={styles.containerInput}>

          <Text style={styles.titleInput}>Nome</Text>
          <TextInput
            style={styles.input}
            name="first_name"
            placeholder="Digite seu nome"
            value={first_name}
            onChangeText={(t) => setFirstName(t)}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.titleInput}>Sobrenome</Text>
          <TextInput
              style={styles.input}
              name="last_name"
              placeholder="Digite seu sobrenome"
              value={last_name}
              onChangeText={(t) => setLastName(t)}
            />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.titleInput}>Username</Text>
          <TextInput
            style={styles.input}
            name="username"
            placeholder="Digite seu username"
            onChangeText={(t) => setusername(t)}
            value={username}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.titleInput}>Telefone</Text>
          <TextInputMask
            name="phone"
            style={styles.input}
            type={'cel-phone'}
            placeholder="Digite seu telefone"
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
            value={auxphone}
            onChangeText={(t) => setauxphone(t)}
          />
        </View>

        
        <TouchableOpacity onPress={atualizar} style={styles.buttonSave}>
          <Text style={styles.textbuttonSave}>Salvar</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={mudasenha} style={styles.buttonChangePassword}>
          <Text style={styles.textbuttonChangePassword}>Alterar senha</Text>
        </TouchableOpacity>        


        <TouchableOpacity onPress={sairApp} style={styles.buttonLogout}>
          <Text style={styles.textbuttonLogout}>Sair</Text>
        </TouchableOpacity>        
      </View>
    </ScrollView>
  );
}
