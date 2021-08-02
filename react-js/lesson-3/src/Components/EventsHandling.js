import React, { Component } from "react";
import Button from "./Button";

export default class EventsHandling extends Component {
    state = {
        abir: "Abir",
        newNumber: 50,
        chaity: "Chaity",
    };

    // clickHandler = (e) => {
    //    e.preventDefault();
    //    this.setState((state) => ({
    //       abir: state.abir + state.newNumber,
    //    }));
    // };

    clickHandler = (abir, chaity) => {
        this.setState({
            abir,
            chaity,
        });
    };

    // component re-render হবে কিনা  বা update হবে নাকি হবে না
    shouldComponentUpdate(nextProps, nextState) {
        const { abir: currentChange, chaity: currentChaity } = this.state;
        const { abir: nextChange, chaity: nextChaity } = nextState;
        if (currentChange === nextChange && currentChaity === nextChaity) {
            return false;
        }
        return true;
    }

    render() {
        const { abir, chaity } = this.state;

        let toggle;

        if (abir === "Abir") {
            toggle = (
                <Button
                    clickHandler={this.clickHandler}
                    chaity="Chaity"
                    abir="Abir"
                />
            );
        } else {
            toggle = (
                <Button
                    clickHandler={this.clickHandler}
                    chaity="Abir"
                    abir="Chaity"
                />
            );
        }

        return (
            <div>
                <h2>Lesson 8 - Events Handling </h2>
                <ul>
                    <li>
                        component re-render হবে কিনা --> shouldComponentUpdate()
                    </li>
                    <li>this keyword এর ব্যাবহার</li>
                </ul>
                <p>
                    {abir} fall in love {chaity}
                </p>

                {/** 1st way toggle */}
                {toggle}

                {/** 2nd way toggle */}
                {abir === "Abir" ? (
                    <Button
                        clickHandler={this.clickHandler}
                        chaity="Chaity"
                        abir="Abir"
                    />
                ) : (
                    <Button
                        clickHandler={this.clickHandler}
                        chaity="Abir"
                        abir="Chaity"
                    />
                )}
            </div>
        );
    }
}
