import React from "react";
import Palette from "./Palette";
import SeedPalettes from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log();

  return (
    <div>
      <Palette palette={generatePalette(SeedPalettes[4])} />
    </div>
  );
}

export default App;
