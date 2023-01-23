import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
function App() {
  const count = useSelector((state) => state.Counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        UP
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        DOWN
      </button>
    </div>
  );
}

export default App;
//useselector hooku store içindeki statei kullanmamızı sağlar.içideki fonksiyonun amacı
// global olarak yarattığımız statein içinden hangi statei almak istediğimizi belirtmek.buradaki statein ismi counter.
//usedispatch hooku ile dispatch fonksiyonunu çağırıyoruz bu fonksiyon actionları parametre olarak alır.
