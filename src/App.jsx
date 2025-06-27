import GenericInput from "./components/GenericInput";
import GenericButton from "./components/GenericButton";
import Display from "./components/Display";
import InputSection from "./components/InputSection";
import OperationSection from "./components/OperationSection";
import ActionSection from "./components/ActionSection";
import useCalculator from "./hooks/useCalculator";
import "./App.css";

const App = () => {
  const {
    operator,
    inputs,
    result,
    operationCount,
    operations,
    handleInputChange,
    handleOperation,
    handleReset,
    handleCalculate
  } = useCalculator();

  return (
    <div className="calculator">
      <h1>Calculatrice</h1>
      
      <InputSection>
        <GenericInput
          type="number"
          name="num1"
          value={inputs.num1}
          placeholder="Premier nombre"
          onChange={handleInputChange}
          className="number-input"
        />
        <GenericInput
          type="number"
          name="num2"
          value={inputs.num2}
          placeholder="Deuxième nombre"
          onChange={handleInputChange}
          className="number-input"
        />
      </InputSection>

      <OperationSection title="Choisir l'opération:">
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
      </OperationSection>

      <ActionSection>
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
      </ActionSection>

      <Display operator={operator} result={result} count={operationCount} />
    </div>
  );
};

export default App;