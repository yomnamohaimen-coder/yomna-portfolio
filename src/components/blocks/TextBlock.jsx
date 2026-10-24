export default function TextBlock({ heading, paragraphs = [] }) {
  return (
    <section className="block-text">
      {heading ? <h2>{heading}</h2> : null}
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  )
}
