import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

const cardTwo = () => {
  return (
    <View style={styles.containerAllStats}>
      <View style={styles.rowOne}>
        <View style={styles.imageAndTitle}>
          <View style={styles.circleImage}>
            <Image
              source={{
                uri: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nba/low-res/20001829.png",
              }}
            />
          </View>
          <Text style={styles.title}>Melhores{"\n"}Pontuadores</Text>
        </View>
        <View style={styles.playerAndStats}>
          <View style={styles.playerDados}>
            <View style={styles.positionPlayer}>
              <Text style={styles.positionText}>1 - </Text>
            </View>
            <View style={styles.containerName}>
              <Text style={styles.namePlayer}>J. Tatum</Text>
              <Text style={styles.namePlayer}>BOS</Text>
            </View>
          </View>
          <View style={styles.stats}>
            <Text style={styles.textStats}>35.75</Text>
          </View>
        </View>
      </View>
      <View style={styles.anyOtherLine}>
        <View style={styles.playerAndStats}>
          <View style={styles.playerDadosOther}>
            <View style={styles.positionPlayerOther}>
              <Text style={styles.positionTextOther}>2 - </Text>
            </View>
            <View style={styles.containerNameOther}>
              <Text style={styles.namePlayerOther}>J. Tatum</Text>
              <Text style={styles.namePlayerOther}>BOS</Text>
            </View>
          </View>
          <View style={styles.statsOther}>
            <Text style={styles.textStatsOther}>35.75</Text>
          </View>
        </View>
      </View>
      <View style={styles.anyOtherLine}>
        <View style={styles.playerAndStats}>
          <View style={styles.playerDadosOther}>
            <View style={styles.positionPlayerOther}>
              <Text style={styles.positionTextOther}>3 - </Text>
            </View>
            <View style={styles.containerNameOther}>
              <Text style={styles.namePlayerOther}>J. Tatum</Text>
              <Text style={styles.namePlayerOther}>BOS</Text>
            </View>
          </View>
          <View style={styles.statsOther}>
            <Text style={styles.textStatsOther}>35.75</Text>
          </View>
        </View>
      </View>
      <View style={styles.anyOtherLine}>
        <View style={styles.playerAndStats}>
          <View style={styles.playerDadosOther}>
            <View style={styles.positionPlayerOther}>
              <Text style={styles.positionTextOther}>4 - </Text>
            </View>
            <View style={styles.containerNameOther}>
              <Text style={styles.namePlayerOther}>J. Tatum</Text>
              <Text style={styles.namePlayerOther}>BOS</Text>
            </View>
          </View>
          <View style={styles.statsOther}>
            <Text style={styles.textStatsOther}>35.75</Text>
          </View>
        </View>
      </View>
      <View style={styles.anyOtherLine}>
        <View style={styles.playerAndStats}>
          <View style={styles.playerDadosOther}>
            <View style={styles.positionPlayerOther}>
              <Text style={styles.positionTextOther}>5 - </Text>
            </View>
            <View style={styles.containerNameOther}>
              <Text style={styles.namePlayerOther}>J. Tatum</Text>
              <Text style={styles.namePlayerOther}>BOS</Text>
            </View>
          </View>
          <View style={styles.statsOther}>
            <Text style={styles.textStatsOther}>35.75</Text>
          </View>
        </View>
      </View>
      {/* <Text>
                    ID_Jogador:
                    {player.player__id}
                  </Text> */}
    </View>
  );
};

export default cardTwo;
