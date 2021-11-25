import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import api from "../../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Classificacao = () => {
  const [listaTop01, setListaTop01] = useState([]);
  const [listaTop02, setListaTop02] = useState([]);
  const [listaTop03, setListaTop03] = useState([]);
  const [listaTop04, setListaTop04] = useState([]);
  const [listaTop05, setListaTop05] = useState([]);

  const [listaTop01val, setListaTop01val] = useState([]);
  const [listaTop02val, setListaTop02val] = useState([]);
  const [listaTop03val, setListaTop03val] = useState([]);
  const [listaTop04val, setListaTop04val] = useState([]);
  const [listaTop05val, setListaTop05val] = useState([]);


  const buscaInfo = async () => {
    const token = await AsyncStorage.getItem('@storage_Token')

    const response = await api.get(`user_team/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setListaTop01(response.data[0].name);
    setListaTop02(response.data[1].name);
    setListaTop03(response.data[2].name);
    setListaTop04(response.data[3].name);
    setListaTop05(response.data[4].name);
    setListaTop01val(response.data[0].total_points);
    setListaTop02val(response.data[1].total_points);
    setListaTop03val(response.data[2].total_points);
    setListaTop04val(response.data[3].total_points);
    setListaTop05val(response.data[4].total_points);    
  }

  useEffect(()=>{
    buscaInfo()
  }, [])
 
  return (
    <View style={styles.container}>
      <View style={styles.containerClassificacao}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Classificação</Text>
        </View>
        <View style={styles.containerDados}>
          <View style={styles.rowTimes}>
            <Text style={styles.textTimes}>1 - {listaTop01}</Text>
            <Text style={styles.valueTimes}>{listaTop01val}</Text>
          </View>
          <View style={styles.rowTimes}>
            <Text style={styles.textTimes}>2 - {listaTop02}</Text>
            <Text style={styles.valueTimes}>{listaTop02val}</Text>
          </View>
          <View style={styles.rowTimes}>
            <Text style={styles.textTimes}>3 - {listaTop03}</Text>
            <Text style={styles.valueTimes}>{listaTop03val}</Text>
          </View>
          <View style={styles.rowTimes}>
            <Text style={styles.textTimes}>4 - {listaTop04}</Text>
            <Text style={styles.valueTimes}>{listaTop04val}</Text>
          </View>
          <View style={styles.rowTimes}>
            <Text style={styles.textTimes}>5 - {listaTop05}</Text>
            <Text style={styles.valueTimes}>{listaTop05val}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Classificacao;
