import React, { Component } from "react";

export default class ConditionalRendering extends Component {
    state = {
        abir: "for chaity",
        chaity: "for abir",
    };

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            abir: "for chaity",
            chaity: "for abir",
        });
    };
    render() {
        const { abir, chaity } = this.state;

        return (
            <div>
                <h2>Lesson 9 - Conditional Rendering</h2>
                <ul>
                    <li> if else (return এর বাইরে ব্যাবহার করতে হয়) </li>
                    <li>
                        {" "}
                        ternary Operator (return এর ভিতরে ব্যাবহার করতে হয়){" "}
                    </li>
                </ul>
            </div>
        );
    }
}
