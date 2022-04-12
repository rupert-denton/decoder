import React, { useState } from "react";

import AnalysisArea from "../analysis/AnalysisArea";
import "./TextArea.css";

const TextArea = () => {
  const [textForAnalysis, setTextForAnalysis] = useState("");

  const registerKeyPresses = (e) => {
    console.log(e.target.value);
    const textForAnalysis = e.target.value;
    setTextForAnalysis(textForAnalysis);
  };

  return (
    <div>
      <form className="textinputframe">
        <div className="textinputframe">
          <textarea
            className="textinput"
            type="text"
            onKeyDown={registerKeyPresses}
          />
        </div>
      </form>
      <AnalysisArea text={textForAnalysis} />
    </div>
  );
};

export default TextArea;
