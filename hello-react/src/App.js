import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json();

    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
    console.log(data.slip.advice);
  }
  return (
    <div>
      <h1>Hello React</h1>
      <h6>{advice}</h6>
      <button onClick={getAdvice}>Get Done</button>
      <Message count={count} />
    </div>
  );

  function Message(props) {
    return (
      <p>
        You have read <strong>{props.count} pieces of advices</strong>
      </p>
    );
  }
}
