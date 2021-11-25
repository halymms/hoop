import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, View, Image } from "react-native";
import jwt_decode from "jwt-decode";
import api from "../../services/api";

import { useNavigation } from "@react-navigation/native";

export function Directs_team() {
  const navigation = useNavigation();

  const performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        async () => {
          const token = await AsyncStorage.getItem('@storage_Token')
          const user_id = jwt_decode(token);
          
          const response = await api.get(`user_team/user/${user_id.user_id}/`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
      
          
          try {
            //console.log(response.data[0].id);
            if (response.data[0].id){
              navigation.navigate("Tab");
            }
            resolve('result'); 
          } catch (e) {
            //console.log("indefinido");
            navigation.navigate("CriacaoTime");
            resolve('result'); 
          }
      },
        3000
      )
    )
  }


  useEffect(() => {
    performTimeConsumingTask();
  }, [])
  
    return (
      <SafeAreaView>
      </SafeAreaView>
    );
}

export default Directs_team;
