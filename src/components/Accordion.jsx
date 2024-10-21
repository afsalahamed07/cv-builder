import { useState } from "react";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button onClick={() => setIsOpen(!isOpen)}>
        <span className="title">{title}</span>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={`transition-all duration-200 ease-in overflow-hidden ${
          isOpen ? "max-h-screen p-4" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
