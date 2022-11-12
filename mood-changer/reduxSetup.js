const INITIAL_STATE = { mood: '∵ゞ(＞д＜)', creator: 'Jonthan Dawson'};
const moodChanger = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DRUNK":
      return { ...state, mood: '∵ゞ(＞д＜)' };
    case "CUTE":
      return { ...state, mood: 'ʕ￫ᴥ￩ʔ' };
    case 'KISSING':
      return {...state, mood: '(＿ε＿)'};
    case 'COUGHING':
      return {...state, mood: 'ʕ✖﹏✖ʔ'};
      default:
        return state
  }

  return state;
};

const store = Redux.createStore(moodChanger);

// const INITIAL_STATE = { count: 0, price: 40.99 };
// const countReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     case 'MULTIPLY':
//       return {...state, count: state.count * action.payload}
//     case 'RESET':
//       return {...state, count: 0}
//       default:
//         return state
//   }

//   return state;
// };

// const store = Redux.createStore(countReducer);
