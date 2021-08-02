import React, { Component } from "react";

export default class FormHandling extends Component {
    state = {
        someText: "",
    };

    changeHandler = (event) => {
        console.log(event);
        this.setState({ someText: event.target.value });
    };
    render() {
        const { someText } = this.state;
        return (
            <div>
                <h2>Lesson 10 - Form Handling</h2>
                <form>
                    <input
                        type="text"
                        placeholder="type here"
                        value={someText}
                        onChange={this.changeHandler}
                    />
                    <p>{someText}</p>
                </form>
            </div>
        );
    }
}
