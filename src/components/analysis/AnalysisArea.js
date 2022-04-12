import React, { useState } from 'react'

import './AnalysisArea.css'

const getClass = (character) => {
  if (['a', 'e', 'i', 'o', 'u'].includes(character)) {
    return 'vowel-class'
  } else {
    return 'consonant-class'
  }
}

const AnalysisArea = (props) => {
  const [showAnalysis, setShowAnalysis] = useState(false)

  return (
    <div className="analysisframe">
      <button onClick={() => setShowAnalysis(true)}>Analyse</button>
      <div>
        <p>
          {showAnalysis &&
            props.text.split(' ').map((word, i) => {
              console.log('Word = ' + word)
              return (
                <span key={i} className={word}>
                  {word + ' '}
                </span>
              )
            })}
          {showAnalysis &&
            props.text.split('').map((character, i) => {
              return (
                <span key={i} className={getClass(character)}>
                  {character}
                </span>
              )
            })}
        </p>
      </div>
    </div>
  )
}

export default AnalysisArea

console.log('Analysis v 0.02')
