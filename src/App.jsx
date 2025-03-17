import { useState } from "react"
import "./App.css"

function App() {

  const [inputText, setInputText] = useState("")
  const [result, setResult] = useState(null)

  const checkPalindrome = () => {

    // Requerimiento 4: Mostrar alerta si no hay valor ingresado
    if (!inputText.trim()) {
      alert("Please input a value")
      return
    }

    // Eliminar caracteres no alfanuméricos y convertir a minúsculas
    const cleanText = inputText.toLowerCase().replace(/[\W_]/g, "")

    // Verificar si es un palíndromo
    const reversed = cleanText.split("").reverse().join("")
    const isPalindrome = cleanText === reversed

    // Mostrar resultado con formato específico requerido
    setResult(`${inputText} is ${isPalindrome ? "a" : "not a"} palindrome`)
  }

  return (
    <div className="container">
      <header>
        <h1 className="logo">freeCodeCamp 🔥</h1>
        <h2 className="title">Is it a Palindrome?</h2>
      </header>

      <div className="card">
        <p className="card-text">Enter in text to check for a palindrome:</p>
        <div className="input-group">
          <input 
            type="text" 
            id="text-input" 
            value={inputText} 
            onChange={(e) => setInputText(e.target.value)} 
            className="text-input" 
          />
          <button 
            id="check-btn" 
            onClick={checkPalindrome} 
            className="check-button"
          >
            Check
          </button>
        </div>
        {result && <div id="result" className="result">{result}</div>}
      </div>

      <div className="info-box">
        <div className="info-content">
          <span className="lightbulb-icon">💡</span>
          <p>
            A <em>palindrome</em> is a word or sentence that's spelled the same way both forward and backward, ignoring
            punctuation, case, and spacing.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App