// A paragraph is a string, or { lead, text } for a short bold lead-in.
// items: an optional bullet list shown after the paragraphs.
export default function TextBlock({ heading, paragraphs = [], items = [] }) {
  return (
    <section className="block-text">
      {heading ? <h2>{heading}</h2> : null}
      {paragraphs.map((paragraph, index) =>
        typeof paragraph === 'string' ? (
          <p key={index}>{paragraph}</p>
        ) : (
          <p key={index}>
            <strong>{paragraph.lead}</strong> {paragraph.text}
          </p>
        ),
      )}
      {items.length ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
