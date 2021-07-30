import React, { Component } from "react";

export default class Button extends Component {
   // component re-render হবে কিনা বা update হবে নাকি হবে না
   shouldComponentUpdate(nextProps, nextState) {
      const { clickHandler: currentChange } = this.props;
      const { clickHandler: nextChange } = nextProps;
      if (currentChange === nextChange) {
         return false;
      }
      return true;
   }

   render() {
      const { clickHandler } = this.props;
      return (
         <button type="button" onClick={clickHandler}>
            change number
         </button>
      );
   }
}
