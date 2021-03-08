import { useState, memo, useRef } from "react";
import "./App.scss";

export const App2 = memo(() => {
  console.log("object");
  return <div>sami</div>;
});
let ankap;
function App() {
  const [count, setCount] = useState(1);
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
          document.documentElement.style.setProperty("--initial1", `${count}`);
          document.documentElement.style.setProperty(
            "--initial2",
            `${count + 1}`
          );
          ref.current.classList.remove("a0");
          ankap = ref.current.offsetWidth;
          ref.current.classList.add("a0");
        }}
      >
        set counte2 {count}
      </button>
    </div>
  );
}

export default App;
