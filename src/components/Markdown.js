import React, { useState, useEffect } from "react";
import markdownIt from "markdown-it";
// import parse from "../parser";
const Markdown = () => {
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");
  useEffect(() => {
    let md = new markdownIt();

    let renderdHTML = md.render(input);
    setAns(renderdHTML);
  }, [input]);

  return (
    <div className="Markdown">
      <div className="preview">
        <div
          dangerouslySetInnerHTML={{ __html: ans }}
          className="loading"
        ></div>
      </div>
      <div className="text-area">
        <textarea
          onInput={(e) => setInput(e.target.value)}
          className="textarea"
          rows={30}
          cols={60}
        ></textarea>
      </div>
    </div>
  );
};

export default Markdown;
