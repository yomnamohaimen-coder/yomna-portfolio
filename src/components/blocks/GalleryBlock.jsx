import CaseImage from './CaseImage'

// shape: "landscape" for 4:3 screens, "phone" for tall phone screens,
// "wide" for desktop screenshots shown at their own shape, two per row.
export default function GalleryBlock({ images = [], shape = 'landscape' }) {
  return (
    <div className={shape === 'wide' ? 'block-gallery block-gallery--wide' : 'block-gallery'}>
      {images.map((image, index) => (
        <CaseImage key={index} image={image} shape={shape} />
      ))}
    </div>
  )
}
