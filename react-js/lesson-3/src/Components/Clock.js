// import React from "react";

// const Clock = ({ local }) => {
//    return (
//       <div>
//          <h2>
//             Clock Array Functional Components {new Date().toLocaleString(local)}{" "}
//          </h2>
//       </div>
//    );
// };

// export default Clock;

import React, { Component } from "react";
import EventsHandling from "./EventsHandling";

export default class Clock extends Component {
   state = {
      data: new Date(),
      classComponent:
         "Class Components, state management, componentDidMount & componentWillUnmount ",
      count: 1,
      plus: 5,
      minus: 2,
      random: 0,
      local: "bn-BD",
   };

   componentDidMount() {
      setInterval(() => this.currentDate(), 1000);
      this.setState((state, props) => ({
         count: state.plus * props.number,
      }));
      setInterval(() => {
         this.setState({
            random: Math.random(),
         });
      }, 1000);
   }

   componentWillUnmount() {
      clearInterval(() => this.currentDate(), 1000);
   }

   currentDate() {
      this.setState({
         data: new Date(),
      });
   }

   clickHandler = (e) => {
      e.preventDefault();
      this.setState({
         local: "en-US",
      });
   };

   render() {
      const { classComponent, data, count, random, local } = this.state;
      const options = {
         weekday: "long",
         year: "numeric",
         month: "long",
         day: "numeric",
      };
      return (
         <div>
            <h2>{classComponent}</h2>
            <h3>{data.toLocaleString(local)}</h3>
            <h4>Your Roll is {count}</h4>
            <h4>Your Random Sit Number is {random}</h4>
            <button type="button" onClick={this.clickHandler}>
               button
            </button>

            <EventsHandling />
         </div>
      );
   }
}
