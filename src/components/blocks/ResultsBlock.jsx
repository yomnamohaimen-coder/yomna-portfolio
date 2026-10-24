export default function ResultsBlock({ items = [] }) {
  return (
    <dl className="block-results">
      {items.slice(0, 4).map((item, index) => (
        <div key={index}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
