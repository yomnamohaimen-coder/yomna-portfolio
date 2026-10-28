export default function ResultsBlock({ items = [], caption }) {
  return (
    <figure className="block-results-wrap">
      <dl className="block-results">
        {items.slice(0, 4).map((item, index) => (
          <div key={index}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
