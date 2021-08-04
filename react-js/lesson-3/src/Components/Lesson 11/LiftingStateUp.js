import React from "react";
import InputData from "./InputData";

const LiftingStateUp = () => {
    // <EggBoil temperature={temperature} />
    return (
        <div>
            <h2>Lesson 11 - Lifting State Up</h2>
            <InputData temper="fahrenheit" />
            <InputData temper="celsius" />
        </div>
    );
};

export default LiftingStateUp;
