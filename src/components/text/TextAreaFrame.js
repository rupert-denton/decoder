import React, { useState } from "react";

import "./TextAreaFrame.css";
import AnalysisArea from "../analysis/AnalysisArea";

const TextAreaFrame = () => {
  const [textForAnalysis, setTextForAnalysis] = useState("");

  const registerKeyPresses = (e) => {
    const textForAnalysis = e.target.value;
    setTextForAnalysis(textForAnalysis);
  };

  return (
    <div className="sheetframe">
      <div className="textareaframe">
          <form className="textinputframe">
            <div className="textinputframe">
              <textarea
                className="textinput"
                type="text"
                onKeyDown={registerKeyPresses}
              />
            </div>
          </form>
      </div>
      <AnalysisArea text={textForAnalysis} />
    </div>
  );
};

export default TextAreaFrame;
