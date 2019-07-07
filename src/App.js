import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import SeedPalettes from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log();

  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette list goes here</h1>} />
      <Route exact path="/palette/:id" render={() => <h1>indiv palette </h1>} />
    </Switch>

    // <div>
    //   <Palette palette={generatePalette(SeedPalettes[4])} />
    // </div>
  );
}

export default App;
