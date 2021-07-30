import React, { Component } from "react";

export default class ConditionalRendering extends Component {
   state = {
      abir: "",
      chaity: "",
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

      let toggle;
      if (abir === "for chaity") {
         toggle = (
            <button type="button" onClick={this.changeHandler}>
               True Love
            </button>
         );
      } else {
         toggle = (
            <button type="button" onClick={this.changeHandler}>
               True Love
            </button>
         );
      }
      return (
         <div>
            <h2>Lesson 9 - Conditional Rendering</h2>

            <p>Abir True Love {abir}</p>
            <p>Chaity True Love {chaity}</p>

            {toggle}
         </div>
      );
   }
}
