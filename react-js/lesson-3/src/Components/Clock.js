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

export default class Clock extends Component {
   state = {
      data: new Date(),
      classComponent: "Clock Class Components",
      count: 1,
      plus: 5,
      minus: 2,
      random: 0,
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

   render() {
      const options = {
         weekday: "long",
         year: "numeric",
         month: "long",
         day: "numeric",
      };
      return (
         <div>
            <h2>
               {this.state.classComponent}
               {this.state.data.toLocaleString(this.props.local)}
            </h2>
            <h3>Your Roll is {this.state.count}</h3>
            <h3>Your Random Sit Number is {this.state.random}</h3>
         </div>
      );
   }
}
