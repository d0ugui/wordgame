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
  const [word, setWord] = useState('')

  useEffect(() => {
    setWord(getWord())
  }, [])

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
        <ol>
          <li>Cidade</li>
          <li>Carro</li>
          <li>Profissional</li>
        </ol>
      </CompletedWords>
      <GlobalStyle />
    </Container>
  )
}

export default App
