import React, { useState } from "react";

const InputData = ({ temper }) => {
    const [temperature, setTemperature] = useState(0);

    const ChangeHandler = (e) => {
        if (e.target.name === "sobita") {
            setTemperature(e.target.value);
        } else {
            console.log("Nothing");
        }
    };

    // celsius and fahrenheit
    return (
        <fieldset>
            <legend>
                Egg Boil By {temper === "fahrenheit" ? "Fahrenheit" : "celsius"}{" "}
                Temperature
            </legend>
            <input
                type="text"
                name="sobita"
                value={temperature}
                onChange={(e) => setTemperature(() => ChangeHandler(e))}
            />
        </fieldset>
    );
};

export default InputData;
