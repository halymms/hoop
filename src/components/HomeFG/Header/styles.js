import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const ContainerInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90.5%;
  padding-top: 18px;
`;

export const Mercado = styled.Text`
  font-size: 13px;
  font-family: Roboto_400Regular;
  color: #fff;
  padding-left: 8px;
`;

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 195,
    backgroundColor: "#AF4153",
    alignItems: "center",
  },
  containerName: {
    flexDirection: "row",
    width: "100%",
    marginTop: 31,
    marginBottom: 18,
    alignItems: "center",
  },
  nameCircle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    marginLeft: 19,
    height: 44,
    width: 44,
    backgroundColor: "#FAFAFA",
  },
  textCircle: {
    fontSize: 18,
    fontFamily: "Roboto_500Medium",
    color: "#951516",
    textTransform: 'uppercase'
  },
  welcomeName: {
    marginLeft: 17,
  },
  welcomeTextOne: {
    fontSize: 18,
    fontFamily: "Rubik_500Medium",
    color: "#fff",
  },
  welcomeTextTwo: {
    fontSize: 16,
    fontFamily: "Rubik_400Regular",
    color: "#fff",
    textTransform: 'capitalize'
  },
  containerMercado: {
    flexDirection: 'row'
  },
  containerPontuacao: {
    
  },
  descPontuacao: {
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
    color: '#fff'
  },
  pontuacao: {
    fontSize: 22,
    fontFamily: 'Roboto_700Bold',
    color: '#fff'
  }
});
