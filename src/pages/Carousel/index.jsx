import * as React from 'react';
import styles from './styles'
import {
  Text, 
  View,
  Image,
  SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class Carousel extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              titleBestPlayer: "Melhores\nPontuadores",
              teamsBestPlayer: "BOS",
              positionBestPlayer: "1 - ",
              firstnameBestPLayer: "J.",
              lastnameBestPlayer: "Tatum",
              statsBestPlayer: "39.75",
              positionTwoPlayer: "2 - ",
              firstnameTwoPLayer: "J.",
              lastnameTwoPlayer: "Tatum",
              statsTwoPlayer: "39.75",
              positionThreePlayer: "3 - ",
              firstnameThreePLayer: "J.",
              lastnameThreePlayer: "Tatum",
              statsThreePlayer: "39.75",
              positionFourPlayer: "3 - ",
              firstnameFourPLayer: "J.",
              lastnameFourPlayer: "Tatum",
              statsFourPlayer: "39.75",
              positionFivePlayer: "3 - ",
              firstnameFivePLayer: "J.",
              lastnameFivePlayer: "Tatum",
              statsFivePlayer: "39.75"
          },
          {
            titleBestPlayer: "Melhores\nDefensores",
            teamsBestPlayer: "BOS",
            positionBestPlayer: "1 - ",
            firstnameBestPLayer: "J.",
            lastnameBestPlayer: "Tatum",
            statsBestPlayer: "39.75",
            positionTwoPlayer: "2 - ",
            firstnameTwoPLayer: "J.",
            lastnameTwoPlayer: "Tatum",
            statsTwoPlayer: "39.75",
            positionThreePlayer: "3 - ",
            firstnameThreePLayer: "J.",
            lastnameThreePlayer: "Tatum",
            statsThreePlayer: "39.75",
            positionFourPlayer: "3 - ",
            firstnameFourPLayer: "J.",
            lastnameFourPlayer: "Tatum",
            statsFourPlayer: "39.75",
            positionFivePlayer: "3 - ",
            firstnameFivePLayer: "J.",
            lastnameFivePlayer: "Tatum",
            statsFivePlayer: "39.75"
          },
          {
            titleBestPlayer: "Melhores\nArmadores",
            teamsBestPlayer: "BOS",
            positionBestPlayer: "1 - ",
            firstnameBestPLayer: "J.",
            lastnameBestPlayer: "Tatum",
            statsBestPlayer: "39.75",
            positionTwoPlayer: "2 - ",
            firstnameTwoPLayer: "J.",
            lastnameTwoPlayer: "Tatum",
            statsTwoPlayer: "39.75",
            positionThreePlayer: "3 - ",
            firstnameThreePLayer: "J.",
            lastnameThreePlayer: "Tatum",
            statsThreePlayer: "39.75",
            positionFourPlayer: "3 - ",
            firstnameFourPLayer: "J.",
            lastnameFourPlayer: "Tatum",
            statsFourPlayer: "39.75",
            positionFivePlayer: "3 - ",
            firstnameFivePLayer: "J.",
            lastnameFivePlayer: "Tatum",
            statsFivePlayer: "39.75"
          },
          {
            titleBestPlayer: "Melhores\nPontuadores",
            teamsBestPlayer: "BOS",
            positionBestPlayer: "1 - ",
            firstnameBestPLayer: "J.",
            lastnameBestPlayer: "Tatum",
            statsBestPlayer: "39.75",
            positionTwoPlayer: "2 - ",
            firstnameTwoPLayer: "J.",
            lastnameTwoPlayer: "Tatum",
            statsTwoPlayer: "39.75",
            positionThreePlayer: "3 - ",
            firstnameThreePLayer: "J.",
            lastnameThreePlayer: "Tatum",
            statsThreePlayer: "39.75",
            positionFourPlayer: "3 - ",
            firstnameFourPLayer: "J.",
            lastnameFourPlayer: "Tatum",
            statsFourPlayer: "39.75",
            positionFivePlayer: "3 - ",
            firstnameFivePLayer: "J.",
            lastnameFivePlayer: "Tatum",
            statsFivePlayer: "39.75"
          },
          {
            titleBestPlayer: "Melhores\nPontuadores",
            teamsBestPlayer: "BOS",
            positionBestPlayer: "1 - ",
            firstnameBestPLayer: "J.",
            lastnameBestPlayer: "Tatum",
            statsBestPlayer: "39.75",
            positionTwoPlayer: "2 - ",
            firstnameTwoPLayer: "J.",
            lastnameTwoPlayer: "Tatum",
            statsTwoPlayer: "39.75",
            positionThreePlayer: "3 - ",
            firstnameThreePLayer: "J.",
            lastnameThreePlayer: "Tatum",
            statsThreePlayer: "39.75",
            positionFourPlayer: "3 - ",
            firstnameFourPLayer: "J.",
            lastnameFourPlayer: "Tatum",
            statsFourPlayer: "39.75",
            positionFivePlayer: "3 - ",
            firstnameFivePLayer: "J.",
            lastnameFivePlayer: "Tatum",
            statsFivePlayer: "39.75"
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
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
                      <Text style={styles.title}>
                      {item.titleBestPlayer}
                      </Text>
                    </View>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDados}>
                        <View style={styles.positionPlayer}>
                          <Text style={styles.positionText}>{item.positionBestPlayer}</Text>
                        </View>
                        <View style={styles.containerName}>
                          <Text style={styles.namePlayer}>{item.firstnameBestPlayer} {item.lastnameBestPlayer}</Text>
                          <Text style={styles.namePlayer}>{item.teamsBestPlayer}</Text>
                        </View>
                      </View>
                      <View style={styles.stats}>
                        <Text style={styles.textStats}>{item.statsBestPlayer}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.positionPlayerOther}>
                          <Text style={styles.positionTextOther}>{item.positionTwoPlayer}</Text>
                        </View>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>{item.firstnameTwoPlayer} {item.lastnameTwoPlayer}</Text>
                          <Text style={styles.namePlayerOther}>{item.teamsTwoPlayer}</Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>{item.statsTwoPlayer}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.positionPlayerOther}>
                          <Text style={styles.positionTextOther}>{item.positionThreePlayer}</Text>
                        </View>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>{item.firstnameThreePlayer} {item.lastnameThreePlayer}</Text>
                          <Text style={styles.namePlayerOther}>{item.teamsThreePlayer}</Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>{item.statsThreePlayer}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.positionPlayerOther}>
                          <Text style={styles.positionTextOther}>{item.positionFourPlayer}</Text>
                        </View>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>{item.firstnameFourPlayer} {item.lastnameFourPlayer}</Text>
                          <Text style={styles.namePlayerOther}>{item.teamsFourPlayer}</Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>{item.statsFourPlayer}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.anyOtherLine}>
                    <View style={styles.playerAndStats}>
                      <View style={styles.playerDadosOther}>
                        <View style={styles.positionPlayerOther}>
                          <Text style={styles.positionTextOther}>{item.positionFivePlayer}</Text>
                        </View>
                        <View style={styles.containerNameOther}>
                          <Text style={styles.namePlayerOther}>{item.firstnameFivePlayer} {item.lastnameFivePlayer}</Text>
                          <Text style={styles.namePlayerOther}>{item.teamsFivePlayer}</Text>
                        </View>
                      </View>
                      <View style={styles.statsOther}>
                        <Text style={styles.textStatsOther}>{item.statsFivePlayer}</Text>
                      </View>
                    </View>
                  </View>
                </View>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}