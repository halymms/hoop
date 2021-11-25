import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { View } from 'react-native';
import { Step, tAllStages, tAllTeams } from './Selecao';

import styles from './styles';

interface IPickersContainerProps {
  selectedTeams: tAllTeams;
  setSelectedTeams: (teams: tAllTeams) => void;
  selectedSteps: tAllStages;
  setSelectedSteps: (step: tAllStages) => void;
  teams: tAllTeams;
  steps: tAllStages;
}

const PickersContainer: React.FC<IPickersContainerProps> = (props) => {
  const {
    selectedTeams,
    setSelectedTeams,
    selectedSteps,
    setSelectedSteps,
    teams,
    steps
  } = props;

  return (
    <View style={styles.pickersContainer}>
      <View
      style={styles.pickerViewContainer}
      > 
        <Picker
          selectedValue="-1"
          style={{width: 130, color: '#951516' }}
          mode='dropdown'
          onValueChange={(value: string) => {
            if (value === "-1") return;
            const currentTeam = teams[value];
            if (value in selectedTeams) return;
            const newSelectedTeams = { [value]: currentTeam, ...selectedTeams };
            setSelectedTeams(newSelectedTeams);
            console.log("Adicionou: ", currentTeam.name)
          }}
        >
          <Picker.Item 
            label="Equipes"
            value="-1"
          />
          {
            teams && Object.keys(teams).map((teamKey) => {
              return <Picker.Item 
                label={teams[teamKey].name} 
                value={teamKey} 
                key={teamKey}
              />
            })
          }
        </Picker>
      </View>
      <View
      style={styles.pickerViewContainer}
      > 
        <Picker
          selectedValue={"-1"}
          style={{width: 130, color: '#951516' }}
          mode='dropdown'
          onValueChange={(value: string) => {
            if (value === "-1") return;
            const currentStep = steps[value];
            if (value in selectedSteps) return;
            const newSelectedSteps = { [value]: currentStep, ...selectedSteps };
            setSelectedSteps(newSelectedSteps);
            console.log("Adicionou: ", currentStep.name)
          }}
        >
          <Picker.Item 
            label="Etapas"
            value={"-1"}
          />
          {
            steps && Object.keys(steps).map((stepKey) => {
              return <Picker.Item 
                label={`Etapa ${stepKey}`} 
                value={stepKey} 
                key={stepKey}
              />
            })
          }
        </Picker>
      </View>
    </View>
  )
}

export default PickersContainer;