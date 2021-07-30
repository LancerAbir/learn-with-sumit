import React, { Component } from "react";

export default class Button extends Component {
   // component re-render হবে কিনা বা update হবে নাকি হবে না
   shouldComponentUpdate(nextProps, nextState) {
      const {
         clickHandler: currentChange,
         chaity: currentDefault,
         abir: currentAbir,
      } = this.props;
      const {
         clickHandler: nextChange,
         chaity: nextDefault,
         abir: nextAbir,
      } = nextProps;
      if (
         currentChange === nextChange &&
         currentDefault === nextDefault &&
         currentAbir === nextAbir
      ) {
         return false;
      }
      return true;
   }

   render() {
      const { clickHandler, chaity, abir } = this.props;

      return (
         <button type="button" onClick={() => clickHandler(chaity, abir)}>
            True Love
         </button>
      );
   }
}
