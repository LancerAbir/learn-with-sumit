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
         </div>
      );
   }
}
