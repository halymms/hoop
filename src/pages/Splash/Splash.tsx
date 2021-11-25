import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, View, Image } from "react-native";
import api from "../../services/api";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    const performTimeConsumingTask = async() => {
      return new Promise((resolve) =>
        setTimeout(
          () => { 
            resolve('result'); 
            navigation.navigate("Login");
        },
          5000
        )
      )
    }

    performTimeConsumingTask();

    // async function componentDidMount() {
    //   // Preload data from an external API
    //   // Preload data using AsyncStorage
    //   const loading = await performTimeConsumingTask();
    //   const navigation = useNavigation();
  
    //   if (loading !== null) {
    //       const refresh = await AsyncStorage.getItem("@storage_Refres_Token");
    
    //       if (refresh) {
    //         // Validar o token
    //         const response = await api.post("refresh-token", { refresh });
    //         await AsyncStorage.setItem("@storage_Token", response.data.access);
    
    //         if (response.data.access) {
    //           navigation.navigate("HomeFG");
    //         } else {
    //           navigation.navigate("Login");
    //         }
    //       } 
    //   }
    // }

    // componentDidMount();
  }, [])
  // useEffect(() => {
  //   const checkToken = async () => {
  //     const refresh = await AsyncStorage.getItem("@storage_Refres_Token");

  //     if (refresh) {
  //       // Validar o token
  //       const response = await api.post("refresh-token", { refresh });
  //       await AsyncStorage.setItem("@storage_Token", response.data.access);

  //       if (response.data.access) {
  //         navigation.navigate("HomeFG");
  //       } else {
  //         navigation.navigate("Login");
  //       }
  //     } else {
  //       navigation.navigate("Login");
  //     }
  //   };
  //   checkToken();
  // }, []);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>    
            <Image
              style={styles.logoLogin}
              source={require("../../assets/logo-fantasyGame.jpg")}
            />
        </View>
      </SafeAreaView>
    );
}

export default Splash;
