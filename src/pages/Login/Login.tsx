import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  Alert,
  TextInput,
  Linking,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";
import styles from "./styles";
import { Formik } from "formik";
import * as yup from "yup";

import { MenuSuperior } from "../../components/MenuSuperior";

const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Informe o username."),
  password: yup
    .string()
    .required("Senha é obrigatória."),
});

export function Login() {
  const navigation = useNavigation();

  const handleCadastro = async () => {
    navigation.navigate("Cadastro");
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <MenuSuperior />

          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values) => {
              try {
                const username = values.username;
                const password = values.password;
                const response = await api.post("auth/login", {
                  username,
                  password,
                });

                if (response.data.access) {
                  await AsyncStorage.setItem(
                    "@storage_Token",
                    response.data.access
                  );
                  await AsyncStorage.setItem(
                    "@storage_Refres_Token",
                    response.data.refresh
                  );

                  navigation.reset({
                    routes: [{ name: "Directs_team" }],
                  });
                }
              } catch (e) {
                Alert.alert(
                  "Erro ao acessar",
                  "Verifique suas credenciais de acesso!"
                );
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
            }) => (
              <View style={styles.form}>
                <Image
                  style={styles.logoLogin}
                  source={require("../../assets/logo-fantasyGame.jpg")}
                />
                <Text style={styles.textLogin}>
                  Para começar, entre ou{"\n"}cadastre-se agora!
                </Text>

                <View style={styles.containerInput}>
                  <Text style={styles.titleInput}>Username</Text>
                  <TextInput
                    name="username"
                    style={styles.input}
                    placeholder="Digite seu username"
                    //value={username}
                    //onChangeText={(t) => setUsername(t)}
                    onChangeText={handleChange("username")}
                    value={values.username}
                    onBlur={handleBlur("username")}
                  />
                  {errors.username && touched.username && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.username}
                    </Text>
                  )}
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.titleInput}>Senha</Text>
                  <TextInput
                    name="password"
                    style={styles.input}
                    placeholder="Digite sua senha"
                    //value={password}
                    //onChangeText={(t) => setPassword(t)}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    onBlur={handleBlur("password")}
                    secureTextEntry
                  />

                  {errors.password && touched.password && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.password}
                    </Text>
                  )}
                </View>

                <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
                  <Text style={styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>

                <View
                  style={{
                    width: "90%",
                    marginTop: "3%",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{ flex: 1, height: 1, backgroundColor: "#CFCFCF" }}
                  />
                  <View>
                    <Text
                      style={{
                        fontFamily: "Roboto_400Regular",
                        fontSize: 13,
                        width: 50,
                        textAlign: "center",
                      }}
                    >
                      ou
                    </Text>
                  </View>
                  <View
                    style={{ flex: 1, height: 1, backgroundColor: "#CFCFCF" }}
                  />
                </View>

                <TouchableOpacity
                  style={styles.botaoCadastro}
                  onPress={handleCadastro}
                >
                  <Text style={styles.textoBotaoCadastrar}>
                    Cadastre-se agora
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
