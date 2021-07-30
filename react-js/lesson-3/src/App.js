import React, { useState } from "react";
import Clock from "./Components/Clock";
import ConditionalRendering from "./Components/ConditionalRendering";
import EventsHandling from "./Components/EventsHandling";
import Test from "./Components/Test";

function App() {
   const [state, setstate] = useState(150);

   return (
      <div>
         <h1>Learn With Sumith React.js Tutorial </h1>
         <Test />
         <p>=======================================</p>
         <Clock local="bn-BD" number={state} />
         <p>=======================================</p>
         <EventsHandling />
         <p>=======================================</p>
         <ConditionalRendering />
      </div>
   );
}

export default App;
