export default function OperationButton({ symbol, onClick, isActive }) {
  return (
    <button 
      className={`operation-btn ${isActive ? 'active' : ''}`}
      onClick={() => onClick(symbol)}
    >
      {symbol}
    </button>
  );
}