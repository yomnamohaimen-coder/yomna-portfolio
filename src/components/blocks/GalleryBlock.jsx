import CaseImage from './CaseImage'

// shape: "landscape" for 4:3 screens, "phone" for tall phone screens.
export default function GalleryBlock({ images = [], shape = 'landscape' }) {
  return (
    <div className="block-gallery">
      {images.map((image, index) => (
        <CaseImage key={index} image={image} shape={shape} />
      ))}
    </div>
  )
}
