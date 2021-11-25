import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";

import api from "../../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import styles, { Mercado, ContainerInfo } from "./styles";

const Header = () => {
  const [name, setName] = useState();
  const [last_name, setLast_Name] = useState();
  const [last_points, setLast_Points] = useState('0.00');

  const [initial, setInitial] = useState();

  useEffect(() => {
    buscaInfo();
  }, []);

  const buscaInfo = async () => {
    const token = await AsyncStorage.getItem("@storage_Token");
    const user_id = jwt_decode(token);

    const response  = await api.get(`user_team/user/${user_id.user_id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setName(response.data[0].user.first_name);
    setLast_Name(response.data[0].user.last_name)

    if( !response.data[0].total_points == undefined){
      setLast_Points(response.data[0].total_points)
    }
    

    setInitial(response.data[0].user.first_name.substr(0, 1) + response.data[0].user.last_name.substr(0, 1))
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerName}>
          <View style={styles.nameCircle}>
            <Text style={styles.textCircle}>{initial}</Text>
          </View>
          <View style={styles.welcomeName}>
            <Text style={styles.welcomeTextOne}>Olá,</Text>
            <Text style={styles.welcomeTextTwo}>{name} {last_name}</Text>
          </View>
        </View>
        <View
          style={{ width: "90.5%", height: 1, backgroundColor: "#EEAAB5" }}
        />
        <ContainerInfo>
          <View style={styles.containerPontuacao}>
            <Text style={styles.descPontuacao}>Ultima pontuação</Text>
            <Text style={styles.pontuacao}>{last_points}</Text>
          </View>
        </ContainerInfo>
      </View>
    </View>
  );
};

export default Header;
