import { blockHasContent } from '../sectionContent'

function Block({ block }) {
  if (!blockHasContent(block)) return null

  if (block.type === 'text') {
    return <p className="block-text">{block.text}</p>
  }

  if (block.type === 'image') {
    return (
      <figure className="block-image">
        <img src={block.src} alt={block.alt || ''} />
      </figure>
    )
  }

  if (block.type === 'image-text') {
    return (
      <div className="block-image-text">
        {block.src ? <img src={block.src} alt={block.alt || ''} /> : null}
        {block.text?.trim() ? <p>{block.text}</p> : null}
      </div>
    )
  }

  return null
}

export default function ContentBlocks({ blocks }) {
  return (
    <div className="blocks">
      {(blocks ?? []).map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  )
}
