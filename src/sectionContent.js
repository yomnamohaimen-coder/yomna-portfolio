export function blockHasContent(block) {
  if (!block) return false
  const text = typeof block.text === 'string' ? block.text.trim() : ''

  if (block.type === 'text') return text.length > 0
  if (block.type === 'image') return Boolean(block.src)
  if (block.type === 'image-text') return Boolean(block.src) || text.length > 0
  return false
}

export function sectionHasContent(section) {
  return (section?.blocks ?? []).some(blockHasContent)
}
