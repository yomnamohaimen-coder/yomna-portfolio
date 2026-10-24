export default function QuoteBlock({ text, source }) {
  return (
    <figure className="block-quote">
      <blockquote>
        <p>{text}</p>
      </blockquote>
      {source ? <figcaption>{source}</figcaption> : null}
    </figure>
  )
}
