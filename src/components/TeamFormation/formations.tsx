import React from 'react';
import { View } from 'react-native';
import { tGoToPlayersSelection } from '.';
import { TeamFormation } from '../../context/LineupContext';
import PlayerCircle from '../PlayerCircle';
import styles from './styles';

type tFormation = {
  [key: string]: any;
}

const formations: tFormation = {
  '2-1-2': (goToPlayersSelection: tGoToPlayersSelection, teamFormation: TeamFormation) => {
    return <View style={styles.allPlayers}>
      <View style={[styles.playerRow, {
        marginLeft: 42,
        marginTop: 20,
        width: '65%',
      }]}>
       <PlayerCircle
       playerImageUrl={(teamFormation as tFormation)["SF"]?.image} 
          title="SF" 
          onPress={() => goToPlayersSelection('SF')} 
          style={{
          }}
        />
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["PF"]?.image} title="PF" onPress={() => goToPlayersSelection('PF')} />
      </View>
      <View
        style={[styles.playerRow,{
          marginLeft: 42,
          marginTop: 30,
          width: '65%',
        }]}
      >
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["C"]?.image} 
          title="C" 
          onPress={() => goToPlayersSelection('C')} 
        />
      </View>
      <View
        style={[
          styles.playerRow,
          {
            marginLeft: 42,
            marginTop: 70,
            width: '65%',
          }
        ]}
      >
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["PG"]?.image} title="PG" onPress={() => goToPlayersSelection('PG')} />
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["SG"]?.image} title="SG" onPress={() => goToPlayersSelection('SG')} />
      </View>
    </View> 
  },
  '2-2-1': (goToPlayersSelection: tGoToPlayersSelection, teamFormation: TeamFormation) => {
    return <View style={styles.allPlayers}>
      <View style={[
        styles.playerRow,
        {
          marginLeft: 42,
          marginTop: 40,
          width: '65%',
        }
      ]}>
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["C"]?.image} title="C" onPress={() => goToPlayersSelection('C')} />
      </View>
      <View style={[
        styles.playerRow,
        {
          marginLeft: 42,
          marginTop: 20,
          width: '100%'
        }
      ]}>
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["SF"]?.image} title="SF" onPress={() => goToPlayersSelection('SF')} />
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["PF"]?.image} title="PF" onPress={() => goToPlayersSelection('PF')} />
      </View>
      <View style={[
        styles.playerRow,
        {
          marginLeft: 42,
          marginTop: 60,
          width: '80%'
        }
      ]}>
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["PG"]?.image} title="PG" onPress={() => goToPlayersSelection('PG')} />
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["SG"]?.image} title="SG" onPress={() => goToPlayersSelection('SG')} />
      </View>
    </View> 
  },
  '1-2-2': (goToPlayersSelection: tGoToPlayersSelection, teamFormation: TeamFormation) => {
    return <View style={styles.allPlayers}>
      <View style={[
        styles.playerRow,
        {
          marginLeft: 40,
          marginTop: 20,
          width: '65%',
        }
      ]}>
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["C"]?.image} title="C" onPress={() => goToPlayersSelection('C')} />
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["PF"]?.image} title="PF" onPress={() => goToPlayersSelection('PF')} />
      </View>
      <View style={[
        styles.playerRow,
        {
          marginLeft: 42,
          marginTop: 95,
          width: '80%'
        }
      ]}>
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["SF"]?.image} title="SF" onPress={() => goToPlayersSelection('SF')} />
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["SG"]?.image} title="SG"  onPress={() => goToPlayersSelection('SG')} />
      </View>
      <View style={[
        styles.playerRow,
        {
          marginLeft: 42,
          marginTop: 20,
          width: '80%'
        }
      ]}>
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["PG"]?.image} title="PG" onPress={() => goToPlayersSelection('PG')} />
      </View>
    </View> 
  },
  '1-3-1': (goToPlayersSelection: tGoToPlayersSelection, teamFormation: TeamFormation) => {
    return <View style={styles.allPlayers}>
      <View style={[
        styles.playerRow,
        {
          marginLeft: 42,
          marginTop: 40,
          width: '65%',
        }
      ]}>
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["C"]?.image} title="C" onPress={() => goToPlayersSelection('C')} />
      </View>
      <View style={[
        styles.playerRow,
        {
          marginLeft: 42,
          marginTop: 20,
          width: '100%'
        }
      ]}>
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["SG"]?.image} title="SG" onPress={() => goToPlayersSelection('SG')} />
      </View>
      <View style={[
        styles.playerRow,
        {
          marginLeft: 42,
          width: '80%'
        }
      ]}>
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["SF"]?.image} title="SF" onPress={() => goToPlayersSelection('SF')} />
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["PF"]?.image} title="PF" onPress={() => goToPlayersSelection('PF')} />
      </View>
      <View
        style={[
          styles.playerRow,
          {
            marginLeft: 42,
            width: '80%'
          }
        ]}
      >
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["PG"]?.image} title="PG" onPress={() => goToPlayersSelection('PG')} />
      </View>
    </View> 
  },
  '3-1-1': (goToPlayersSelection: tGoToPlayersSelection, teamFormation: TeamFormation) => {
    return <View style={styles.allPlayers}>
      <View style={[
        styles.playerRow,
        {
          marginLeft: 42,
          marginTop: 40,
          width: '65%',
        }
      ]}>
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["C"]?.image} title="C" onPress={() => goToPlayersSelection('C')} />
      </View>
      <View style={[
        styles.playerRow,
        {
          marginLeft: 42,
          marginTop: 20,
          width: '100%'
        }
      ]}>
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["PF"]?.image} title="PF" onPress={() => goToPlayersSelection('PF')} />
      </View>
      <View style={[
        styles.playerRow,
        {
          marginLeft: 42,
          marginTop: 30,
          width: '100%'
        }
      ]}>
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["SF"]?.image} title="SF" onPress={() => goToPlayersSelection('SF')} />
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["SG"]?.image} title="SG" onPress={() => goToPlayersSelection('SG')} />
      </View>
      <View
        style={[
          styles.playerRow,
          {
            marginLeft: 42,
            width: '100%'
          }
        ]}
      >
        <PlayerCircle
        playerImageUrl={(teamFormation as tFormation)["PG"]?.image} title="PG" onPress={() => goToPlayersSelection('PG')} />
      </View>
    </View> 
  }
};

export default formations;