import { Matched, Remainder } from './styles'

export function Word({ word, validKey }) {
  if (!word) return null
  const joinedKeys = validKey.join('')
  const matched = word.slice(0, joinedKeys.length)
  const remainder = word.slice(joinedKeys.length)

  const completedClass = (joinedKeys === word) ? 'completed' : ''

  return (
    <>
      <Matched className={completedClass}>
        {matched}
      </Matched>
      <Remainder>{remainder}</Remainder>
    </>
  )
}
