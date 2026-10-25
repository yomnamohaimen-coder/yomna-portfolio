// A paragraph is a string, or { lead, text } for a short bold lead-in.
export default function TextBlock({ heading, paragraphs = [] }) {
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
    </section>
  )
}
