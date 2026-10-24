// One image with an optional caption. With no src, it shows a box in the
// project's tint so the layout can be reviewed before real images exist.
export default function CaseImage({ image, shape = 'wide' }) {
  const { src, alt = '', caption } = image ?? {}

  return (
    <figure className={`case-image case-image--${shape}`}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="case-image-placeholder" role="img" aria-label={alt || 'Image placeholder'}>
          Image placeholder
        </div>
      )}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
