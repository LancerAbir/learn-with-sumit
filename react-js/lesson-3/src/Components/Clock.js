import React, { Component } from "react";

export default class Clock extends Component {
   state = {
      data: new Date(),
      classComponent: "Lesson 7",
      count: 1,
      plus: 5,
      minus: 2,
      random: 0,
      local: "bn-BD",
      localEnglish: "en-US",
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

   // clickHandler = (e) => {
   //    e.preventDefault();
   //    this.setState({
   //       local: "en-US",
   //    });
   // };

   clickHandler = (local) => {
      this.setState({
         local
      });
   };


   render() {
      const { classComponent, data, count, random, local, localEnglish } =
         this.state;
      const options = {
         weekday: "long",
         year: "numeric",
         month: "long",
         day: "numeric",
      };
      return (
         <div>
            <h2>{classComponent}</h2>
            <ul>
               <li>Class Components</li>
               <li>state management</li>
               <li>componentDidMount</li>
               <li>componentWillUnmount </li>
            </ul>
            <h3>{data.toLocaleString(local)}</h3>
            <h4>Your Roll is {count}</h4>
            <h4>Your Random Sit Number is {random}</h4>
            
            <button type="button" onClick={() => this.clickHandler()}>
               toggle button
            </button>
         </div>
      );
   }
}
