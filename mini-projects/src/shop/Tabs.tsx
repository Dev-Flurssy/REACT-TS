import React, { useState } from "react";

interface IProps {
  headings: string[];
}

const Tabs: React.FC<IProps> = ({ headings }) => {
  const [activeHeading, setActiveHeading] = useState(
    headings.length > 0 ? headings[0] : "",
  );

  return (
    <ul className="tabs">
      {headings.map((heading) => (
        <li
          key={heading}
          className={heading === activeHeading ? "active" : ""}
          onClick={() => setActiveHeading(heading)} // allow clicking to change active tab
        >
          {heading}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
