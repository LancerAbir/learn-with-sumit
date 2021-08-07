import React from "react";
import EggBoil from "./EggBoil";

const LiftingStateUp = ({ temperature }) => {
    return (
        <div>
            <EggBoil temperature={parseFloat(temperature)} />
        </div>
    );
};

export default LiftingStateUp;
