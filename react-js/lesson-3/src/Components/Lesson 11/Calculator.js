import React, { useState } from "react";
import InputData from "./InputData";
import LiftingStateUp from "./LiftingStateUp";

const Calculator = () => {
    const [temperature, setTemperature] = useState(0);
    const [DefaultValue, setDefaultValue] = useState(0);

    const ChangeHandler = (e) => {
        setTemperature(e.target.value);
    };

    return (
        <div>
            <h2>Lesson 11 - Lifting State Up</h2>
            <InputData
                temper="fahrenheit"
                // onChange={ChangeHandler}
                // value={temperature}
                ChangeHandler={ChangeHandler}
                temperature={parseFloat(temperature)}
                DefaultValue={parseFloat(DefaultValue)}
            />
            <InputData
                temper="celsius"
                // onChange={ChangeHandler}
                // value={temperature}
                temperature={parseFloat(temperature)}
                ChangeHandler={ChangeHandler}
                DefaultValue={parseFloat(DefaultValue)}
            />
            <LiftingStateUp temperature={temperature} />
        </div>
    );
};

export default Calculator;
