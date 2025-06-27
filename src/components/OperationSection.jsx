const OperationSection = ({ children, title, className = "" }) => (
  <div className={`operation-section ${className}`}>
    {title && <h3>{title}</h3>}
    <div className="operation-buttons">
      {children}
    </div>
  </div>
);

export default OperationSection;