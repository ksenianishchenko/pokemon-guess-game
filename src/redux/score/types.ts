export type GameScoreState = {
  score: number;
}

type SetGameScoreAction = {
  type: string;
  payload: number;
}

export type GameScoreActions = SetGameScoreAction