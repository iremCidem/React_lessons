import "./App.css";
import { useReducer } from "react";
const initialState = {
  sayi: 0,
};
const stateFn = (state, action) => {
  switch (action.type) {
    case "arttir":
      return { sayi: state.sayi + action.payload };
    case "azalt":
      return { sayi: state.sayi - 1 };
    default:
      return { sayi: state.sayi };
  }
};

function App() {
  const [state, dispatch] = useReducer(stateFn, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "arttir", payload: 4 })}>
        arttır
      </button>

      <p>{state.sayi}</p>
      <button onClick={() => dispatch({ type: "azalt" })}>azalt</button>
    </div>
  );
}

export default App;
/*useReducer hook karmaşık stateler için usestate yerine, statein bir önceki ve bir sonraki değeri önemli olduğunda kullanılır,
const [state,dispatch] = useReducer(reducerFn,initialState)
redux kullanımı için önemli.*/
