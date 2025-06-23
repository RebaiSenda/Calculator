import { useState } from "react";
import OperationButton from "./components/OperationButton";
import ResetButton from "./components/ResetButton";
import ResultButton from "./components/ResultButton";
import Display from "./components/Display";
import "./App.css";

export default function App() {
  const [operator, setOperator] = useState("+");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operationCount, setOperationCount] = useState(0);

  const handleOperation = (op) => setOperator(op);

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setOperator("+");
    setResult("");
  };

  const handleCalculate = () => {
    if (num1 === "" || num2 === "") {
      alert("Veuillez saisir les deux nombres");
      return;
    }

    let res = 0;
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (operator === "/" && b === 0) {
      alert("Division par zéro impossible");
      return;
    }

    switch (operator) {
      case "+": res = a + b; break;
      case "-": res = a - b; break;
      case "*": res = a * b; break;
      case "/": res = a / b; break;
      default: res = a + b;
    }
    
    setResult(Math.round(res * 100) / 100); // Arrondi à 2 décimales
    setOperationCount((c) => c + 1);
  };

  return (
    <div className="calculator">
      <h1>Calculatrice</h1>
      
      <div className="input-section">
        <input
          type="number"
          value={num1}
          placeholder="Premier nombre"
          onChange={(e) => setNum1(e.target.value)}
          className="number-input"
        />
        <input
          type="number"
          value={num2}
          placeholder="Deuxième nombre"
          onChange={(e) => setNum2(e.target.value)}
          className="number-input"
        />
      </div>

      <div className="operation-section">
        <h3>Choisir l'opération:</h3>
        <div className="operation-buttons">
          {["+", "-", "*", "/"].map((op) => (
            <OperationButton 
              key={op} 
              symbol={op} 
              onClick={handleOperation}
              isActive={operator === op}
            />
          ))}
        </div>
      </div>

      <div className="action-buttons">
        <ResultButton onClick={handleCalculate} />
        <ResetButton onClick={handleReset} />
      </div>

      <Display operator={operator} result={result} count={operationCount} />
    </div>
  );
}