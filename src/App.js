import { useEffect, useState } from 'react'
import { Container, ValidKeys, CompletedWords, TypedKeys } from './styles/app'

import { GlobalStyle } from './styles/global'
import { Word } from './components/Word'

import wordList from './resources/words.json'

const maxTypedKeys = 30

const getWord = () => {
  const index = Math.floor(Math.random() * wordList.length)
  const word = wordList[index]
  return word.toLowerCase()
}

const isValidKey = (key, word) => {
  if (!word) return false
  const result = word.split('').includes(key)
  return result
}

function App() {
  const [typedKeys, setTypedKeys] = useState([])
  const [validKey, setValidKey] = useState([])
  const [completedWords, setCompletedWords] = useState([])
  const [word, setWord] = useState('')

  useEffect(() => {
    setWord(getWord())
  }, [])

  useEffect(() => {
    const wordFromValidKey = validKey.join('').toLowerCase()
    if (word && word === wordFromValidKey) {
      // Buscar uma nova palavra
      let newWord = null
      do {
        newWord = getWord()
      } while (completedWords.includes(newWord))

      setWord(newWord)

      // Adicionar word ao completedWords
      setCompletedWords((prev) => [...prev, word])

      // Limpar o array validKey
      setValidKey([])
    }
  }, [word, validKey, completedWords])

  const handleKeyDown = (e) => {
    e.preventDefault()
    const { key } = e
    setTypedKeys((prev) => [...prev, key].slice(maxTypedKeys * -1))

    if (isValidKey(key, word)) {
      setValidKey((prev) => {
        const isValidLength = prev.length <= word.length
        const isNextChar = isValidLength && word[prev.length] === key
        return isNextChar ? [...prev, key] : prev
      })
    }
  }

  return (
    <Container tabIndex="0" onKeyDown={handleKeyDown}>
      <ValidKeys>
        <Word word={word} validKey={validKey} />
      </ValidKeys>
      <TypedKeys>{typedKeys ? typedKeys.join(' ') : null}</TypedKeys>
      <CompletedWords>
        {completedWords.length >= 1 ? (
          <ol>
            {completedWords.map((word) => (
              <li key={word} className="animeLeft">
                {word}
              </li>
            ))}
          </ol>
        ) : (
          <p>No words</p>
        )}
      </CompletedWords>
      <GlobalStyle />
    </Container>
  )
}

export default App
