//Main Reducer
export default function reducer(state, action){

  switch(action.type){
    case "toggle_log":
      if(state.login_status==="logged-out"){
        return Object.assign( state, { user: "John Doe", login_status: "logged-in" } )
      } else {
        return Object.assign( state, { user: "Guest", login_status: "logged-out" } )
      }
  }

  return state
}
