import './App.css'
import React, { useState } from 'react'

function App() {
  const [showtext, setShowText] = useState(false)
  const [showtext2, setShowText2] = useState(false)
  const [showtext3, setShowText3] = useState(false)

  const [readMore, setReadMore] = useState(false)

  const text = [
    {
      content: 'Just troll someOne you like they will give you a death wish',
    },
  ]

  return (
    <div className="App">
      <div className="header-top-text">
        <h1>Hello We are</h1>
        <h2> CodeResolver :> </h2>
      </div>

      <button
        className="btn-for-toggle"
        onClick={() => {
          setShowText(!showtext)
        }}
      >
        {showtext === true ? 'Hide' : 'Show'}
      </button>

      <div>
        {showtext && (
          <>
            <div className="header-middle-text">
              <h2>We work to make you work</h2>
              <ul className="header-middle-sub-text">
                <li>
                  <h3>Fluent</h3>
                </li>
                <li>
                  <h3>Simple </h3>
                </li>
                <li>
                  <h3>Reliable</h3>
                </li>
                <li>
                  <h3>Unique </h3>
                </li>
              </ul>
            </div>
            <button
              className="btn-for-toggle btn-toggle-2"
              onClick={() => {
                setShowText2(!showtext2)
              }}
            >
              Show Exaplanation
            </button>
          </>
        )}
      </div>
      <div className="extra-sec">
        {showtext2 && (
          <>
            <div className="Show-more-text">
              <h2>Come on :></h2>
              <p>
                You really thougt I would say something cool Come On mannnnn{' '}
              </p>
            </div>
            <button
              className="btn-for-toggle btn-toggle-3"
              onClick={() => {
                setShowText3(!showtext3)
              }}
            >
              Okay just Click this
            </button>
            {showtext3 && (
              <div className="really-div">
                <div className="really-text">
                  <h2>Sheeeesshhhhh boi</h2>

                  {text.map(({ content }) => {
                    return (
                      <p>
                        {readMore ? content : `${content.substring(0, 15)}....`}
                        <button
                          className="btn-for-toggle inactive btn-toggle-4 active"
                          onClick={() => {
                            setReadMore(!readMore)
                          }}
                        >
                          {readMore ? 'show Less' : `Read More`}
                        </button>
                      </p>
                    )
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App
