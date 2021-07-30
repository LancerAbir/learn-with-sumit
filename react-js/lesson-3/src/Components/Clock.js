import React from "react";

const Clock = ({ local }) => {
    return (
        <div>
            <h2>
                Clock Array Functional Components{" "}
                {new Date().toLocaleString(local)}{" "}
            </h2>
        </div>
    );
};

export default Clock;
