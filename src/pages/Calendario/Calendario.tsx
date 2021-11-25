import React, { useEffect, useState } from "react";

import { SvgUri } from "react-native-svg";

import { View, Text, ScrollView, Button } from "react-native";

import moment from 'moment';
import { useNavigation } from "@react-navigation/core";
import { MenuSuperior } from "../../components/MenuSuperior";
import api from "../../services/api";
import styles from "./styles";


interface IJourney {
  name: string;
}

interface EnviromentProps {
    id: string;
    name: string;
    game: IGame;
}

interface IGame {
    id: string;
    away_team: string;
    home_team: string;
    day: Date;
}

interface IEtapa {
  id: number;
  game: IGame[];
  journey: IJourney;
  name: string;
  start_date: Date;
  end_date: Date;
}

export function Calendario() {
  const navigation = useNavigation();

  const [numJornada, setNumJornada] = useState(1);
  const [enviroments, setEnviroments] = useState<[]>([]);
  const [etapas, setEtapas] = useState<IEtapa[]>();
  const [games, setGames] = useState([]);
  const [data, setData] = useState()

  async function loadJourney() {
    try {
      const { data } = await api.get(`stage/journey/${numJornada}`);
      const result = data;
      setEtapas(data);

      result.map((teste: { game: React.SetStateAction<never[]> }) => {
        setGames(teste.game);
        console.log(teste.game)
      });
    } catch {
      console.log("erro na conexÃ£o tente novamente.");
    }
  }

  useEffect(() => {
    loadJourney();
  }, [numJornada]);

  const handleAdd = () => {
    setNumJornada(numJornada + 1);
  };

  const handleDim = () => {
    if (numJornada > 1) {
      setNumJornada(numJornada - 1);
    }
  }

  return (
    <View style={styles.containerPai}>
      <MenuSuperior />
      <View style={styles.containerMenu}>
        <Text style={styles.textContainerMenu}>Calendario</Text>
      </View>
      <View style={styles.containerPaiCarousel}>
        <View style={styles.containerCarousel}>
          <Button onPress={handleDim} title="<" color="#951516" />
            <Text style={styles.textJourney}>Jornada {numJornada}</Text>
          <Button onPress={handleAdd} title=">" color="#951516" />
        </View>
      </View>
      <ScrollView>
        {etapas ? (
          <>
            {etapas.map((etapa) => {
              return (
                <View key={etapa.name}>
                  <Text style={styles.titleEtapa}>{etapa.name.replace('Stage', 'Etapa')}</Text>
                  {etapa.game.map((item) => {
                    return (
                      <View style={styles.container} key={item.id}>
                        <View style={styles.containerGame} key={item.id + item.home_team}>
                          <View style={styles.containerInfo}>
                            <View style={styles.timeGame}>
                              <Text>{item.status}</Text>
                              <Text>{moment(item.day).format('MMM Do YY')}</Text>
                            </View>
                            <View style={styles.border}>
                              <View
                                style={{
                                  flex: 1,
                                  height: 1,
                                  backgroundColor: "#DFDFDF",
                                }}
                              />                               
                            </View>
                            <View style={styles.containerPlacar}>
                              <View style={styles.containerTimes}>
                                <SvgUri
                                  width="66px"
                                  height="66px"
                                  uri={item.away_team.image}
                                />
                                {
                                  <Text style={styles.titleTeam}>
                                    {item.away_team.name}
                                  </Text>
                                }
                              </View>
                              <View style={styles.containerScore}>
                                <Text style={styles.team}>
                                  {item.away_team_score}
                                </Text>
                                <Text style={styles.textVersus}>X</Text>
                                <Text style={styles.team}>
                                  {item.home_team_score}
                                </Text>
                              </View>
                              <View style={styles.containerTimes}>
                                <SvgUri
                                  width="66px"
                                  height="66px"
                                  uri={item.home_team.image}
                                />
                                {
                                  <Text style={styles.titleTeam}>
                                    {item.home_team.name}
                                  </Text>
                                }
                              </View>
                            </View>
                            <View style={styles.localGame}>
                              <Text style={styles.localTitle}>
                                {item.stadium.name} | {item.stadium.city}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </>
        ) : (
          <View>
            <Text>carregando...</Text>
          </View>
        )}
      </ScrollView>
    </View>
  )
}