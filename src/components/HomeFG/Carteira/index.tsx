import React, { useEffect, useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import styles from "./styles";
import api from "../../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import jwt_decode from "jwt-decode";

const Carteira = () => {
  const navigation = useNavigation();
  const [nameTime, setNameTime] = useState();

  const [patrimonio, setPatrimonio] = useState("0.00");
  const [total, settotal] = useState("0.00");
  const [userTeam_id, setUserTeam_id] = useState();

  useEffect(() => {
    buscaInfo();
    buscaPatrimonio();
  }, []);

  const buscaPatrimonio = async () => {
    return new Promise((resolve) =>
      setTimeout(
        async () => {
          /*
          try {
            const token = await AsyncStorage.getItem("@storage_Token");


            console.log('xx:', userTeam_id)
            const response2 = await api.get(`wallet/user_team/${userTeam_id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
      
            setPatrimonio(response2.data[0].amount);
            settotal(response2.data[0].amount + response2.data[0].price_team);
            resolve('result'); 
          } catch {
            console.log("Erro ao conectar.");
            resolve('result'); 
          }        */   
      },
        3000
      )
    )    
  };

  const buscaInfo = async () => {
    const token = await AsyncStorage.getItem("@storage_Token");
    const user_id = jwt_decode(token);

    const response = await api.get(`user_team/user/${user_id.user_id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setNameTime(response.data[0].name);
    setUserTeam_id(response.data[0].id);
 

    if(response.data[0].id){
      const response2 = await api.get(`wallet/user_team/${response.data[0].id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });    
      setPatrimonio(response2.data[0].amount);
      const val3 = parseFloat(response2.data[0].amount)  + parseFloat(response2.data[0].price_team)
      settotal(val3.toString());      
    }
  };

  const verperfil = async () => {
    navigation.navigate("Perfil");
  };

  const verEscalacao = async () => {
    navigation.navigate("Escalacao");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLabel}>
        <Text style={styles.textLabel}>Suas partidas no Fantasy Game</Text>
      </View>
      <View style={styles.containerCarteira}>
        <View style={styles.lineOne}>
          <Text style={styles.nomeDoTime}>{nameTime}</Text>
          <TouchableOpacity style={styles.buttonVerPerfil} onPress={verperfil}>
            <Text style={styles.verPerfil}>Ver Perfil</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#DFDFDF" }}
        />
        <View style={styles.lineTwo}>
          <View style={styles.patrimonioRow}>
            <Text style={styles.patrimonioText}>Patrimônio Disponível</Text>
            <Text style={styles.patrimonioValue}>
              C${" "}
              <Text style={{ fontFamily: "Roboto_700Bold" }}>{patrimonio}</Text>
            </Text>
          </View>
          <View style={styles.patrimonioRow}>
            <Text style={styles.patrimonioText}>Patrimônio Total</Text>
            <Text style={styles.patrimonioValue}>
              C$ <Text style={{ fontFamily: "Roboto_700Bold" }}>{total}</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonGoEscalacao}
          onPress={verEscalacao}
        >
          <Text style={styles.textButtonEscalacao}>Ver escalação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Carteira;