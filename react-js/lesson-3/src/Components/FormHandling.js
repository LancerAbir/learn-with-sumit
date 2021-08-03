import React, { Component } from "react";

export default class FormHandling extends Component {
    state = {
        someText: "",
        text: "",
        library: "",
        isCheckbox: true,
    };

    changeHandler = (event) => {
        if (event.target.type === "text") {
            this.setState({ someText: event.target.value });
        } else if (event.target.type === "textarea") {
            this.setState({ text: event.target.value });
        } else if (event.target.type === "select-one") {
            this.setState({ library: event.target.value });
        } else if (event.target.type === "checkbox") {
            this.setState({ isCheckbox: event.target.checked });
        } else {
            console.log("Nothing");
        }
    };

    submitHandler = (event) => {
        const { someText, text, library, isCheckbox } = this.state;
        event.preventDefault();
        console.log(someText, text, library, isCheckbox);
    };
    render() {
        const { someText, text, library, isCheckbox } = this.state;
        return (
            <div onSubmit={this.submitHandler}>
                <h2>Lesson 10 - Form Handling</h2>
                <form>
                    <input
                        type="text"
                        placeholder="type here"
                        value={someText}
                        onChange={this.changeHandler}
                    />
                    <p>{someText}</p>
                    <br />
                    <br />
                    <textarea
                        name=""
                        value={text}
                        onChange={this.changeHandler}
                    ></textarea>
                    <p>{text}</p>
                    <br />
                    <br />
                    <select value={library} onChange={this.changeHandler}>
                        <option value="React"> React</option>
                        <option value="Angular"> Angular</option>
                    </select>
                    <br />
                    <br />
                    <input
                        type="checkbox"
                        value={isCheckbox}
                        onChange={this.changeHandler}
                    />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
