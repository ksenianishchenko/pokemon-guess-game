import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { PokemonInfoItem } from "../../abstractions/pokemonInfoItem";
import { setQuestion } from "../../redux/itemInfo/fetch";
import { RootState } from "../../redux/store";
import Button from "../button";
import RadioGroup from "../radioGroup";
import { useHistory } from "react-router-dom";
import "./styles.scss";
import Timer from "../timer";
import { setScoreAction } from "../../redux/score/actions";
import ItemDetails from "../itemDetails";
import { setCurrentQuestion } from "../../redux/itemInfo/actions";

type StateProps = {
  itemsList: PokemonInfoItem[];
  currentQuestion: PokemonInfoItem | any;
  options: string[];
  score: number;
}

type DispatchProps = {
  getCurrentQuestion(id:number): void;
  setCurrentScore(score: number): void;
  resetCurrentQuestion(): void;
}

type Props = StateProps & DispatchProps;

const QuestionCard = (props:Props) => {

  const {itemsList,
    currentQuestion,
    getCurrentQuestion,
    options,
    setCurrentScore,
    resetCurrentQuestion,
    score} = props;

  const [userAnswer, setUserAnswer] = useState<string>();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isImageHidden, setIsImageHidden] = useState<boolean>(true);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [isNextButtonActive, setIsNextButtonActive] = useState<boolean>(false);
  const [count, setCount] = useState(5);

  let history = useHistory();

  const handleAnswerStatus = (answer:string) => {
    if(currentQuestion && currentQuestion.name) {
      if(currentQuestion.name === answer) {
        setIsAnswerCorrect(true);
        setCurrentScore(score + 1);
      }
    }
  }

  const handleUserAnswer = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // get user answer
    let currentOptionValue = evt.target.value;
    setUserAnswer(currentOptionValue);
    if (isImageHidden === true) {
      setIsImageHidden(false);
    }

    handleAnswerStatus(currentOptionValue);

    setIsNextButtonActive(true);
    console.log(currentQuestion);
  }

  const handleNextStep = () => {
    if(currentStep < 10) {
      setCurrentStep(currentStep + 1);
    } else {
      history.push("/pokeapp/result");
    }
    //reset answer
    setUserAnswer("");
    setIsAnswerCorrect(false);
    setCount(5);
    setIsNextButtonActive(false);
    resetCurrentQuestion();
  }

  useEffect(() => {

    let interval = setInterval(() => {
      if (count !== 0) {
        setCount(count - 1);
      }
    }, 1000);

    if (count === 0) {
      clearInterval(interval);
      if (isImageHidden === true) {
        setIsImageHidden(false);
      }
      setIsNextButtonActive(true);
    }

    return (() => {
      clearInterval(interval);
    });
  }, [count]);

  useEffect(() => {
    getCurrentQuestion(currentStep);
  }, [currentStep]);

  useEffect(() => {
    setIsImageHidden(true);
  }, [currentQuestion]);

  if (Object.keys(currentQuestion).length) {
    return <div className="question-card">
      <div className="timer">
        <span>{count}</span>
      </div>
      <div className="flex-row">
        <div className="flex-col">
          <div className={isImageHidden ? `questions-image-wrap filter background` : `questions-image-wrap background`} >
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${currentQuestion.id}.svg`} alt="Image of pokemon" />
          </div>
        </div>
        {
          userAnswer || count === 0 ? <div className="flex-col">
            {
              currentQuestion ? <ItemDetails item={currentQuestion}/>: <div></div>
            }
          </div> : <div className="flex-col">
            <div className="question-answer-options">
              {
                options ? options.map((item, index) => {
                  return <div className="radio-button-wrap" key={index}>
                    <RadioGroup
                      id={item}
                      name={"question-option"}
                      value={item}
                      handleClick={handleUserAnswer}
                    />
                  </div>
                }) : <div>No options</div>
              }
            </div>
        </div>
        }
      </div> 
      {
        //isAnswerCorrect === true ? <p>Correct</p> : <p></p>
      }
      {
        isNextButtonActive ? <Button handleClick={handleNextStep}> Next </Button> : ""
      }
  </div>
  } else {
    return <p>"Loading"</p>
  }
  
  
}

const mapState = (state: RootState) => ({
  itemsList: state.itemsListReducer.itemsList,
  currentQuestion: state.itemInfoReducer.currentQuestion,
  options: state.itemInfoReducer.currentOptions,
  score: state.gameScoreReducer.score
});

const mapProps = (dispatch: any) => ({
  getCurrentQuestion: (id:number) => {
    dispatch(setQuestion(id));
  },
  setCurrentScore: (score:number) => {
    dispatch(setScoreAction(score));
  },
  resetCurrentQuestion: () => {
    dispatch(setCurrentQuestion({}));
  }
})

export default connect(mapState, mapProps)(QuestionCard);