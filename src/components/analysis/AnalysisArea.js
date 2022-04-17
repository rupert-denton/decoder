import React, { useState } from 'react'

import './AnalysisArea.css'

const getClass = (character) => {
  if (['a', 'e', 'i', 'o', 'u'].includes(character)) {
    return 'vowel-class'
  } else {
    return 'consonant-class'
  }
}

const splitWord = (word) => {
  console.log(word)
  return word.split('').map((c, j) => {
    return (
      <span key={j} className={getClass(c)}>
        {c}
      </span>
    )
  })
}

const AnalysisArea = (props) => {
  const [showAnalysis, setShowAnalysis] = useState(false)
  const suffixes = [
    {
      name: 'er',
      type: 'bound',
      position: 'suffix',
      subtype: 'derivational',
      attachesTo: 'adjective',
      function: 'comparative',
    },
    {
      name: 'ed',
      type: 'bound',
      position: 'suffix',
      subtype: 'inflectional',
      attachesTo: 'verb',
      function: 'past tense',
    },
  ]

  return (
    <div className="analysisframe">
      <button onClick={() => setShowAnalysis(true)}>Analyse</button>
      <div>
        <p>
          {showAnalysis &&
            props.text.split(' ').map((word, i) => {
              //you will need to create a prefix loop and once/if a prefix is found it passes the remainder of the
              //string into the next loop for suffixes
              // let remainingString =
              // suffixSearch(remainingString) - if we find a prefix
              // if we don't find a prefix pass entire string to suffixSearch()
              // if we don't find a suffix just print entire word.

              /* for() {
                if(prefix found) {
                  suffixSearch(remainingString)
                  return(); once it finds a prefix returns out of the loop
                }
              } */
              for (let s = 0; s < suffixes.length; s++) {
                let suffix = suffixes[s].name
                if (word.endsWith(suffix)) {
                  let n = word.length
                  let tail = suffix.length
                  let root = word.substr(0, n - tail)
                  console.log(suffix)
                  return (
                    <span key={i}>
                      <span className={'root'}>{splitWord(root)}</span>
                      <span
                        className={'suffix ' + suffix}
                        onMouseOver={() => {
                          console.log('clicked')
                        }}
                      >
                        {splitWord(suffix)}
                      </span>
                      <span> </span>
                    </span>
                  )
                }
              }
              return (
                <span>
                  <span key={i} className="general">
                    {splitWord(word)}{' '}
                  </span>
                  <span> </span>
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
