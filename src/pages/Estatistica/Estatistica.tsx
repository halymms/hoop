import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MenuSuperior } from "../../components/MenuSuperior";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/core";

interface IFivePoints {
  player__id: Number;
  player__image: string;
  player__first_name: string;
  player__last_name: string;
  player__position_category: string;
  player__team__key: string;
  hoop_total_points: string;
}

interface IFiveBlocked {
  player__id: Number;
  player__image: string;
  player__first_name: string;
  player__last_name: string;
  player__position_category: string;
  player__team__key: string;
  hoop_blocked_shots: Number;
}

export function Estatistica() {
  const navigation = useNavigation();

  const [first_name, setFirstName] = useState("");
  const [fivePoints, setFivePoints] = useState<IFivePoints[]>();

  const [fiveBlocked, setFiveBlocked] = useState<IFiveBlocked[]>();

  const maisInformacoes = async () => {
    navigation.reset({
      routes: [{ name: "Pes_Estatistica" }],
    });
  };

  const buscaInfo = async () => {
    const token = await AsyncStorage.getItem("@storage_Token");

    const { data: playerFivePoints } = await api.get(
      `stat_player/average/category/hoop_total_points`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setFivePoints(playerFivePoints);
  };

  const hoop_blocked_shots = async () => {
    const token = await AsyncStorage.getItem("@storage_Token");

    const { data: hoop_blocked_shots } = await api.get(
      `stat_player/average/category/hoop_blocked_shots`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(hoop_blocked_shots);
    setFiveBlocked(hoop_blocked_shots);
  };

  useEffect(() => {
    buscaInfo();
    hoop_blocked_shots();
  }, []);

  return (
    <ScrollView>
      <MenuSuperior />

      {fivePoints && fiveBlocked ? (
        <>
          <ScrollView>
            <View style={styles.containerMenu}>
              <Text style={styles.textContainerMenu}>Estatisticas</Text>
            </View>
            <ScrollView horizontal style={styles.carousel}>
              <View style={styles.containerAllStats}>
                {fiveBlocked.map((player, index) => {
                  if (index === 0) {
                    return (
                      <View key={player.player__id} style={styles.rowOne}>
                        <View style={styles.imageAndTitle}>
                          <View style={styles.circleImage}>
                            <Image
                              style={{
                                width: 65,
                                height: 65,
                                borderRadius: 54,
                                borderWidth: 1,
                                borderColor: "white",
                              }}
                              source={{
                                uri: player.player__image,
                              }}
                            />
                          </View>
                          <Text style={styles.title}>
                            Melhores{"\n"}Bloqueadores
                          </Text>
                        </View>
                        <View style={styles.playerAndStats}>
                          <View style={styles.playerDados}>
                            <View style={styles.containerName}>
                              <Text style={styles.namePlayer}>
                                {player.player__first_name}{" "}
                                {player.player__last_name}
                              </Text>
                              <Text style={styles.namePlayer}>
                                {player.player__team__key}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.stats}>
                            <Text style={styles.textStats}>
                              {player.hoop_blocked_shots}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  } else {
                    return (
                      <View key={player.player__id} style={styles.anyOtherLine}>
                        <View style={styles.playerAndStats}>
                          <View style={styles.playerDadosOther}>
                            <View style={styles.containerNameOther}>
                              <Text style={styles.namePlayerOther}>
                                {player.player__first_name}{" "}
                                {player.player__last_name}
                              </Text>
                              <Text style={styles.namePlayerOther}>
                                {player.player__team__key}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.statsOther}>
                            <Text style={styles.textStatsOther}>
                              {player.hoop_blocked_shots}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  }
                })}
              </View>

              <View style={styles.containerAllStats}>
                {fivePoints.map((player, index) => {
                  if (index === 0) {
                    return (
                      <View key={player.player__id} style={styles.rowOne}>
                        <View style={styles.imageAndTitle}>
                          <View style={styles.circleImage}>
                            <Image
                              style={{
                                width: 65,
                                height: 65,
                                borderRadius: 54,
                              }}
                              source={{
                                uri: player.player__image,
                              }}
                            />
                          </View>
                          <Text style={styles.title}>
                            Maiores{"\n"}Pontuadores
                          </Text>
                        </View>
                        <View style={styles.playerAndStats}>
                          <View style={styles.playerDados}>
                            <View style={styles.containerName}>
                              <Text style={styles.namePlayer}>
                                {player.player__first_name}{" "}
                                {player.player__last_name}
                              </Text>
                              <Text style={styles.namePlayer}>
                                {player.player__team__key}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.stats}>
                            <Text style={styles.textStats}>
                              {player.hoop_total_points}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  } else {
                    return (
                      <View key={player.player__id} style={styles.anyOtherLine}>
                        <View style={styles.playerAndStats}>
                          <View style={styles.playerDadosOther}>
                            <View style={styles.containerNameOther}>
                              <Text style={styles.namePlayerOther}>
                                {player.player__first_name}{" "}
                                {player.player__last_name}
                              </Text>
                              <Text style={styles.namePlayerOther}>
                                {player.player__team__key}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.statsOther}>
                            <Text style={styles.textStatsOther}>
                              {player.hoop_total_points}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  }
                })}
              </View>
            </ScrollView>
            <TouchableOpacity
              style={styles.buttonVerMais}
              onPress={maisInformacoes}
            >
              <Text style={styles.textVerMais}>Ver mais</Text>
            </TouchableOpacity>
          </ScrollView>
        </>
      ) : (
        <>
          <Text>carregando...</Text>
        </>
      )}
    </ScrollView>
  );
}
