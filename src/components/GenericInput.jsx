const GenericInput = ({ 
  type = "text", 
  value, 
  placeholder, 
  onChange, 
  className = "", 
  ...props 
}) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className={`generic-input ${className}`}
    {...props}
  />
);

export default GenericInput;