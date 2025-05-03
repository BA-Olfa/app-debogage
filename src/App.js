import React, { useState } from "react";
import Header from "./component/Header";
import Counter from "./component/Counter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header title="Mon App React" />
      <Counter count={count} increment={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
