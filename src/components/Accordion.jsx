import { useState } from "react";

function Accordion({ title, children, open = false }) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className="accordion">
      <button className="accordion-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="title">{title}</span>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={`transition-all ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen p-4" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
