import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "90%",
    height: 230,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    backgroundColor: "#F6F6F6",
    borderRadius: 5,
  },

  cardPlayer: {
    flexDirection: "row",
  },

  containerImgPlayer: {
    height: 59,
    width: 59,
    marginLeft: 24,
    marginRight: 5,
    marginTop: 29,
  },
  
  containerImgTeam: {
    height: 59,
    width: 59,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 29,
  },
  
  imgPlayer: {
    height: 59,
    width: 59,
    backgroundColor: "gray",
    borderRadius: 50,
  },
  
  imgTeam: {
    height: 59,
    width: 59,
    borderRadius: 50
  },

  containerText: {
    width: "40%",
    alignItems: "center",
    marginTop: 40,
  },
  textPlayerView: {
    flexDirection:'row',
    alignItems: 'center',
  },
  
  ball: {
    width: Dimensions.get("window").width * 0.04,
    height: Dimensions.get("window").width * 0.04,
    borderRadius: (Dimensions.get("window").width * 0.04) / 2,
    marginHorizontal: "2.5%",
    elevation: 5,
  },

  textPlayer: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#951516",
    fontWeight: "bold",
  },

  textSelectPlayer: {
    marginTop: 11,
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#6B6A6A",
    marginLeft: 7
  },

  lineCenter: {
    marginTop: 19,
    marginBottom: 19,
    borderBottomColor: "#DFDFDF",
    borderBottomWidth: 1,
    width: "88%",
    alignSelf: "center",
  },

  textPrice: {
    marginRight: 38,
    color: "#CA9500",
    fontSize: 15,
    fontWeight: "bold",
  },
  textPTM: {
    marginLeft: 38,
    fontSize: 11,
    color: "#951516",
    fontWeight: "bold",
  },

  containerPrice: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  buttonBuy: {
    backgroundColor: "#008B2F",
    height: 37,
    width: 277,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  textButton: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});