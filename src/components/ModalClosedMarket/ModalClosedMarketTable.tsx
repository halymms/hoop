import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import { DataTable } from 'react-native-paper';
import { LineupContext } from '../../context/LineupContext';
import { PlayerStat } from '../../entities/PlayerStat';
import styles from './styles';

interface IModalClosedMarketTableProps {
  playerStat: PlayerStat;
  againstTeamName?: string;
}

const ModalClosedMarketTable: React.FC<IModalClosedMarketTableProps> = (props) => {
  const { playerStat, againstTeamName } = props;
  const { currentJourney, currentStageIndex } = useContext(LineupContext);

  return (
  <DataTable style={{
    width: '90%',
    marginTop: 20,
  }}>
    <DataTable.Header>
      <DataTable.Title style={styles.tableLabelsTitleCell}>
        <View> 
          <Text style={{
            fontFamily: 'Roboto_400Regular',
            color: '#951516',
            fontSize: 14,
          }}>
            {
              (currentJourney) &&
              `${currentJourney.name}`
            }
          </Text>
          <View style={{
            flexDirection: 'row',
            width: 100
          }}>
            <Text style={{
              fontFamily: 'Roboto_700Bold',
              color: '#951516',
              fontSize: 14,
            }}>VS {" "}</Text>
            <View style={styles.againstTeamContainer}>
              <Text style={styles.againstTeamText}>{againstTeamName}</Text>
            </View>
          </View>
        </View>
      </DataTable.Title>
      <DataTable.Title>
        <View>
          <Text style={{
            color: '#951516',
            fontSize: 16,
            textAlign: 'center'
          }}>
            Pontos
          </Text>
          <Text style={{
            color: '#951516',
            fontSize: 16,
            textAlign: 'center'
          }}>{playerStat.hoop_total_points}</Text>
        </View>
      </DataTable.Title>
    </DataTable.Header>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableLabelsColumnItem}>
        <Text style={styles.nbaDataText}>
        Turnover
        </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={styles.nbaDataText}>
          ({playerStat.tournover}){" "}
          <Text style={styles.hoopDataText}>
            {playerStat.hoop_tournover}
          </Text>
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableLabelsColumnItem}>
        <Text style={styles.nbaDataText}>
        3 Pontos
        </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={styles.nbaDataText}>
          ({playerStat.three_points_made}){" "}
          <Text style={styles.hoopDataText}>
            {playerStat.hoop_three_points_made}
          </Text>
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableLabelsColumnItem}>
        <Text style={styles.nbaDataText}>
          Lances feitos
        </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={styles.nbaDataText}>
          ({playerStat.shots_made}){" "}
          <Text style={styles.hoopDataText}>
            {playerStat.hoop_shots_made}
          </Text>
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableLabelsColumnItem}>
        <Text style={styles.nbaDataText}>
        Assistencias
        </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={styles.nbaDataText}>
          ({playerStat.assists}){" "}
          <Text style={styles.hoopDataText}>
            {playerStat.hoop_assists}
          </Text>
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableLabelsColumnItem}>
        <Text style={styles.nbaDataText}>
        Bloqueios
        </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={styles.nbaDataText}>
          ({playerStat.blocked_shots}){" "}
          <Text style={styles.hoopDataText}>
            {playerStat.hoop_blocked_shots}
          </Text>
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableLabelsColumnItem}>
        <Text style={styles.nbaDataText}>
        Rebotes
        </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={styles.nbaDataText}>
          ({playerStat.rebounds}){" "}
          <Text style={styles.hoopDataText}>
            {playerStat.hoop_rebounds}
          </Text>
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableLabelsColumnItem}>
        <Text style={styles.nbaDataText}>
        Três pontos errados
        </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={styles.nbaDataText}>
          ({playerStat.three_points_lost}){" "}
          <Text style={styles.hoopDataText}>
            {playerStat.hoop_three_points_lost}
          </Text>
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableLabelsColumnItem}>
        <Text style={styles.nbaDataText}>
        Lances errados
        </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={styles.nbaDataText}>
          ({playerStat.shots_lost}){" "}
          <Text style={styles.hoopDataText}>
            {playerStat.hoop_shots_lost}
          </Text>
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableLabelsColumnItem}>
        <Text style={styles.nbaDataText}>
          Duplo duplo
        </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={styles.nbaDataText}>
          ({playerStat.double_doubles}){" "}
          <Text style={styles.hoopDataText}>
            {playerStat.hoop_double_doubles}
          </Text>
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableLabelsColumnItem}>
        <Text style={styles.nbaDataText}>
          Triplo duplo
        </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={styles.nbaDataText}>
          ({playerStat.triple_doubles}){" "}
          <Text style={styles.hoopDataText}>
            {playerStat.hoop_triple_doubles}
          </Text>
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableLabelsColumnItem}>
        <Text style={styles.nbaDataText}>
          Faltas
        </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={styles.nbaDataText}>
          ({playerStat.fouls}){" "}
          <Text style={styles.hoopDataText}>
            {playerStat.hoop_fouls}
          </Text>
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableLabelsColumnItem}>
        <Text style={styles.nbaDataText}>
          Roubada de bola
        </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={styles.nbaDataText}>
          ({playerStat.steals}){" "}
          <Text style={styles.hoopDataText}>
            {playerStat.hoop_steals}
          </Text>
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableLabelsColumnItem}>
        <Text style={styles.nbaDataText}>
          Pontos
        </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={styles.nbaDataText}>
          ({playerStat.points}){" "}
          <Text style={styles.hoopDataText}>
            {playerStat.hoop_points}
          </Text>
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
  </DataTable>
  )
}

export default ModalClosedMarketTable;