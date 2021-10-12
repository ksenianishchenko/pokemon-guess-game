import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";

import "./styles.scss";

type StateProps = {
  score: number;
}

type Props = StateProps;

const Score = (props:Props) => {
  const {score} = props;

  return <div className="score">
    <p>{`You got ${score} correct answers`}</p>
  </div>
}

const mapState = (state: RootState) => ({
  score: state.gameScoreReducer.score
});

const mapProps = (dispatch: any) => ({
})

export default connect(mapState, mapProps)(Score);