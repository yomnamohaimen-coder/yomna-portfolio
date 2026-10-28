import CaseImage from './CaseImage'

// shape: leave out for a wide image, "phone" for a single phone screen,
// or "narrow" for a diagram shown about 460px wide.
export default function ImageBlock({ src, alt, caption, shape }) {
  return (
    <div className="block-wide-image">
      <CaseImage image={{ src, alt, caption }} shape={shape} />
    </div>
  )
}
