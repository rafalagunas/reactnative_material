import { createStore } from 'redux';


const reducer = (state, action) => {
  if (action.type == "ADD_PROFILE")
return {
  ...state,
  name: state.profile.concat(action.name),
  email: state.profile.concat(action.email)
}
}

export default createStore(reducer);
