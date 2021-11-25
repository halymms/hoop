import React, { createContext, useEffect, useState } from 'react';
import { Journey } from '../entities/Journey';
import { Lineup } from '../entities/Lineup';
import { Player } from '../entities/Player';

export const CAPTAIN = 'CAPTAIN';

export function currentDateGMT(gmt: string) {
  const currentDateGMT0 = new Date();
  return new Date(
    currentDateGMT0.toISOString().replace("Z", "") + gmt
  );
}

export interface TeamFormation {
  SF?: Player;
  C?: Player;
  PF?: Player;
  PG?: Player;
  SG?: Player;
}

interface ILineupContext {
  boughtPlayers: Player[];
  cash: number;
  teamValue: number;
  teamFormation: TeamFormation;
  reserveFormation: TeamFormation;
  captain?: Player|{};
  selectedFormationType: string;
  currentJourney?: Journey;
  currentStageIndex: number;
  lineupId: number|null;
  currentLineup?: Lineup;
  isCurrentJourneyTheLast: boolean;
  setCurrentJourney: (journey: Journey) => void;
  setReserveFormation: (reserveFormation: TeamFormation) => void;
  setBoughtPlayers: (players: Player[]) => void;
  setCash: (cash: number) => void;
  setTeamValue: (teamValue: number) => void;
  setTeamFormation: (teamFormation: TeamFormation) => void;
  setCaptain: (captain: Player|undefined) => void;
  setSelectedFormationType: (formationType: string) => void;
  setCurrentStageIndex: (stageIndex: number) => void;
  setLineupId: (id: number|null) => void;
  setCurrentLineup: (lineup: Lineup) => void;
  setIsCurrentJourneyTheLast: (isTheLast: boolean) => void;
}

const LineupContext = createContext<ILineupContext>({
  boughtPlayers: [],
  setBoughtPlayers: (players: Player[]) => {},
  cash: 0,
  teamValue: 0,
  teamFormation: {},
  reserveFormation: {},
  selectedFormationType: '',
  currentStageIndex: 0,
  lineupId: null,
  isCurrentJourneyTheLast: false,
  setCash: (cash: number) => {},
  setTeamValue: (teamValue: number) => {},
  setTeamFormation: (teamFormation: TeamFormation) => {},
  setReserveFormation: (reserveFormation: TeamFormation) => {},
  setCaptain: (captain: Player|undefined) => {},
  setSelectedFormationType: (formationType: string) => {},
  setCurrentJourney: (journey: Journey) => {},
  setCurrentStageIndex: (stageIndex: number) => {},
  setLineupId: (id: number|null) => {},
  setCurrentLineup: (lineup: Lineup) => {},
  setIsCurrentJourneyTheLast: (isTheLast: boolean) => {}
});

export const formations = [
  '2-1-2',
  '2-2-1',
  '1-2-2',
  '1-3-1',
  '3-1-1'
];

const LineupProvider: React.FC = ({ children }) => {
  const [boughtPlayers, setBoughtPlayers] = useState<Player[]>([]);
  const [cash, setCash] = useState(10000);
  const [teamValue, setTeamValue] = useState(0);
  const [teamFormation, setTeamFormation] = useState<TeamFormation>({});
  const [reserveFormation, setReserveFormation] = useState<TeamFormation>({});
  const [captain, setCaptain] = useState<Player|undefined>();
  const [selectedFormationType, setSelectedFormationType] = useState(formations[0]);
  const [currentJourney, setCurrentJourney] = useState<Journey>();
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [currentLineup, setCurrentLineup] = useState<Lineup>();
  const [lineupId, setLineupId] = useState<number|null>(null);
  const [isCurrentJourneyTheLast, setIsCurrentJourneyTheLast] = useState<boolean>(false);

  return (
    <LineupContext.Provider
      value={{
        boughtPlayers,
        setBoughtPlayers,
        cash,
        teamValue,
        teamFormation,
        reserveFormation,
        captain,
        selectedFormationType,
        setCash,
        setTeamValue,
        setTeamFormation,
        setReserveFormation,
        setCaptain,
        setSelectedFormationType,
        currentJourney,
        setCurrentJourney,
        currentStageIndex,
        setCurrentStageIndex,
        lineupId,
        setLineupId,
        currentLineup,
        setCurrentLineup,
        isCurrentJourneyTheLast,
        setIsCurrentJourneyTheLast
      }} 
    >
      {children}
    </LineupContext.Provider>
  );
}

export { LineupContext, LineupProvider };