import React, { useState } from 'react'

import './TextAreaFrame.css'
import AnalysisArea from '../analysis/AnalysisArea'

const TextAreaFrame = () => {
  const [textForAnalysis, setTextForAnalysis] = useState('')

  const registerKeyPresses = (e) => {
    console.log(e.target)
    const textForAnalysis = e.target.value
    console.log(textForAnalysis)
    setTextForAnalysis(textForAnalysis)
  }

  return (
    <div className="sheetframe">
      <div className="textareaframe">
        <form className="textinputframe">
          <div>
            <textarea
              className="textinput"
              type="text"
              placeholder="Type a word"
              onKeyDown={registerKeyPresses}
            />
          </div>
        </form>
      </div>
      <AnalysisArea text={textForAnalysis} />
    </div>
  )
}

export default TextAreaFrame
