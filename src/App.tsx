import "./styles.css";
import { Modal } from "./components/Modal/index";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="App">
      <button className="cta" onClick={() => setShowModal(true)}>
        Open modal
      </button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}
