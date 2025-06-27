const DisplayItem = ({ label, value, className = "", id }) => (
  <div id={id} className={`display-item ${className}`}>
    {label && <span className="display-label">{label}: </span>}
    <span className="display-value">{value}</span>
  </div>
);

export default DisplayItem;