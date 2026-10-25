import CaseImage from './CaseImage'

// shape: leave out for a wide image, or "phone" for a single phone screen.
export default function ImageBlock({ src, alt, caption, shape }) {
  return (
    <div className="block-wide-image">
      <CaseImage image={{ src, alt, caption }} shape={shape} />
    </div>
  )
}
