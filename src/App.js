import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="rect">
        <div key={Date.now()} className="circle a0" />
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
        }}
      >
        set counte2 {count}
      </button>
    </div>
  );
}

export default App;
