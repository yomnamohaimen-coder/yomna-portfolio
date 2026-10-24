import CaseImage from './CaseImage'

export default function TwoImagesBlock({ images = [] }) {
  return (
    <div className="block-two-images">
      {images.slice(0, 2).map((image, index) => (
        <CaseImage key={index} image={image} shape="landscape" />
      ))}
    </div>
  )
}
