
export default function GenericButton({ 
  children, 
  onClick, 
  className = "", 
  variant = "default",
  isActive = false,
  ...props 
}) {
  const baseClass = "generic-button";
  const variantClass = `${baseClass}--${variant}`;
  const activeClass = isActive ? `${baseClass}--active` : "";
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${activeClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}