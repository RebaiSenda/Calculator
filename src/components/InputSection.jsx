const Section = ({ title, className = "", children }) => (
  <div className={className}>
    {title && <h3>{title}</h3>}
    {children}
  </div>
);

export default Section;