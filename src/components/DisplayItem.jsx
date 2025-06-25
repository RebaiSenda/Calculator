
export default function DisplayItem({ label, value, className = "", id }) {
  return (
    <div id={id} className={`display-item ${className}`}>
      {label && <span className="display-label">{label}: </span>}
      <span className="display-value">{value}</span>
    </div>
  );
}