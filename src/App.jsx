// App.jsx
import { useState } from "react";
import GenericInput from "./components/GenericInput";
import GenericButton from "./components/GenericButton";
import Display from "./components/Display";
import "./App.css";

export default function App() {
  const [operator, setOperator] = useState("+");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operationCount, setOperationCount] = useState(0);

  const operations = [
    { 
      symbol: "+", 
      label: "Addition",
      calculate: (a, b) => a + b
    },
    { 
      symbol: "-", 
      label: "Soustraction",
      calculate: (a, b) => a - b
    },
    { 
      symbol: "*", 
      label: "Multiplication",
      calculate: (a, b) => a * b
    },
    { 
      symbol: "/", 
      label: "Division",
      calculate: (a, b) => a / b
    }
  ];

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

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (operator === "/" && b === 0) {
      alert("Division par zéro impossible");
      return;
    }

    // Trouve l'opération dans le tableau
    const currentOperation = operations.find(op => op.symbol === operator);
    const res = currentOperation ? currentOperation.calculate(a, b) : operations[0].calculate(a, b);
    
    setResult(Math.round(res * 100) / 100);
    setOperationCount(prev => prev + 1);
  };

  return (
    <div className="calculator">
      <h1>Calculatrice</h1>
      
      <div className="input-section">
        <GenericInput
          type="number"
          value={num1}
          placeholder="Premier nombre"
          onChange={(e) => setNum1(e.target.value)}
          className="number-input"
        />
        <GenericInput
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
          {operations.map(({ symbol, label }) => (
            <GenericButton 
              key={symbol}
              variant="operation"
              onClick={() => handleOperation(symbol)}
              isActive={operator === symbol}
              title={label}
            >
              {symbol}
            </GenericButton>
          ))}
        </div>
      </div>

      <div className="action-buttons">
        <GenericButton 
          variant="result"
          onClick={handleCalculate}
        >
          =
        </GenericButton>
        <GenericButton 
          variant="reset"
          onClick={handleReset}
        >
          Reset
        </GenericButton>
      </div>

      <Display operator={operator} result={result} count={operationCount} />
    </div>
  );
}