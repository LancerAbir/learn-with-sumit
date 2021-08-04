import React, { Component } from "react";

class EggBoil extends Component {
    render() {
        const { temperature = 100 } = this.props;

        let result = "";
        if (temperature >= 100) {
            result = <p> Dim siddo hoise</p>;
        } else {
            <p> Dim siddo hoy nai</p>;
        }

        return (
            <div>
                {temperature >= 100 ? (
                    <p>Egg has been successfully Boil </p>
                ) : (
                    <p>Sorry! Egg is not Boil </p>
                )}
                {result}
            </div>
        );
    }
}

export default EggBoil;
