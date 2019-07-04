import React from "react";
import Palette from "./Palette";
import SeedPalettes from "./seedColors";

function App() {
  return (
    <div>
      <Palette {...SeedPalettes[2]} />
    </div>
  );
}

export default App;
