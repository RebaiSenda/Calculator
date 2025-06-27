import { useState } from "react";

const useCalculator = () => {
  const [operator, setOperator] = useState("+");
  const [inputs, setInputs] = useState({
    num1: "",
    num2: ""
  });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleOperation = (op) => setOperator(op);

  const handleReset = () => {
    setInputs({
      num1: "",
      num2: ""
    });
    setOperator("+");
    setResult("");
  };

  const handleCalculate = () => {
    if (inputs.num1 === "" || inputs.num2 === "") {
      alert("Veuillez saisir les deux nombres");
      return;
    }

    const a = parseFloat(inputs.num1);
    const b = parseFloat(inputs.num2);

    if (operator === "/" && b === 0) {
      alert("Division par zéro impossible");
      return;
    }

    const currentOperation = operations.find(op => op.symbol === operator);
    const res = currentOperation ? currentOperation.calculate(a, b) : operations[0].calculate(a, b);
    
    setResult(Math.round(res * 100) / 100);
    setOperationCount(prev => prev + 1);
  };

  return {
    operator,
    inputs,
    result,
    operationCount,
    operations,
    handleInputChange,
    handleOperation,
    handleReset,
    handleCalculate
  };
};

export default useCalculator;