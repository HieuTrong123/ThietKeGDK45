import { createContext, useReducer } from "react";
import { actionsCart, IS_LOGIN, IS_LOGOUT } from './Action';
import { Users } from "../store/user";
const UserContext = createContext()

const initState = {
  listNotify: [],
  listCart: [],
  stateLogIn: false,
}
function Reducer(state, actions) {
  let newState
  switch (actions.type) {
    case actionsCart.ADD_CART_ITEM:
      newState = {
        ...state,
        listCart: [...state.listCart, actions.payload]
      }
      if (state.user) {
        const editedItemIndex = Users.findIndex(item => item.email === state.user.email);
        Users[editedItemIndex].cart = newState.listCart;
      }
      break;
    case actionsCart.REMOVE_CART_ITEM:
      newState = {
        ...state,
        listCart: state.listCart.filter((e) => e.id !== actions.payload)
      }
      if (state.user) {
        const editedItemIndex = Users.findIndex(item => item.email === state.user.email);
        Users[editedItemIndex].cart = newState.listCart;
      }
      break;
    case IS_LOGIN:
      newState = {
        ...state,
        stateLogIn: true,
        user: actions.payload,
        listCart: actions.payload.cart,
        listNotify: actions.payload.notify
      }
      break;
    case IS_LOGOUT:
      newState = {
        ...state,
        stateLogIn: false,
        user: null,
        listCart: [],
        listNotify: []
      }
      break;
    default:
  }
  return newState;
}
function Provider(props) {
  const [state, dispatch] = useReducer(Reducer, initState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
}
export { UserContext };
export default Provider;