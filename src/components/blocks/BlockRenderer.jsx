import GalleryBlock from './GalleryBlock'
import ImageBlock from './ImageBlock'
import QuoteBlock from './QuoteBlock'
import ResultsBlock from './ResultsBlock'
import Reveal from './Reveal'
import TextBlock from './TextBlock'
import TwoImagesBlock from './TwoImagesBlock'
import './blocks.css'

const components = {
  text: TextBlock,
  image: ImageBlock,
  twoImages: TwoImagesBlock,
  quote: QuoteBlock,
  results: ResultsBlock,
  gallery: GalleryBlock,
}

// Shows each block with the component for its "type". Unknown types are skipped.
export default function BlockRenderer({ blocks = [] }) {
  return (
    <div className="case-blocks">
      {blocks.map((block, index) => {
        const Component = components[block.type]
        if (!Component) return null
        return (
          <Reveal key={index}>
            <Component {...block} />
          </Reveal>
        )
      })}
    </div>
  )
}
