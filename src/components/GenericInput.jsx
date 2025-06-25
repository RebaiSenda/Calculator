
export default function GenericInput({ 
  type = "text", 
  value, 
  placeholder, 
  onChange, 
  className = "", 
  ...props 
}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`generic-input ${className}`}
      {...props}
    />
  );
}