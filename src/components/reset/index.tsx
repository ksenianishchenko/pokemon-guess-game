import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentQuestion } from "../../redux/itemInfo/actions";
import { setScoreAction } from "../../redux/score/actions";
import { RootState } from "../../redux/store";
import "./styles.scss";

type DispatchProps = {
  resetCurrentScore(score: number): void;
  resetCurrentQuestion(): void;
}

type Props = DispatchProps;

const Reset = (props:Props) => {
  const {resetCurrentScore,
    resetCurrentQuestion} = props;

  const onBackButtonClick = () => {
    resetCurrentScore(0);
    resetCurrentQuestion();
  }

  return <div className="header">
    <Link to="/" className="link link-icon title" onClick={onBackButtonClick}><span>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 38.687 36.969" fill="#ffcb05">
      <path id="arrow_left" data-name="Left Arrow" d="M123.158,49.587l18.47,18.469-3.315,3.315L119.843,52.9Zm18.47-11.866-18.47,18.469-3.315-3.315,18.47-18.469Zm16.909,17.332H126.156V50.366h32.381v4.688Z" transform="translate(-119.844 -34.406)"/>
    </svg>Back
    </span></Link>
  </div>
}

const mapState = (state: RootState) => ({
});

const mapProps = (dispatch: any) => ({
  resetCurrentScore: (score:number) => {
    dispatch(setScoreAction(score));
  },
  resetCurrentQuestion: () => {
    dispatch(setCurrentQuestion({}));
  },
})

export default connect(mapState, mapProps)(Reset);

function setItemsList(): any {
  throw new Error("Function not implemented.");
}
