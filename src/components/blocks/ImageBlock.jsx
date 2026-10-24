import CaseImage from './CaseImage'

export default function ImageBlock({ src, alt, caption }) {
  return (
    <div className="block-wide-image">
      <CaseImage image={{ src, alt, caption }} />
    </div>
  )
}
