import React from "react";
import Palette from "./Palette";
import SeedPalettes from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(SeedPalettes[4]));

  return (
    <div>
      <Palette {...SeedPalettes[2]} />
    </div>
  );
}

export default App;
