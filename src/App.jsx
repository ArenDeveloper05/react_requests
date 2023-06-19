import { useState } from "react";
import "./App.scss";
import Modal from "./components/modal/Modal";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        Show
      </button>
      {show && <Modal />}
    </div>
  );
}

export default App;
