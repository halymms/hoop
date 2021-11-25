import React, { useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";

import styles from "./styles";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TextInputMask } from "react-native-masked-text";
import { Formik } from "formik";
import { MenuSuperior } from "../../components/MenuSuperior";
import * as yup from "yup";

const cadastroValidationSchema = yup.object().shape({
  username: yup.string().required("Informe o username."),

  first_name: yup.string().required("Informe o nome."),

  last_name: yup.string().required("Informe o sobrenome."),

  phone: yup
    .string()
    .min(15, ({ min }) => `Informe um telefone válido.`)
    .required("Informe o telefone."),

  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required("Informe o e-mail."),

  password: yup
    .string()
    .min(6, ({ min }) => `a senha deve ter pelo menos ${min} caracteres.`)
    .required("Informe a senha."),
});

export function Cadastro() {
  const navigation = useNavigation();

  const cadastrar = async (
    username: string,
    first_name: string,
    last_name: string,
    phone: string,
    email: string,
    password: string
  ) => {

    try {
      const response = await api.post("auth/register", {
        username,
        first_name,
        last_name,
        phone,
        email,
        password,
      });

      if (response) {
        await AsyncStorage.setItem("@username", username);
        await AsyncStorage.setItem("@password", password);

        navigation.reset({
          routes: [{ name: "IntroApp" }],
        });
      } else {
        Alert.alert('Erro', 'Erro no servidor! Por favor, tente mais tarde.')
      }
  
    } catch (error) {
      Alert.alert("Erro", "Usuario já cadastrado.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <MenuSuperior />
      <View style={styles.content}>
        <Image
          style={styles.logoLogin}
          source={require("../../assets/logo-fantasyGame.jpg")}
        />
        <Text style={styles.titleCadastro}>Cadastre-se</Text>

        <Formik
          validationSchema={cadastroValidationSchema}
          initialValues={{
            username: "",
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            const username = values.username;
            const first_name = values.first_name;
            const last_name = values.last_name;
            const phone = values.phone
              .replace("(", "")
              .replace(")", "")
              .replace(" ", "")
              .replace("-", "");
            const email = values.email;
            const password = values.password;

            cadastrar(username, first_name, last_name, phone, email, password);
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
            <>
              <View style={styles.containerInput}>
                <Text style={styles.titleInput}>Nome</Text>
                <TextInput
                  style={styles.input}
                  name="first_name"
                  placeholder="Digite seu nome"
                  onChangeText={handleChange("first_name")}
                  value={values.first_name}
                  onBlur={handleBlur("first_name")}
                  //value={first_name}
                  //onChangeText={(t) => setFirstName(t)}
                />
                {errors.first_name && touched.first_name && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.first_name}
                  </Text>
                )}
              </View>
              <View style={styles.containerInput}>
                <Text style={styles.titleInput}>Sobrenome</Text>
                <TextInput
                  style={styles.input}
                  name="last_name"
                  placeholder="Digite seu sobrenome"
                  onChangeText={handleChange("last_name")}
                  value={values.last_name}
                  onBlur={handleBlur("last_name")}
                  //value={last_name}
                  //onChangeText={(t) => setLastName(t)}
                />
                {errors.last_name && touched.last_name && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.last_name}
                  </Text>
                )}
              </View>
              <View style={styles.containerInput}>
                <Text style={styles.titleInput}>Username</Text>
                <TextInput
                  style={styles.input}
                  name="username"
                  placeholder="Digite seu username"
                  onChangeText={handleChange("username")}
                  //value={username}
                  //onChangeText={(t) => setUsername(t)}
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
                <Text style={styles.titleInput}>Telefone</Text>
                <TextInputMask
                  name="phone"
                  style={styles.input}
                  type={"cel-phone"}
                  placeholder="Digite seu telefone"
                  options={{
                    maskType: "BRL",
                    withDDD: true,
                    dddMask: "(99) ",
                  }}
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                />

                {errors.phone && touched.phone && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.phone}
                  </Text>
                )}
              </View>
              <View style={styles.containerInput}>
                <Text style={styles.titleInput}>E-mail</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite seu e-mail"
                  name="email"
                  onChangeText={handleChange("email")}
                  value={values.email}
                  onBlur={handleBlur("email")}
                />
                {errors.email && touched.email && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.email}
                  </Text>
                )}
              </View>
              <View style={styles.containerInput}>
                <Text style={styles.titleInput}>Senha</Text>
                <TextInput
                  style={styles.input}
                  name="password"
                  placeholder="Digite seu senha"
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
                <Text style={styles.textoBotao}>Cadastrar-se</Text>
              </TouchableOpacity>
              <Text style={styles.lgpd}>
              Ao preencher seus dados e criar sua conta na plataforma Fantasy{"\n"}Game, você concorda com os termos e condições e afirma{"\n"}estar ciente das políticas de privacidade.
              </Text>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}