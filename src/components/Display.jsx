// components/Display.jsx
import DisplayItem from './DisplayItem';

export default function Display({ operator, result, count }) {
  const displayData = [
    {
      id: "operator",
      label: "Opérateur",
      value: operator,
      className: "operator-display"
    },
    {
      id: "result",
      label: "Résultat",
      value: result || "Aucun",
      className: "result-display"
    },
    {
      id: "operation-number",
      label: null,
      value: `${count} operation${count !== 1 ? 's' : ''}`,
      className: "count-display"
    }
  ];

  return (
    <div className="display-container">
      {displayData.map((item) => (
        <DisplayItem
          key={item.id}
          id={item.id}
          label={item.label}
          value={item.value}
          className={item.className}
        />
      ))}
    </div>
  );
}