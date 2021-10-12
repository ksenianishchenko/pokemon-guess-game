import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/homePage/index";
import './App.scss';
import ItemDetailsPageWithRouter from "./pages/itemDetailsPage/index";
import QuestionPage from "./pages/questionPage";
import ResultPage from "./pages/resultPage";

const App = () => {

  useEffect(() => {
  })

  return (
    <div className="App background">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/pokeapp/question" component={QuestionPage} />
          <Route exact path="/pokeapp/result" component={ResultPage} />
          <Route exact path="/pokeapp/:pokemonId/" component={ItemDetailsPageWithRouter} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
