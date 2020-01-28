import React from "react";
//import LandingScreen from "./components/LandingScreen/LandingScreen";
import { Route, Switch } from "react-router-dom";
import Error from "./components/Error/Error";
import GameScreen from "./components/GameScreen/GameScreen";
import ResultScreen from "./components/ResultScreen/ResultScreen";
import LandingScreen from "./components/LandingScreen/LandingScreen";

function App() {
  const [count, setCount] = React.useState(0);
  const [badCount, setBadCount] = React.useState(0);

  return (
    <main className="App">
      <Switch>
        {/* setting game screen as home for code review */}
        <Route path="/" render={() => <LandingScreen />} exact />
        <Route
          path="/game"
          render={() => (
            <GameScreen
              count={count}
              setCount={setCount}
              badCount={badCount}
              setBadCount={setBadCount}
            />
          )}
        />
        <Route
          path="/results"
          render={() => (
            <ResultScreen
              count={count}
              setCount={setCount}
              badCount={badCount}
              setBadCount={setBadCount}
            />
          )}
        />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
