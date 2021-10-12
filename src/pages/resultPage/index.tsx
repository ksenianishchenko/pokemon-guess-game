import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import Score from "../../components/score";
import Reset from "../../components/reset";


const ResultPage = () => {

  return <div className="result-page">
    <div className="page-wrap">
      <Score />
      <div className="image-wrap background block-align-center">
        <img src="/pikachu.svg" alt="Image of pokemon" />
      </div>
      <Reset />
    </div>
  </div>
}

export default ResultPage;