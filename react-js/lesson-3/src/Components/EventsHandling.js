import React, { Component } from "react";
import Button from "./Button";

export default class EventsHandling extends Component {
   state = {
      changeStateNumber: 3,
      newNumber: 50,
   };

   clickHandler = (e) => {
      e.preventDefault();
      this.setState((state) => ({
         changeStateNumber: state.changeStateNumber + state.newNumber,
      }));
   };

   // component re-render হবে কিনা  বা update হবে নাকি হবে না
   shouldComponentUpdate(nextProps, nextState) {
      const { changeStateNumber: currentChange } = this.state;
      const { changeStateNumber: nextChange } = nextState;
      if (currentChange === nextChange) {
         return false;
      }
      return true;
   }

   render() {
      const { changeStateNumber } = this.state;
      return (
         <div>
            <h2>Lesson 8 - Events Handling </h2>
            <ul>
               <li>component re-render হবে কিনা --> shouldComponentUpdate()</li>
               <li>this keyword এর ব্যাবহার</li>
            </ul>

            <p>current number {changeStateNumber}</p>
            <Button clickHandler={this.clickHandler} />
         </div>
      );
   }
}