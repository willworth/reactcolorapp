import React from "react";
import Palette from "./Palette";
import SeedPalettes from "./seedColors";

function App() {
  return (
    <div>
      <Palette palette={SeedPalettes[4]} />
    </div>
  );
}

export default App;
