import React, { Component } from "react";
import { toggle } from '../actions/action';

const Butt = (props) => (
  <button
    onClick={ ()=>{
      console.log("Poke!")
      props.store.dispatch({type: "toggle_log"})
    } }>
    Log
  </button>
)

export default Butt
