export default function Display({ operator, result, count }) {
  return (
    <div className="display-container">
      <div id="operator" className="display operator-display">
        Opérateur: <span className="value">{operator}</span>
      </div>
      <div id="result" className="display result-display">
        Résultat: <span className="value">{result || "Aucun"}</span>
      </div>
      <div id="operation-number" className="display count-display">
        {count} operation{count !== 1 ? 's' : ''}
      </div>
    </div>
  );
}