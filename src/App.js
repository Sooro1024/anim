import { useState, memo, useRef } from "react";
import "./App.scss";

export const App2 = memo(() => {
  console.log("object");
  return <div>sami</div>;
});
let ankap;
function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  return (
    <div className="App">
      <div className="rect">
        <div ref={ref} className="circle a0">
          <App2 />
        </div>
      </div>
      <button
        onClick={() => {
          setCount((prev) => {
            return ++prev;
          });
          document.documentElement.style.setProperty(
            "--initial1",
            `rotate(${count * 90}deg)`
          );
          document.documentElement.style.setProperty(
            "--initial2",
            `rotate(${count * 90 + 1170}deg)`
          );
          ref.current.classList.remove("a0");
          ankap = ref.current.offsetWidth; // trigger a DOM reflow
          ref.current.classList.add("a0");
        }}
      >
        set counte2 {count}
      </button>
    </div>
  );
}

export default App;
