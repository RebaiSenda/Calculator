const ActionSection = ({ children, className = "" }) => (
  <div className={`action-buttons ${className}`}>
    {children}
  </div>
);

export default ActionSection;