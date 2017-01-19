import React, { Component } from "react";

const UserOnline = (props) => {
  return(
    // <h5>Guest</h5>
    <h5>{ props.store.getState().user }</h5>
  )
}

export default UserOnline
