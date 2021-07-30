import React, { useState } from "react";
import Clock from "./Components/Clock";
import Test from "./Components/Test";

function App() {
   const [state, setstate] = useState(150);
   return (
      <div>
         <h2>Hello Lancer Abir </h2>
         <Test />
         <Clock local="bn-BD" number={state} />
      </div>
   );
}

export default App;
