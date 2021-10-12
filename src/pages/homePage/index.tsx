import React, { useEffect } from "react";
import { PokemonInfoItem } from "../../abstractions/pokemonInfoItem";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { setItemsList } from "../../redux/itemsList/fetch";
import { Link, useHistory } from "react-router-dom";
import "./styles.scss";
import Button from "../../components/button";

type StateProps = {
  itemsList: PokemonInfoItem[];
}

type DispatchProps = {
  setItemsList: () => void;
}

type Props = StateProps & DispatchProps;

const HomePage = (props:Props) => {

  const {setItemsList, itemsList} = props;

  let history = useHistory();

  useEffect(() => {
    setItemsList();
  }, []);

  const handleStart = () => {
    history.push("/pokeapp/question");
    setItemsList();
  }

  return <div className="home-page">
    <div className="page-wrap">
      <div className="flex-block">
        <div className="flex-row">
          <div className="flex-col">
            <div className="image-wrap background image-offset" style={{ 
              backgroundImage: `url("./pokeball-blue.png")` 
            }}>
              <img src="./6.svg" alt="Image of pokemon" />
            </div>
          </div>
          <div className="flex-col column-diraction">
            <h1 className="title title-shadow title-h1 hidden">Who is that pokemon?</h1>
            <div className="image-wrap image-wrap-auto image-wrap-sign">
              <img src="./question-sign.png" alt="Image of pokemon" />
            </div>
            <div className="image-wrap image-wrap-auto image-wrap-title">
              <img src="./pokemon-title.png" alt="Image of pokemon" />
            </div>
            {
              itemsList.length ? <Button handleClick={handleStart} className={"button-glowing"}>Let's G<img src="./pokeball.svg" alt="Image of pokemon ball" /></Button> : ""
            }
            
          </div>
        </div>
      </div>
    </div>
  </div>
}

const mapState = (state: RootState) => ({
  itemsList: state.itemsListReducer.itemsList,
});

const mapProps = (dispatch: any) => ({
  setItemsList: () => {
      dispatch(setItemsList())
  }
})

export default connect(mapState, mapProps)(HomePage);