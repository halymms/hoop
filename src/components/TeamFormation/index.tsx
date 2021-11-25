import React, { useContext } from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

import Court from '../../assets/quadradebasquete.png';
import formations from './formations';
import { LineupContext } from '../../context/LineupContext';

export type tGoToPlayersSelection = (position: string) => void;

interface ITeamFormationProps {
  formationType: string;
  goToPlayersSelection: tGoToPlayersSelection;
}

const TeamFormation: React.FC<ITeamFormationProps> = (props) => {
  const { formationType, goToPlayersSelection } = props;
  const { teamFormation } = useContext(LineupContext);

  return <View style={styles.teamFormationContainer}>
    <Image source={Court} style={{ width: '100%', height: '100%' }} />
    {formations[formationType](goToPlayersSelection, teamFormation)}
  </View>
}

export default TeamFormation;