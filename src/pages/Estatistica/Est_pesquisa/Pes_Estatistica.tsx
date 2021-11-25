import React, { useState } from "react";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../../../services/api";

import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";

interface IListPlayers {
  player__id: Number;
  player__image: string;
  player__first_name: string;
  player__last_name: string;
  player__position_category: string;
  player__team__key: string;
  hoop_three_points_lost: Number;
  hoop_three_points_made: Number;
  hoop_shots_lost: Number;
  hoop_shots_made: Number;
  hoop_tournover: Number;
  hoop_double_doubles: Number;
  hoop_triple_doubles: Number;
  hoop_fouls: Number;
  hoop_rebounds: Number;
  hoop_assists: Number;
  hoop_blocked_shots: Number;
  hoop_steals: Number;
  hoop_total_points: Number;
}

export function Pes_Estatistica() {
  const [pesquisa, setPesquisa] = useState("");
  const [listPlayer, setListPlayer] = useState<IListPlayers[]>();
  const [filtroSelecionado, setFiltroSelecionado] = useState("Jogador");
  const [textButton, setTextButton] = useState("Insira o nome do jogador");

  const Pesquisar = async () => {
    const token = await AsyncStorage.getItem("@storage_Token");

    if (filtroSelecionado === "Jogador") {
      try {
        const listplayers = await api.get(
          `stat_player/average/player/${pesquisa}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setListPlayer(listplayers.data);
      } catch {
        Alert.alert("Erro", "Nenhum Jogador encontrado.");
      }
    } else {
      try {
        const listplayers = await api.get(
          `stat_player/average/team/${pesquisa}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setListPlayer(listplayers.data);
      } catch {
        Alert.alert("Erro", "Nenhum Time encontrado.");
      }
    }
  };

  const PressTime = () => {
    setPesquisa('')
    setTextButton("Insira o nome do time");
    setFiltroSelecionado("Time");
  };

  const PressJogador = () => {
    setPesquisa('')
    setTextButton("Insira o nome do jogador");
    setFiltroSelecionado("Jogador");

  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerMenu}>
          <Text style={styles.textContainerMenu}>Estatisticas</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableHighlight
            style={styles.buttons}
            underlayColor="#CC4F64"
            onPress={PressTime}
          >
            <Text style={styles.textButton}>Time</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttons}
            underlayColor="#CC4F64"
            onPress={PressJogador}
          >
            <Text style={styles.textButton}>Jogador</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            name="pesquisa"
            value={pesquisa}
            style={styles.input}
            onChangeText={(t) => setPesquisa(t)}
            placeholder={textButton}
          />
        </View>

        <TouchableOpacity style={styles.buttonPesquisar} onPress={Pesquisar}>
          <Text style={styles.textbuttonPesquisar}> Pesquisar </Text>
        </TouchableOpacity>

        {listPlayer ? (
          <>
            {listPlayer.map((player) => {
              return (
                <View style={styles.containerAllStats} key={player.player__id}>
                  <View style={styles.rowOne}>
                    <View style={styles.imageAndTitle}>
                      <View style={styles.circleImage}>
                        <Image
                          style={{ width: 65, height: 65, borderRadius: 54 }}
                          source={{
                            uri: player.player__image,
                          }}
                        />
                      </View>

                      <View style={styles.positionPlayer}>
                        <Text style={styles.textPositionPlayer}>
                          Posição: {"\n"}
                          {player.player__position_category}{" "}
                        </Text>
                      </View>
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
                          {player.hoop_total_points.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>
                            Pontos de 3 perdidos
                          </Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>
                          {player.hoop_three_points_lost.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>
                            Pontos de 3 feitos
                          </Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>
                          {player.hoop_three_points_made.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>
                            Arremessos Perdidos
                          </Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>
                          {player.hoop_shots_lost.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>
                            Arremessos Feitos
                          </Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>
                          {player.hoop_shots_made.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>Tournover</Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>
                          {player.hoop_tournover.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>
                            Double doubles
                          </Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>
                          {player.hoop_double_doubles.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>
                            Triple doubles
                          </Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>
                          {player.hoop_triple_doubles.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>Faltas</Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>
                          {player.hoop_fouls.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>Rebotes</Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>
                          {player.hoop_rebounds.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>
                            Assistência
                          </Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>
                          {player.hoop_assists.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>
                            Arremessos bloqueados
                          </Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>
                          {player.hoop_blocked_shots.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>
                            Roubos de bola
                          </Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>
                          {player.hoop_steals.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </>
        ) : (
          <>
            <Text>Nenhum jogador pesquisado.</Text>
          </>
        )}
      </View>
    </ScrollView>
  );
}
