import { useState } from 'react'
import Clock from './components/Clock'
import './App.css'

function App() {
  const [is24Hour, setIs24Hour] = useState(false)
  const [fontSize, setFontSize] = useState('normal')

  const fontSizes = [
    { id: 'small', label: 'Small' },
    { id: 'normal', label: 'Normal' },
    { id: 'large', label: 'Large' },
    { id: 'xl', label: 'XL' },
  ]

  return (
    <div className="app-container">
      <Clock is24Hour={is24Hour} fontSize={fontSize} />

      <div className="controls">
        <button
          className="toggle-btn"
          onClick={() => setIs24Hour(!is24Hour)}
        >
          Switch to {is24Hour ? '12h' : '24h'} Format
        </button>

        <div className="size-controls">
          {fontSizes.map((size) => (
            <button
              key={size.id}
              className={`size-btn ${fontSize === size.id ? 'active' : ''}`}
              onClick={() => setFontSize(size.id)}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
