import React, { useState } from "react";
import EggBoil from "./EggBoil";
import LiftingStateUp from "./LiftingStateUp";

const Calculator = () => {
    const [temperature, setTemperature] = useState(0);
    return (
        <div>
            <LiftingStateUp />
            <EggBoil temperature={temperature} />
        </div>
    );
};

export default Calculator;
