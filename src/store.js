import { createStore } from "redux";
let reducer = (state, action) => {
  if (action.type === "signup") {
    return { ...state, login: action.login, user: action.username };
  }
  if (action.type === "login") {
    return { ...state, login: action.login, user: action.username };
  }
  if (action.type === "logout") {
    return { ...state, login: action.login };
  }
  if (action.type === "addToCart") {
    return { ...state, cart: state.cart.concat(action.addToCart) };
  }
  // if (action.type === "user") {
  //   return { ...state, user: action.username };
  // }
  //   if (action.type === "set-messages") {
  //     const chatRoomsCopy = { ...state.chatRooms };
  //     chatRoomsCopy[action.roomName] = {
  //       ...chatRoomsCopy[action.roomName],
  //       messages: action.messages
  //     };
  //     return {
  //       ...state,
  //       chatRooms: chatRoomsCopy,
  //       directMessages: action.directMessages
  //     };
  //   }
  //   if (action.type === "create-room") {
  //     const chatRoomsCopy = { ...state.chatRooms };
  //     chatRoomsCopy[action.chatRoom.name] = action.chatRoom;
  //     return {
  //       ...state,
  //       chatRooms: chatRoomsCopy
  //     };
  //   }
  //   if (action.type === "join-room") {
  //     return {
  //       ...state,
  //       currentRoom: action.roomName
  //     };
  //   }
  //   if (action.type === "set-chat-rooms") {
  //     return {
  //       ...state,
  //       chatRooms: action.chatRooms
  //     };
  // }
  return state;
};
const store = createStore(
  reducer,
  {
    cart: [],
    user: "",
    login: false
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
