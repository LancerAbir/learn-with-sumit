import React from "react";

const InputData = ({ temper, ChangeHandler, temperature, DefaultValue }) => {
    // celsius and fahrenheit
    const celsiusValue = (inputValue) => {
        let results;
        results = ((inputValue - 32) * 5) / 9;
        return results;
    };

    const fahrenheitValue = (inputValue) => {
        let results;
        results = (inputValue * 9) / 5 + 32;
        return results;
    };

    const toggleValue = () => {
        if (temper === "celsius") {
            celsiusValue(temperature);
        } else if (temper === "fahrenheit") {
            fahrenheitValue(temperature);
        } else {
            console.log("Nothing toggled");
        }
    };

    return (
        <fieldset>
            <legend>
                Egg Boil By {temper === "fahrenheit" ? "Fahrenheit" : "celsius"}{" "}
                Temperature
            </legend>

            <input
                type="text"
                name="sobita"
                value={
                    temper === "celsius"
                        ? celsiusValue(temperature)
                        : temperature
                }
                onChange={(e) => ChangeHandler(e)}
            />
        </fieldset>
    );
};

export default InputData;
